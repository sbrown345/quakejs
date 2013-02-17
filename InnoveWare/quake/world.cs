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
// world.h

namespace quake
{
    using System;
    using System.Diagnostics;

    public static class world
    {
        public class /*struct */ moveclip_t
        {
          public double[] boxmins = new double[3], boxmaxs = new double[3];// enclose the test object along entire move
          public double[] mins = new double[3], maxs = new double[3];	// size of the moving object
          public double[] mins2 = new double[3], maxs2 = new double[3];	// size when clipping against mosnters
          public double[] start, end;
          public trace_t trace;
          public int type;
          public prog.edict_t passedict;
        }

        public class plane_t
        {
            public   double[]	normal = new double[3];
            public double	    dist;
        };

        public class trace_t
        {
	      public bool	    allsolid;	// if true, plane is not valid
	      public bool	    startsolid;	// if true, the initial point was in a solid area
	      public bool	    inopen, inwater;
	      public double	    fraction;		// time completed, 1.0 = didn't hit anything
	      public double[]	endpos = new double[3];			// final position
	      public plane_t	    plane;			// surface normal at impact
          public prog.edict_t ent;			// entity the surface is on
        };
        
        public const int	MOVE_NORMAL		= 0;
        public const int	MOVE_NOMONSTERS	= 1;
        public const int	MOVE_MISSILE	= 2;










                /*
        /*
        ===============================================================================

        HULL BOXES

        ===============================================================================
        */


        static	model.hull_t		box_hull  = new model.hull_t();
        static	bspfile.dclipnode_t[] box_clipnodes = init_box_clip_nodes(6);
        static bspfile.dclipnode_t[] init_box_clip_nodes(int num)
        {
            var box_clipnodes = new bspfile.dclipnode_t[num];
            for (int i = 0; i < num; i++)
            {
                box_clipnodes[i]=new bspfile.dclipnode_t();
            }
            return box_clipnodes;
        }

        private static model.mplane_t[] box_planes = init_box_planes(6);
        static model.mplane_t[] init_box_planes(int num)
        {
            var box_clipnodes = new model.mplane_t[num];
            for (int i = 0; i < num; i++)
            {
                box_clipnodes[i] = new model.mplane_t();
            }
            return box_clipnodes;
        }

        /*
        ===================
        SV_InitBoxHull

        Set up the planes and clipnodes so that the six floats of a bounding box
        can just be stored out and get a proper hull_t structure.
        ===================
        */
        static void SV_InitBoxHull ()
        {
            int		i;
            int		side;

            box_hull.clipnodes = box_clipnodes;
            box_hull.planes = box_planes;
            box_hull.firstclipnode = 0;
            box_hull.lastclipnode = 5;

            for (i=0 ; i<6 ; i++)
            {
                box_clipnodes[i].planenum = i;
		
                side = i&1;
		
                box_clipnodes[i].children[side] = bspfile.CONTENTS_EMPTY;
                if (i != 5)
                    box_clipnodes[i].children[side^1] = i + 1;
                else
                    box_clipnodes[i].children[side^1] = bspfile.CONTENTS_SOLID;
		
                box_planes[i].type = i>>1;
                box_planes[i].normal[i>>1] = 1;
            }
        }


        /*
        ===================
        SV_HullForBox

        To keep everything totally uniform, bounding boxes are turned into small
        BSP trees instead of being compared directly.
        ===================
        */
        static model.hull_t SV_HullForBox(double[] mins, double[] maxs)
        {
            box_planes[0].dist = maxs[0];
            box_planes[1].dist = mins[0];
            box_planes[2].dist = maxs[1];
            box_planes[3].dist = mins[1];
            box_planes[4].dist = maxs[2];
            box_planes[5].dist = mins[2];

            return box_hull;
        }



