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

    public partial class prog
    {
        //public class eval_t
        //{
        //    int		        @string;
        //    double			_float;
        //    double[]		vector = new double[3];
        //    int			    function;
        //    int				_int;
        //    int				edict;
        //};	

        public class vec3_t
        {
            private readonly eval_t parent;

            public vec3_t(eval_t parent)
            {
                this.parent = parent;
            }

            public globalval this[int index]
            {
                get
                {
                    return cast_float(pr_globals_read(parent.address + index));
                }
                set
                {
                    pr_globals_write(parent.address + index, value);
                }
            }
        }

        public class eval_t
        {
            public eval_t(int address)
            {
                this.address = address;
                vector = new vec3_t(this);
            }

            public static implicit operator int(eval_t m)
            {
                return m.address;
            }

            public int address { get; private set; }

            public bool _float_b
            {
                get
                {
                    return _float != 0;
                }
                set
                {
                    pr_globals_write(address, value ? 1 : 0);
                }
            }

            public double _float
            {
                get
                {
                    return cast_float(pr_globals_read(address));
                }
                set
                {
                    pr_globals_write(address, value);
                }
            }

            public int function
            {
                get
                {
                    return cast_int(pr_globals_read(address));
                }
                set
                {
                    //pr_globals_write(address, value);
                }
            }

            public int edict
            {
                get
                {
                    return cast_int(pr_globals_read(address));
                }
                set
                {
                    throw new NotImplementedException();
                    //pr_globals_write(address, value);
                }
            }

            public int _int
            {
                get
                {
                    return cast_int(pr_globals_read(address));
                }
                set
                {
                    pr_globals_write(address, value);
                }
            }

            public vec3_t vector { get; private set; }

            public int @string
            {
                get
                {
                    return cast_int(pr_globals_read(address));
                }
                set
                {
                    throw new NotImplementedException();
                }
            }

            public override string ToString()
            {
                return string.Format(
                    "address: {0} _int: {1} _float: {2:F1} vector[1]: {3:F1} vector[2]: {4:F1}",
                    this.address,
                    this._int,
                    this._float,
                    this.vector[0],
                    this.vector[1]);
            }
        }

        public const int	MAX_ENT_LEAFS	= 16;
        public class edict_t// :  common.link_t
        {
            public int                      index;
	        public bool	                    free;
            public common.link_t area = new common.link_t();				// linked to a division node or leaf

            public int                      num_leafs;
            public short[]                  leafnums = new short[MAX_ENT_LEAFS];

            public quakedef.entity_state_t  baseline = new quakedef.entity_state_t();

            public double                   freetime;			// sv.time when the object was freed
            public entvars_t	            v = new entvars_t();					// C exported fields from progs
        // other fields from progs come immediately after

            public edict_t(int index)
            {
                this.index = index;
            }
        };
        public static edict_t EDICT_FROM_AREA(common.link_t l)
        {
            for (int i = 0; i < server.sv.edicts.Length; i++)
            {
                var edict = server.sv.edicts[i];
                if (l == edict.area && i + 1 < server.sv.edicts.Length)
                {
                    return edict;
                }
            }
            return null;
            //return common.STRUCT_FROM_LINK(l/*, edict_t,area*/);
        }

        public const int sizeof_edict_t = 516;

        public static edict_t NEXT_EDICT(edict_t e)
        {
            if (e.index + 1 < server.sv.edicts.Length)
            {
                return server.sv.edicts[e.index + 1];
            }

            return null;
        }

        public static int EDICT_TO_PROG(edict_t e) { return e.index * pr_edict_size; }
        public static edict_t PROG_TO_EDICT(int e)
        {
            try
            {
                return server.sv.edicts[e / pr_edict_size];
            }
            catch
            {
                Debug.WriteLine("bad! " + e);
                throw;
            }
        }

        //============================================================================

        public static double G_FLOAT(int o) { return cast_float(pr_globals_read(o)); }
        static int G_INT(int o) { return cast_int(pr_globals_read(o)); }
        static edict_t G_EDICT(int o) { return server.sv.edicts[pr_globals_read(o) / pr_edict_size]; }
        static int G_EDICTNUM(int o) { return NUM_FOR_EDICT(G_EDICT(o)); }
        static double[] G_VECTOR(int o)
        {
            double[] res = new double[3];
            res[0] = cast_float(pr_globals_read(o));
            res[1] = cast_float(pr_globals_read(o + 1));
            res[2] = cast_float(pr_globals_read(o + 2));
            return res;
        }

        private static void G_VECTOR_WRITE(int o, double[] vector)
        {
            pr_globals_write(o,  (double)cast_float(vector[0]));
            pr_globals_write(o + 1, (double)cast_float(vector[1]));
            pr_globals_write(o + 2, (double)cast_float(vector[2]));
        }

        static string G_STRING(int o) { return pr_string(pr_globals_read(o)); }
        //#define	G_FUNCTION(o) (*(func_t *)&pr_globals[o])

        static string E_STRING(edict_t e, int o) { return pr_string(cast_int(readentvar(e.v, o))); }

        delegate void builtin_t ();
    }
}
