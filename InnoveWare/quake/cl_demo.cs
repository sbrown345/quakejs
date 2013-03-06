/*
Copyright (C) 1996-1997 Id Software, Inc.

This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  

See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.

*/

namespace quake
{
    using System;
    using System.Diagnostics;
    using System.IO;

    using Helper;

    public partial class client
    {
        /*
        ==============================================================================

        DEMO CODE

        When a demo is playing back, all NET_SendMessages are skipped, and
        NET_GetMessages are read from the demo file.

        Whenever cl.time gets past the last received message, another message is
        read from the demo file.
        ==============================================================================
        */

        /*
        ==============
        CL_StopPlayback

        Called when a demo file runs out, or the user starts a game
        ==============
        */
        public static void CL_StopPlayback ()
        {
	        if (!cls.demoplayback)
		        return;

	        Helper.helper.fclose (cls.demofile);
	        cls.demoplayback = false;
	        cls.demofile = null;
	        cls.state = cactive_t.ca_disconnected;

	        if (cls.timedemo)
		        CL_FinishTimeDemo ();
        }

        /*
        ====================
        CL_WriteDemoMessage

        Dumps the current net message, prefixed by the length and view angles
        ====================
        */

        private static bool isStopping = false;
        static void CL_WriteDemoMessage ()
        {
            int len;
            int i;
            float f;

            len = net.net_message.cursize;

            if (cls.demofile.stream.Position >= cls.demofile.stream.Length - 100000 && !isStopping)
            {
                // todo: fix this properly
                isStopping = true;
                console.Con_Printf("Stopped recording demo, too long (todo!)");
                CL_Stop_f();
                return;
            }

            helper.fwrite(len, 4, 1, cls.demofile);
            for (i = 0; i < 3; i++)
            {
                f = (float)cl.viewangles[i];
                helper.fwrite(f, 4, 1, cls.demofile);
            }
            helper.fwrite(net.net_message.data, net.net_message.cursize, 1, cls.demofile);
            helper.fflush(cls.demofile);
            isStopping = false;
        }

        /*
        ====================
        CL_GetMessage

        Handles recording and playback of demos, on top of NET_ code
        ====================
        */
        static int CL_GetMessage ()
        {
            int     r, i;
            double  f;

            if (cls.demoplayback)
            {
                // decide if it is time to grab the next message		
                if (cls.signon == SIGNONS)	// allways grab until fully connected
                {
                    if (cls.timedemo)
                    {
                        if (host.host_framecount == cls.td_lastframe)
                            return 0;		// allready read this frame's message
                        cls.td_lastframe = host.host_framecount;
                        // if this is the second frame, grab the real td_starttime
                        // so the bogus time on the first frame doesn't count
                        if (host.host_framecount == cls.td_startframe + 1)
                            cls.td_starttime = host.realtime;
                    }
                    else if ( /* cl.time > 0 && */ cl.time <= cl.mtime[0])
                    {
                        return 0;		// don't need another message yet
                    }
                }

                // get the next message
                int cursize;
                int cursize_temp = net.net_message.cursize;
                Helper.helper.fread(out cursize_temp, 4, 1, cls.demofile);
                net.net_message.cursize = cursize_temp;
                mathlib.VectorCopy(cl.mviewangles[0], cl.mviewangles[1]);
                for (i = 0; i < 3; i++)
                {
                    r = Helper.helper.fread(out f, 4, 1, cls.demofile);
        		    cl.mviewangles[0][i] = f;
                }

                if (net.net_message.cursize > quakedef.MAX_MSGLEN)
                    sys_linux.Sys_Error("Demo message > MAX_MSGLEN");
                r = Helper.helper.fread(net.net_message.data, net.net_message.cursize, 1, cls.demofile);
                if (r != 1)
                {
                    CL_StopPlayback();
                    return 0;
                }

                return 1;
            }

	        while (true)
	        {
		        r = net.NET_GetMessage (cls.netcon);
        		
		        if (r != 1 && r != 2)
			        return r;
        	
	        // discard nop keepalive message
                if (net.net_message.cursize == 1 && net.net_message.data[0] == net.svc_nop)
			        console.Con_Printf ("<-- server to client keepalive\n");
		        else
			        break;
	        }

            if (cls.demorecording)
                CL_WriteDemoMessage();

            return r;
        }
        
        /*
        ====================
        CL_Stop_f

        stop recording a demo
        ====================
        */
        static void CL_Stop_f()
        {
            if (cmd.cmd_source != cmd.cmd_source_t.src_command)
                return;

            if (!cls.demorecording)
            {
                console.Con_Printf("Not recording a demo.\n");
                return;
            }

            // write a disconnect message to the demo file
            common.SZ_Clear(net.net_message);
            common.MSG_WriteByte(net.net_message, net.svc_disconnect);
            CL_WriteDemoMessage();

            // finish up
            helper.fclose(cls.demofile);
            cls.demofile = null;
            cls.demorecording = false;
           console. Con_Printf("Completed demo\n");
        }

