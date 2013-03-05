using System;

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
// sv_main.c -- server main program

namespace quake
{
    using System.Diagnostics;

    using Missing;

    public partial class server
    {

        public const int STEPSIZE = 18;

        /*
        =============
        SV_CheckBottom

        Returns false if any part of the bottom of the entity is off an edge that
        is not a staircase.

        =============
        */
        static int c_yes, c_no;

        public static bool SV_CheckBottom(prog.edict_t ent)
        {
            double[] mins = ArrayHelpers.ExplcitDoubleArray(3), maxs = ArrayHelpers.ExplcitDoubleArray(3), start = ArrayHelpers.ExplcitDoubleArray(3), stop = ArrayHelpers.ExplcitDoubleArray(3);
            world.trace_t trace;
            int x, y;
            double mid, bottom;

            mathlib.VectorAdd(ent.v.origin, ent.v.mins, mins);
            mathlib.VectorAdd(ent.v.origin, ent.v.maxs, maxs);

            // if all of the points under the corners are solid world, don't bother
            // with the tougher checks
            // the corners must be within 16 of the midpoint
            start[2] = mins[2] - 1;
            for (x = 0; x <= 1; x++)
                for (y = 0; y <= 1; y++)
                {
                    start[0] = x != 0 ? maxs[0] : mins[0];
                    start[1] = y != 0 ? maxs[1] : mins[1];
                    if (world.SV_PointContents(start) != bspfile.CONTENTS_SOLID)
                        goto realcheck;
                }

            c_yes++;
            return true;		// we got out easy

        realcheck:
            c_no++;
            //
            // check it for real...
            //
            start[2] = mins[2];

            // the midpoint must be within 16 of the bottom
            start[0] = stop[0] = (mins[0] + maxs[0]) * 0.5;
            start[1] = stop[1] = (mins[1] + maxs[1]) * 0.5;
            stop[2] = start[2] - 2 * STEPSIZE;
            trace = world.SV_Move(start, mathlib.vec3_origin, mathlib.vec3_origin, stop, 1, ent);

            if (trace.fraction == 1.0)
                return false;
            mid = bottom = trace.endpos[2];

            // the corners must be within 16 of the midpoint	
            for (x = 0; x <= 1; x++)
                for (y = 0; y <= 1; y++)
                {
                    start[0] = stop[0] = x != 0 ? maxs[0] : mins[0];
                    start[1] = stop[1] = y != 0 ? maxs[1] : mins[1];

                    trace = world.SV_Move(start, mathlib.vec3_origin, mathlib.vec3_origin, stop, 1, ent);

                    if (trace.fraction != 1.0 && trace.endpos[2] > bottom)
                        bottom = trace.endpos[2];
                    if (trace.fraction == 1.0 || mid - trace.endpos[2] > STEPSIZE)
                        return false;
                }

            c_yes++;
            return true;
        }


        /*
        =============
        SV_Movestep

        Called by monster program code.
        The move will be adjusted for slopes and stairs, but if the move isn't
        possible, no move is done, false is returned, and
        pr_global_struct.trace_normal is set to the normal of the blocking wall
        =============
        */

