namespace System
{
    using System.Runtime.CompilerServices;

    using Missing;

    [Imported]
    public class MersenneTwister
    {
        [InlineCode("new MersenneTwister({seed})")]
        public MersenneTwister(long seed)
        {
        }

        [InlineCode("{this}.genrand_real1()")]
        public float genrand_real1()
        {
            return 0;
        }
    }

    public class Random
    {
        MersenneTwister mt;

        public Random()
        {
            long ticks = DateTime.Now.GetTicks();
            mt = new MersenneTwister(ticks); //Environment.TickCount - actual MS Random
        }

        public Random(long seed)
        {
            mt = new MersenneTwister(seed);
        }

        public double NextDouble()
        {
            return mt.genrand_real1();
        }

        public int Next()
        {
            float real = this.mt.genrand_real1();
            return FloorInt(real * int.MaxValue);
        }

        public int Next(float maxValue)
        {
            float real = this.mt.genrand_real1();
            return FloorInt(real * maxValue);
        }

        [InlineCode("Math.floor({value})")]
        public static int FloorInt(float value)
        {
            return 0;
        }
    }
}