        /*
        ====================
        CL_Record_f

        record <demoname> <map> [cd track]
        ====================
        */
        static void CL_Record_f ()
        {
	        int		c;
	        string	name;
	        int		track;

            if (cmd.cmd_source != cmd.cmd_source_t.src_command)
		        return;

	        c = cmd. Cmd_Argc();
	        if (c != 2 && c != 3 && c != 4)
	        {
		        console.Con_Printf ("record <demoname> [<map> [cd track]]\n");
		        return;
	        }

            if (cmd.Cmd_Argv(1).StartsWith(".."))
	        {
                console.Con_Printf("Relative pathnames are not allowed.\n");
		        return;
	        }

            if (c == 2 && cls.state == client.cactive_t.ca_connected)
	        {
                console.Con_Printf("Can not record - already connected to server\nClient demo recording must be started before connecting\n");
		        return;
	        }

        // write the forced cd track number, or -1
	        if (c == 4)
	        {
		        track =  int.Parse(cmd.Cmd_Argv(3));
                console.Con_Printf(string.Format("Forcing CD track to {0}\n", cls.forcetrack));
	        }
	        else
		        track = -1;
            name = common.com_gamedir + "/" + cmd.Cmd_Argv(1);
            if (name.Length > 1000 /*todo? how many*/)
            {
                throw new /*IO*/Exception("Filename too long");
            }

            //
        // start the map up
        //
            if (c > 2) 
                cmd.Cmd_ExecuteString(("map " + cmd.Cmd_Argv(2) + "\0").ToCharArray(), cmd.cmd_source_t.src_command);
	
        //
        // open the demo file
        //
	        common.COM_DefaultExtension (ref name, ".dem");

            console.Con_Printf(string.Format("recording to {0}.\n", name));
	        cls.demofile = helper.fopen(name, "wb");
	        if (cls.demofile ==null)
	        {
		        console. Con_Printf ("ERROR: couldn't open.\n");
		        return;
	        }

	        cls.forcetrack = track;
	        helper.fprintf (cls.demofile, cls.forcetrack + "\n");
	
	        cls.demorecording = true;
        }

        /*
        ====================
        CL_PlayDemo_f

        play [demoname]
        ====================
        */
        static void CL_PlayDemo_f()
        {
	        string	name;
	        int c;
	        bool neg = false;

            if (cmd.cmd_source != cmd.cmd_source_t.src_command)
		        return;

            if (cmd.Cmd_Argc() != 2)
	        {
		        console.Con_Printf ("play <demoname> : plays a demo\n");
		        return;
	        }

        //
        // disconnect from server
        //
	        CL_Disconnect ();
        	
        //
        // open the demo file
        //
	        name = cmd.Cmd_Argv(1);
	        common.COM_DefaultExtension (ref name, ".dem");

	        console.Con_Printf ("Playing demo from " + name + ".\n");
            Helper.helper.FILE demofile_temp = null;
            common.COM_FOpenFile(name, ref demofile_temp);
            cls.demofile = demofile_temp;
            if (cls.demofile == null)
	        {
		        console.Con_Printf ("ERROR: couldn't open.\n");
		        cls.demonum = -1;		// stop demo loop
		        return;
	        }

	        cls.demoplayback = true;
	        cls.state = cactive_t.ca_connected;
	        cls.forcetrack = 0;

	        while ((c = Helper.helper.getc(cls.demofile)) != '\n')
		        if (c == '-')
			        neg = true;
		        else
			        cls.forcetrack = cls.forcetrack * 10 + (c - '0');

	        if (neg)
		        cls.forcetrack = -cls.forcetrack;
        // ZOID, fscanf is evil
        //	fscanf (cls.demofile, "%i\n", &cls.forcetrack);
        }

        /*
        ====================
        CL_FinishTimeDemo

        ====================
        */
        static void CL_FinishTimeDemo()
        {
            int     frames;
            double  time;

            cls.timedemo = false;

            // the first frame didn't count
            frames = (host.host_framecount - cls.td_startframe) - 1;
            time = host.realtime - cls.td_starttime;
            if (time == 0)
                time = 1;
            console.Con_Printf(frames + " frames " + time + " seconds " + (frames/time) + " fps\n");
        }

        /*
        ====================
        CL_TimeDemo_f

        timedemo [demoname]
        ====================
        */
        static void CL_TimeDemo_f()
        {
            if (cmd.cmd_source != cmd.cmd_source_t.src_command)
                return;

            if (cmd.Cmd_Argc() != 2)
            {
                console.Con_Printf("timedemo <demoname> : gets demo speeds\n");
                return;
            }

            CL_PlayDemo_f();

            // cls.td_starttime will be grabbed at the second frame of the demo, so
            // all the loading time doesn't get counted

            cls.timedemo = true;
            cls.td_startframe = host.host_framecount;
            cls.td_lastframe = -1;		// get a new message this frame
        }
    }
}