        /*
        ================
        SV_HullForEntity

        Returns a hull that can be used for testing or clipping an object of mins/maxs
        size.
        Offset is filled in to contain the adjustment that must be added to the
        testing object's origin to get a point to use with the returned hull.
        ================
        */
       static  model.hull_t SV_HullForEntity(prog.edict_t ent, double[] mins, double[] maxs, double[] offset)
        {
            model.model_t model;
            double[] size = new double[3];
            double[] hullmins= new double[3], hullmaxs= new double[3];
            model.hull_t hull;

            // decide which clipping hull to use, based on the size
            if (ent.v.solid == server.SOLID_BSP)
            {	// explicit hulls in the BSP model
                if (ent.v.movetype != server.MOVETYPE_PUSH)
                   sys_linux. Sys_Error("SOLID_BSP without MOVETYPE_PUSH");

                model = server.sv.models[(int)ent.v.modelindex];

                if (model == null || model.type != quake.model.modtype_t.mod_brush)
                   sys_linux.Sys_Error("MOVETYPE_PUSH with a non bsp model");

               mathlib. VectorSubtract(maxs, mins, size);
                if (size[0] < 3)
                    hull = model.hulls[0];
                else if (size[0] <= 32)
                    hull = model.hulls[1];
                else
                    hull = model.hulls[2];

                // calculate an offset value to center the origin
                mathlib.VectorSubtract(hull.clip_mins, mins, offset);
                mathlib.VectorAdd(offset, ent.v.origin, offset);
            }
            else
            {	// create a temp hull from bounding box sizes

                mathlib.VectorSubtract(ent.v.mins, maxs, hullmins);
                mathlib.VectorSubtract(ent.v.maxs, mins, hullmaxs);
                hull = SV_HullForBox(hullmins, hullmaxs);

                mathlib.VectorCopy(ent.v.origin, offset);
            }


            return hull;
        }

       /*
       ===============================================================================

       ENTITY AREA CHECKING

       ===============================================================================
       */

        class/* struct*/ areanode_t
        {
          public int		axis;		// -1 = leaf node
          public double	dist;
          public  areanode_t[]	children = new areanode_t[2];
          public common.link_t trigger_edicts = new common.link_t();
          public common.link_t	solid_edicts = new common.link_t();
        }

        private const int AREA_DEPTH = 4;

        private const int AREA_NODES = 32;

        static	areanode_t[]	sv_areanodes = Init_areanode_t(AREA_NODES);

        private static areanode_t[] Init_areanode_t(int count)
        {
            var nodes = new areanode_t[count];
            for (int i = 0; i < count; i++)
                nodes[i] = new areanode_t();
            return nodes;
        }

        static	int	sv_numareanodes;

        /*
        ===============
        SV_CreateAreaNode

        ===============
        */
        static areanode_t SV_CreateAreaNode(int depth, double[] mins, double[] maxs)
        {
            areanode_t anode= new areanode_t();
            double[] size = new double[3];
            double[] mins1 = new double[3], maxs1 = new double[3], mins2 = new double[3], maxs2 = new double[3];

            anode = sv_areanodes[sv_numareanodes];
            sv_numareanodes++;

            //common.ClearLink(anode.trigger_edicts);
            anode.trigger_edicts.prev = anode.trigger_edicts.next = anode.trigger_edicts;
            //common.ClearLink(anode.solid_edicts);
            anode.solid_edicts.prev = anode.solid_edicts.next = anode.solid_edicts;

            if (depth == AREA_DEPTH)
            {
                anode.axis = -1;
                anode.children[0] = anode.children[1] = null;
                return anode;
            }

            mathlib.VectorSubtract(maxs, mins, size);
            if (size[0] > size[1])
                anode.axis = 0;
            else
                anode.axis = 1;

            anode.dist = 0.5 * (maxs[anode.axis] + mins[anode.axis]);
            mathlib. VectorCopy(mins, mins1);
            mathlib. VectorCopy(mins, mins2);
            mathlib. VectorCopy(maxs, maxs1);
            mathlib. VectorCopy(maxs, maxs2);

            maxs1[anode.axis] = mins2[anode.axis] = anode.dist;

            anode.children[0] = SV_CreateAreaNode(depth + 1, mins2, maxs2);
            anode.children[1] = SV_CreateAreaNode(depth + 1, mins1, maxs1);

            return anode;
        }

        /*
        ===============
        SV_ClearWorld

        ===============
        */
        public static void SV_ClearWorld ()
        {
            SV_InitBoxHull();
            sv_areanodes =  Init_areanode_t(AREA_NODES);
            sv_numareanodes = 0;
            SV_CreateAreaNode(0, server.sv.worldmodel.mins, server.sv.worldmodel.maxs);
        }


