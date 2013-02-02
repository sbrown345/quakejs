namespace System
{
    public class TimeSpan
    {
        public static readonly TimeSpan MaxValue = new TimeSpan(/*long.MaxValue*/100000000000);

        public TimeSpan()
        {
        }

        public TimeSpan(long ticks)
        {
            //this._ticks = ticks;
        }

        public long Ticks
        {
            get
            {
                throw new NotImplementedException();
            }
        }

        public TimeSpan Subtract(TimeSpan ts)
        {
            throw new NotImplementedException();
        }

        public int CompareTo(TimeSpan value)
        {
            throw new NotImplementedException();
        }
    }
}