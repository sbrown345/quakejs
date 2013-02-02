using System;
using System.Collections.Generic;
using System.Text;

namespace Missing
{
    public static class DateTimeExtensions
    {
        public static long GetTicks(this DateTime dateTime)
        {
            return dateTime.Ticks;
        }
    }
}
