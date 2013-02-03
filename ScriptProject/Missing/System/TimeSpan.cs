namespace System
{
    public class TimeSpan
    {
        private readonly long _ticks;

        public static readonly TimeSpan MaxValue = new TimeSpan( /*long.MaxValue*/100000000000);

        public TimeSpan()
        {
        }

        public TimeSpan(long ticks)
        {
            _ticks = ticks;
        }

        public long Ticks
        {
            get
            {
                return this._ticks;
            }
        }

        public TimeSpan Subtract(TimeSpan ts)
        {
            long ticks = _ticks - ts._ticks;
            return new TimeSpan(ticks);
        }

        public int CompareTo(TimeSpan value)
        {
            if (value == null)
                return 1;
            long num = ((TimeSpan)value)._ticks;
            if (this._ticks > num)
                return 1;
            return this._ticks < num ? -1 : 0;
        }
    }
}