        /*
        ===============
        SV_UnlinkEdict

        ===============
        */
       static void SV_UnlinkEdict(prog.edict_t ent)
        {
            if (ent.area.prev == null)
                return;		// not linked in anywhere
            //common.RemoveLink(&ent->area);
            ent.area.prev = ent.area.next = null;
        }


///*
//====================
//SV_TouchLinks
//====================
//*/
//void SV_TouchLinks ( edict_t *ent, areanode_t *node )
//{
//    link_t		*l, *next;
//    edict_t		*touch;
//    int			old_self, old_other;

//// touch linked edicts
//    for (l = node->trigger_edicts.next ; l != &node->trigger_edicts ; l = next)
//    {
//        next = l->next;
//        touch = EDICT_FROM_AREA(l);
//        if (touch == ent)
//            continue;
//        if (!touch->v.touch || touch->v.solid != SOLID_TRIGGER)
//            continue;
//        if (ent->v.absmin[0] > touch->v.absmax[0]
//        || ent->v.absmin[1] > touch->v.absmax[1]
//        || ent->v.absmin[2] > touch->v.absmax[2]
//        || ent->v.absmax[0] < touch->v.absmin[0]
//        || ent->v.absmax[1] < touch->v.absmin[1]
//        || ent->v.absmax[2] < touch->v.absmin[2] )
//            continue;
//        old_self = pr_global_struct->self;
//        old_other = pr_global_struct->other;

//        pr_global_struct->self = EDICT_TO_PROG(touch);
//        pr_global_struct->other = EDICT_TO_PROG(ent);
//        pr_global_struct->time = sv.time;
//        PR_ExecuteProgram (touch->v.touch);

//        pr_global_struct->self = old_self;
//        pr_global_struct->other = old_other;
//    }
	
//// recurse down both sides
//    if (node->axis == -1)
//        return;
	
//    if ( ent->v.absmax[node->axis] > node->dist )
//        SV_TouchLinks ( ent, node->children[0] );
//    if ( ent->v.absmin[node->axis] < node->dist )
//        SV_TouchLinks ( ent, node->children[1] );
//}


///*
//===============
//SV_FindTouchedLeafs

//===============
//*/
//void SV_FindTouchedLeafs (edict_t *ent, mnode_t *node)
//{
//    mplane_t	*splitplane;
//    mleaf_t		*leaf;
//    int			sides;
//    int			leafnum;

//    if (node->contents == CONTENTS_SOLID)
//        return;
	
//// add an efrag if the node is a leaf

//    if ( node->contents < 0)
//    {
//        if (ent->num_leafs == MAX_ENT_LEAFS)
//            return;

//        leaf = (mleaf_t *)node;
//        leafnum = leaf - sv.worldmodel->leafs - 1;

//        ent->leafnums[ent->num_leafs] = leafnum;
//        ent->num_leafs++;			
//        return;
//    }
	
//// NODE_MIXED

//    splitplane = node->plane;
//    sides = BOX_ON_PLANE_SIDE(ent->v.absmin, ent->v.absmax, splitplane);
	
//// recurse down the contacted sides
//    if (sides & 1)
//        SV_FindTouchedLeafs (ent, node->children[0]);
		
//    if (sides & 2)
//        SV_FindTouchedLeafs (ent, node->children[1]);
//}

        /*
        ===============
        SV_LinkEdict

        ===============
        */
        public static void SV_LinkEdict(prog.edict_t ent, bool touch_triggers)
        {
            //todo: runs okay without it
            //areanode_t node;

            //if (ent.area.prev != null)
            //    world.SV_UnlinkEdict(ent);	// unlink from old position

            ////if (ent == sv.edicts)
            //if (ent == server.sv.edicts[0]) //todo! maybe dodgey
            //    return;		// don't add the world

            //if (ent.free)
            //    return;

            //// set the abs box


            //{
            //   mathlib. VectorAdd(ent.v.origin, ent.v.mins, ent.v.absmin);
            //   mathlib.VectorAdd(ent.v.origin, ent.v.maxs, ent.v.absmax);
            //}

            ////
            //// to make items easier to pick up and allow them to be grabbed off
            //// of shelves, the abs sizes are expanded
            ////
            //if ((int)ent.v.flags & FL_ITEM)
            //{
            //    ent.v.absmin[0] -= 15;
            //    ent.v.absmin[1] -= 15;
            //    ent.v.absmax[0] += 15;
            //    ent.v.absmax[1] += 15;
            //}
            //else
            //{	// because movement is clipped an epsilon away from an actual edge,
            //    // we must fully check even when bounding boxes don't quite touch
            //    ent.v.absmin[0] -= 1;
            //    ent.v.absmin[1] -= 1;
            //    ent.v.absmin[2] -= 1;
            //    ent.v.absmax[0] += 1;
            //    ent.v.absmax[1] += 1;
            //    ent.v.absmax[2] += 1;
            //}

            //// link to PVS leafs
            //ent.num_leafs = 0;
            //if (ent.v.modelindex)
            //    SV_FindTouchedLeafs(ent, sv.worldmodel.nodes);

            //if (ent.v.solid == SOLID_NOT)
            //    return;

            //// find the first node that the ent's box crosses
            //node = sv_areanodes;
            //while (1)
            //{
            //    if (node.axis == -1)
            //        break;
            //    if (ent.v.absmin[node.axis] > node.dist)
            //        node = node.children[0];
            //    else if (ent.v.absmax[node.axis] < node.dist)
            //        node = node.children[1];
            //    else
            //        break;		// crosses the node
            //}

            //// link it in	

            //if (ent.v.solid == SOLID_TRIGGER)
            //    InsertLinkBefore(&ent.area, &node.trigger_edicts);
            //else
            //    InsertLinkBefore(&ent.area, &node.solid_edicts);

            //// if touch_triggers, touch all entities at this node and decend for more
            //if (touch_triggers)
            //    SV_TouchLinks(ent, sv_areanodes);
        }