        private static int SV_Movestep_count = -1;
        public static bool SV_Movestep(prog.edict_t ent, double[] move, bool relink)
        {
            double dz;
            double[] oldorg = ArrayHelpers.ExplcitDoubleArray(3), neworg = ArrayHelpers.ExplcitDoubleArray(3), end = ArrayHelpers.ExplcitDoubleArray(3);
            world.trace_t trace;
            int i;
            prog.edict_t enemy;

            SV_Movestep_count++;
            Debug.WriteLine("SV_Movestep " + SV_Movestep_count);

            // try the move	
            mathlib.VectorCopy(ent.v.origin, oldorg);
            mathlib.VectorAdd(ent.v.origin, move, neworg);

            // flying monsters don't step up
            if (((int)ent.v.flags & (FL_SWIM | FL_FLY)) != 0)
            {
                // try one move with vertical motion, then one without
                for (i = 0; i < 2; i++)
                {
                    mathlib.VectorAdd(ent.v.origin, move, neworg);
                    enemy = prog.PROG_TO_EDICT(ent.v.enemy);
                    if (i == 0 && enemy != sv.edicts[0])
                    {
                        dz = ent.v.origin[2] - prog.PROG_TO_EDICT(ent.v.enemy).v.origin[2];
                        if (dz > 40)
                            neworg[2] -= 8;
                        if (dz < 30)
                            neworg[2] += 8;
                    }
                    trace = world.SV_Move(ent.v.origin, ent.v.mins, ent.v.maxs, neworg, 0, ent);

                    if (trace.fraction == 1)
                    {
                        if (((int)ent.v.flags & FL_SWIM) != 0
                            && world.SV_PointContents(trace.endpos) == bspfile.CONTENTS_EMPTY)
                        {
                            Debug.WriteLine("bspfile.CONTENTS_EMPTY etc");
                            return false;	// swim monster left water
                        }

                        Debug.WriteLine("NOT bspfile.CONTENTS_EMPTY etc");

                        mathlib.VectorCopy(trace.endpos, ent.v.origin);
                        if (relink)
                            world.SV_LinkEdict(ent, true);
                        return true;
                    }

                    if (enemy == sv.edicts[0])
                        break;
                }

                Debug.WriteLine("dfasdgsdfgdf sdsdfasdsdf");
                return false;
            }

            // push down from a step height above the wished position
            neworg[2] += STEPSIZE;
            mathlib.VectorCopy(neworg, end);
            end[2] -= STEPSIZE * 2;

            trace = world.SV_Move(neworg, ent.v.mins, ent.v.maxs, end, 0, ent);

            if (trace.allsolid)
            {
                Debug.WriteLine("trace.allsolid");
                return false;
            }

            if (trace.startsolid)
            {
                Debug.WriteLine("trace.startsolid");
                neworg[2] -= STEPSIZE;
                trace = world.SV_Move(neworg, ent.v.mins, ent.v.maxs, end, 0, ent);
                if (trace.allsolid || trace.startsolid)
                {
                    Debug.WriteLine("trace.startsolid return false");
                    return false;
                }
            }
            if (trace.fraction == 1)
            {
                Debug.WriteLine("trace.fraction == 1");
                // if monster had the ground pulled out, go ahead and fall
                if (((int)ent.v.flags & FL_PARTIALGROUND )!= 0)
                {
                    mathlib.VectorAdd(ent.v.origin, move, ent.v.origin);
                    if (relink)
                        world.SV_LinkEdict(ent, true);
                    ent.v.flags = (int)ent.v.flags & ~FL_ONGROUND;
                    //	Con_Printf ("fall down\n"); 
                    Debug.WriteLine("trace.fraction == 1 return true");
                    return true;
                }

                Debug.WriteLine("walked off an edge");
                return false;		// walked off an edge
            }

            // check point traces down for dangling corners
            mathlib.VectorCopy(trace.endpos, ent.v.origin);

            if (!SV_CheckBottom(ent))
            {
                Debug.WriteLine("!SV_CheckBottom(ent)");
                if (((int)ent.v.flags & FL_PARTIALGROUND) != 0)
                {	// entity had floor mostly pulled out from underneath it
                    // and is trying to correct
                    if (relink)
                        world.SV_LinkEdict(ent, true);

                    Debug.WriteLine("!SV_CheckBottom(ent) return true");
                    return true;
                }
                mathlib.VectorCopy(oldorg, ent.v.origin);

                Debug.WriteLine("!SV_CheckBottom(ent) return false");
                return false;
            }

            if (((int)ent.v.flags & FL_PARTIALGROUND) != 0)
            {
                //		Con_Printf ("back on ground\n"); 
                ent.v.flags = (int)ent.v.flags & ~FL_PARTIALGROUND;
            }
            ent.v.groundentity = prog.EDICT_TO_PROG(trace.ent);

            // the move is ok
            if (relink)
                world.SV_LinkEdict(ent, true);
            Debug.WriteLine(" return true");
            return true;
        }


        //============================================================================

        /*
        ======================
        SV_StepDirection

        Turns to the movement direction, and walks the current distance if
        facing it.

        ======================
        */
        
       static bool SV_StepDirection (prog.edict_t ent, double yaw, double dist)
        {
            double[]		move = new double[3] {0, 0, 0}, oldorigin = new double[3] {0, 0, 0};
            double		delta;

            ent.v.ideal_yaw = yaw;
            prog.PF_changeyaw();

            yaw = yaw*mathlib.M_PI*2 / 360;
            move[0] = Math.Cos(yaw)*dist;
            move[1] = Math.Sin(yaw)*dist;
            move[2] = 0;

            mathlib.VectorCopy (ent.v.origin, oldorigin);
            if (server.SV_Movestep (ent, move, false))
            {
                delta = ent.v.angles[quakedef.YAW] - ent.v.ideal_yaw;
                if (delta > 45 && delta < 315)
                {		// not turned far enough, so don't take the step
                    mathlib.VectorCopy (oldorigin, ent.v.origin);
                }
                world.SV_LinkEdict (ent, true);
                return true;
            }
            world.SV_LinkEdict (ent, true);

            return false;
        }