        /*
        ===============================================================================

        POINT TESTING IN HULLS

        ===============================================================================
        */


        /*
        ==================
        SV_HullPointContents

        ==================
        */
        public static int SV_HullPointContents(model.hull_t hull, int num, double[] p)
        {
            double d;
            bspfile.dclipnode_t node;
            model.mplane_t plane;

            while (num >= 0)
            {
                if (num < hull.firstclipnode || num > hull.lastclipnode)
                    sys_linux.Sys_Error("SV_HullPointContents: bad node number");

                node = hull.clipnodes[num];
                plane = hull.planes[node.planenum];

                if (plane.type < 3)
                    d = p[plane.type] - plane.dist;
                else
                    d = mathlib.DotProduct(plane.normal, p) - plane.dist;
                if (d < 0)
                    num = node.children[1];
                else
                    num = node.children[0];
            }

            return num;
        }


        /*
        ==================
        SV_PointContents

        ==================
        */
        public static int SV_PointContents(double[] p)
        {
            int cont;

            cont = SV_HullPointContents(server. sv.worldmodel.hulls[0], 0, p);
            if (cont <= bspfile.CONTENTS_CURRENT_0 && cont >= bspfile.CONTENTS_CURRENT_DOWN)
            cont = bspfile.CONTENTS_WATER;
            return cont;
        }

        public static int SV_TruePointContents(double[] p)
        {
            return SV_HullPointContents(server.sv.worldmodel.hulls[0], 0, p);
        }

        //===========================================================================

        /*
        ============
        SV_TestEntityPosition

        This could be a lot more efficient...
        ============
        */
        public static prog.edict_t SV_TestEntityPosition(prog.edict_t ent)
        {
            trace_t trace;

            trace = SV_Move(ent.v.origin, ent.v.mins, ent.v.maxs, ent.v.origin, 0, ent);

            if (trace.startsolid)
                return server.sv.edicts[0];

            return null;
        }


        /*
        ===============================================================================

        LINE TESTING IN HULLS

        ===============================================================================
        */

        // 1/32 epsilon to keep floating point happy
        private const double DIST_EPSILON = 0.03125;

        /*
        ==================
        SV_RecursiveHullCheck

        ==================
        */
        private static bool SV_RecursiveHullCheck(
            model.hull_t hull, int num, double p1f, double p2f, double[] p1, double[] p2, trace_t trace)
        {
            bspfile.dclipnode_t node;
            model.mplane_t plane;
            double t1, t2;
            double frac;
            int i;
            double[] mid = new double[3];
            int side;
            double midf;

            // check for empty
            if (num < 0)
            {
                if (num != bspfile.CONTENTS_SOLID)
                {
                    trace.allsolid = false;
                    if (num == bspfile.CONTENTS_EMPTY) trace.inopen = true;
                    else trace.inwater = true;
                }
                else trace.startsolid = true;
                return true; // empty
            }

            if (num < hull.firstclipnode || num > hull.lastclipnode) sys_linux.Sys_Error("SV_RecursiveHullCheck: bad node number");

            //
            // find the point distances
            //
            node = hull.clipnodes[num];
            plane = hull.planes[node.planenum];

            if (plane.type < 3)
            {
                t1 = p1[plane.type] - plane.dist;
                t2 = p2[plane.type] - plane.dist;
            }
            else
            {
                t1 = mathlib.DotProduct(plane.normal, p1) - plane.dist;
                t2 = mathlib.DotProduct(plane.normal, p2) - plane.dist;
            }

            if (t1 >= 0 && t2 >= 0) return SV_RecursiveHullCheck(hull, node.children[0], p1f, p2f, p1, p2, trace);
            if (t1 < 0 && t2 < 0) return SV_RecursiveHullCheck(hull, node.children[1], p1f, p2f, p1, p2, trace);


            // put the crosspoint DIST_EPSILON pixels on the near side
            if (t1 < 0) frac = (t1 + DIST_EPSILON) / (t1 - t2);
            else frac = (t1 - DIST_EPSILON) / (t1 - t2);
            if (frac < 0) frac = 0;
            if (frac > 1) frac = 1;

            midf = p1f + (p2f - p1f) * frac;
            for (i = 0; i < 3; i++) mid[i] = p1[i] + frac * (p2[i] - p1[i]);

            side = (t1 < 0) ? 1 : 0;

            // move up to the node
            if (!SV_RecursiveHullCheck(hull, node.children[side], p1f, midf, p1, mid, trace)) return false;

            if (SV_HullPointContents(hull, node.children[side ^ 1], mid) != bspfile.CONTENTS_SOLID) // go past the node
                return SV_RecursiveHullCheck(hull, node.children[side ^ 1], midf, p2f, mid, p2, trace);

            if (trace.allsolid) return false; // never got out of the solid area

            //==================
            // the other side of the node is solid, this is the impact point
            //==================
            if (side == 0)
            {
                mathlib.VectorCopy(plane.normal, trace.plane.normal);
                trace.plane.dist = plane.dist;
            }
            else
            {
                mathlib.VectorSubtract(mathlib.vec3_origin, plane.normal, trace.plane.normal);
                trace.plane.dist = -plane.dist;
            }

            while (SV_HullPointContents(hull, hull.firstclipnode, mid) == bspfile.CONTENTS_SOLID)
            {
                // shouldn't really happen, but does occasionally
                frac -= 0.1;
                if (frac < 0)
                {
                    trace.fraction = midf;
                    mathlib.VectorCopy(mid, trace.endpos);
                    console.Con_DPrintf("backup past 0\n");
                    return false;
                }
                midf = p1f + (p2f - p1f) * frac;
                for (i = 0; i < 3; i++) mid[i] = p1[i] + frac * (p2[i] - p1[i]);
            }

            trace.fraction = midf;
            mathlib.VectorCopy(mid, trace.endpos);

            return false;
        }


        /*
        ==================
        SV_ClipMoveToEntity

        Handles selection or creation of a clipping hull, and offseting (and
        eventually rotation) of the end points
        ==================
        */
        public static trace_t SV_ClipMoveToEntity(prog.edict_t ent, double[] start, double[] mins, double[] maxs, double[] end)
        {
            trace_t trace;
            double[] offset = new double[3];
            double[] start_l = new double[3], end_l = new double[3];
            model.hull_t hull;

            // fill in a default trace
            trace = new trace_t();
            trace.fraction = 1;
            trace.allsolid = true;
            mathlib.VectorCopy(end, trace.endpos);

            // get the clipping hull
            hull = SV_HullForEntity(ent, mins, maxs, offset);

            mathlib.VectorSubtract(start, offset, start_l);
            mathlib.VectorSubtract(end, offset, end_l);


            // trace a line through the apropriate clipping hull
            SV_RecursiveHullCheck(hull, hull.firstclipnode, 0, 1, start_l, end_l, trace);


            // fix trace up by the offset
            if (trace.fraction != 1)
                mathlib.VectorAdd(trace.endpos, offset, trace.endpos);

            // did we clip the move?
            if (trace.fraction < 1 || trace.startsolid)
                trace.ent = ent;

            return trace;
        }

        //===========================================================================