        /*
        ======================
        SV_FixCheckBottom

        ======================
        */
        static void SV_FixCheckBottom (prog.edict_t ent)
        {
        //	Con_Printf ("SV_FixCheckBottom\n");

            ent.v.flags = (int)ent.v.flags | FL_PARTIALGROUND;
        }



        /*
        ================
        SV_NewChaseDir

        ================
        */

        private const int DI_NODIR = -1;
        public static void SV_NewChaseDir (prog.edict_t actor, prog.edict_t enemy, double dist)
        {
            double		deltax,deltay;
            double[]	d = new double[3] {0, 0, 0};
            double		tdir, olddir, turnaround;

            olddir = mathlib. anglemod( (int)(actor.v.ideal_yaw/45)*45 );
            turnaround = mathlib.anglemod(olddir - 180);

            deltax = enemy.v.origin[0] - actor.v.origin[0];
            deltay = enemy.v.origin[1] - actor.v.origin[1];
            if (deltax>10)
                d[1]= 0;
            else if (deltax<-10)
                d[1]= 180;
            else
                d[1]= DI_NODIR;
            if (deltay<-10)
                d[2]= 270;
            else if (deltay>10)
                d[2]= 90;
            else
                d[2]= DI_NODIR;

        // try direct route
            if (d[1] != DI_NODIR && d[2] != DI_NODIR)
            {
                if (d[1] == 0)
                    tdir = d[2] == 90 ? 45 : 315;
                else
                    tdir = d[2] == 90 ? 135 : 215;

                if (tdir != turnaround && SV_StepDirection(actor, tdir, dist))
                    return;
            }

        // try other directions
            if ((((Helper.helper.rand() & 3) & 1) != 0) || (Math.Abs(deltay) > Math.Abs(deltax)))
            {
                tdir=d[1];
                d[1]=d[2];
                d[2]=tdir;
            }

            if (d[1]!=DI_NODIR && d[1]!=turnaround 
            && SV_StepDirection(actor, d[1], dist))
                    return;

            if (d[2]!=DI_NODIR && d[2]!=turnaround
            && SV_StepDirection(actor, d[2], dist))
                    return;

        /* there is no direct path to the player, so pick another direction */

            if (olddir!=DI_NODIR && SV_StepDirection(actor, olddir, dist))
                    return;

            if ((Helper.helper.rand() & 1) != 0) 	/*randomly determine direction of search*/
            {
                for (tdir=0 ; tdir<=315 ; tdir += 45)
                    if (tdir!=turnaround && SV_StepDirection(actor, tdir, dist) )
                            return;
            }
            else
            {
                for (tdir=315 ; tdir >=0 ; tdir -= 45)
                    if (tdir!=turnaround && SV_StepDirection(actor, tdir, dist) )
                            return;
            }

            if (turnaround != DI_NODIR && SV_StepDirection(actor, turnaround, dist) )
                    return;

            actor.v.ideal_yaw = olddir;		// can't move

        // if a bridge was pulled out from underneath a monster, it may not have
        // a valid standing position at all

            if (!SV_CheckBottom (actor))
                SV_FixCheckBottom (actor);

        }

        /*
        ======================
        SV_CloseEnough

        ======================
        */
        static bool SV_CloseEnough(prog.edict_t ent, prog.edict_t goal, double dist)
        {
            int i;

            for (i = 0; i < 3; i++)
            {
                if (goal.v.absmin[i] > ent.v.absmax[i] + dist)
                    return false;
                if (goal.v.absmax[i] < ent.v.absmin[i] - dist)
                    return false;
            }
            return true;
        }

        /*
        ======================
        world.SV_MoveToGoal

        ======================
        */

        public static void SV_MoveToGoal()
        {
            Debug.WriteLine("SV_MoveToGoal");
            prog.edict_t ent, goal;
            double dist;
          
            ent = prog.PROG_TO_EDICT(prog.pr_global_struct[0].self);
            goal = prog.PROG_TO_EDICT(ent.v.goalentity);
            dist = prog.G_FLOAT(prog.OFS_PARM0);

            if (!(((int)ent.v.flags & (FL_ONGROUND | FL_FLY | FL_SWIM)) != 0))
            {
                //prog.G_FLOAT(prog.OFS_RETURN) = 0;
                prog.pr_globals_write(prog.OFS_RETURN, 0);
                return;
            }

            // if the next step hits the enemy, return immediately

            if (prog.PROG_TO_EDICT(ent.v.enemy) != sv.edicts[0] && SV_CloseEnough(ent, goal, dist)) 
                return;

            // bump around...
            if ((Helper.helper.rand() & 3) == 1 || !SV_StepDirection(ent, ent.v.ideal_yaw, dist))
            {
                SV_NewChaseDir(ent, goal, dist);
            }
        } 
    }
}