        /*
        ====================
        SV_ClipToLinks

        Mins and maxs enclose the entire area swept by the move
        ====================
        */
        static void SV_ClipToLinks(areanode_t node, moveclip_t clip)
        {
            common.link_t		l, next;
            prog.edict_t		touch;
            trace_t		trace;

        // touch linked edicts
            for (l = node.solid_edicts.next ; l != node.solid_edicts ; l = next)
            {
                next = l.next;
                touch = prog. EDICT_FROM_AREA(l);
                if (touch.v.solid == server.SOLID_NOT)
                    continue;
                if (touch == clip.passedict)
                    continue;
                if (touch.v.solid == server. SOLID_TRIGGER)
                  sys_linux.  Sys_Error ("Trigger in clipping list");

                if (clip.type == MOVE_NOMONSTERS && touch.v.solid != server.SOLID_BSP)
                    continue;

                if (clip.boxmins[0] > touch.v.absmax[0]
                || clip.boxmins[1] > touch.v.absmax[1]
                || clip.boxmins[2] > touch.v.absmax[2]
                || clip.boxmaxs[0] < touch.v.absmin[0]
                || clip.boxmaxs[1] < touch.v.absmin[1]
                || clip.boxmaxs[2] < touch.v.absmin[2] )
                    continue;

                //if (clip.passedict && clip.passedict.v.size[0] && !touch.v.size[0])
                if (clip.passedict !=null && clip.passedict.v.size[0] != 0 && touch.v.size[0] != 0)
                    continue;	// points never interact

            // might intersect, so do an exact clip
                if (clip.trace.allsolid)
                    return;
                if (clip.passedict != null)
                {
                    if (prog.PROG_TO_EDICT(touch.v.owner) == clip.passedict)
                        continue;	// don't clip against own missiles
                    if (prog.PROG_TO_EDICT(clip.passedict.v.owner) == touch)
                        continue;	// don't clip against owner
                }

                if (((int)touch.v.flags & server.FL_MONSTER )!=  0)
                    trace = SV_ClipMoveToEntity (touch, clip.start, clip.mins2, clip.maxs2, clip.end);
                else
                    trace = SV_ClipMoveToEntity (touch, clip.start, clip.mins, clip.maxs, clip.end);
                if (trace.allsolid || trace.startsolid ||
                trace.fraction < clip.trace.fraction)
                {
                    trace.ent = touch;
                    if (clip.trace.startsolid)
                    {
                        clip.trace = trace;
                        clip.trace.startsolid = true;
                    }
                    else
                        clip.trace = trace;
                }
                else if (trace.startsolid)
                    clip.trace.startsolid = true;
            }
	
        // recurse down both sides
            if (node.axis == -1)
                return;

            if ( clip.boxmaxs[node.axis] > node.dist )
                SV_ClipToLinks ( node.children[0], clip );
            if ( clip.boxmins[node.axis] < node.dist )
                SV_ClipToLinks ( node.children[1], clip );
        }


        /*
        ==================
        SV_MoveBounds
        ==================
        */
      static  void SV_MoveBounds (double[] start, double[] mins, double[] maxs, double[] end, double[] boxmins, double[] boxmaxs)
        {
        //#if 0
        //// debug to test against everything
        //boxmins[0] = boxmins[1] = boxmins[2] = -9999;
        //boxmaxs[0] = boxmaxs[1] = boxmaxs[2] = 9999;
        //#else
            int		i;
	
            for (i=0 ; i<3 ; i++)
            {
                if (end[i] > start[i])
                {
                    boxmins[i] = start[i] + mins[i] - 1;
                    boxmaxs[i] = end[i] + maxs[i] + 1;
                }
                else
                {
                    boxmins[i] = end[i] + mins[i] - 1;
                    boxmaxs[i] = start[i] + maxs[i] + 1;
                }
            }
        //#endif
        }

        /*
        ==================
        SV_Move
        ==================
        */
        public static trace_t SV_Move(double[]  start, double[]  mins, double[] maxs, double[]  end, int type, prog.edict_t passedict)
        {
            moveclip_t clip;
            int i;

            clip = new moveclip_t();

            // clip to world
            //Debug.WriteLine("SV_Move ?? SV_ClipMoveToEntity");
            clip.trace = SV_ClipMoveToEntity(server.sv.edicts[0], start, mins, maxs, end);

            clip.start = start;
            clip.end = end;
            clip.mins = mins;
            clip.maxs = maxs;
            clip.type = type;
            clip.passedict = passedict;

            if (type == MOVE_MISSILE)
            {
                for (i = 0; i < 3; i++)
                {
                    clip.mins2[i] = -15;
                    clip.maxs2[i] = 15;
                }
            }
            else
            {
             mathlib.VectorCopy(mins, clip.mins2);
             mathlib.VectorCopy(maxs, clip.maxs2);
            }

            // create the bounding box of the entire move
            SV_MoveBounds(start, clip.mins2, clip.maxs2, end, clip.boxmins, clip.boxmaxs);

            // clip to entities
            //Debug.WriteLine("SV_Move ?? SV_ClipToLinks");
            SV_ClipToLinks(sv_areanodes[0], clip);

            return clip.trace;
        }
    }
}