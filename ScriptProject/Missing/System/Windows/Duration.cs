using System;
using System.Collections.Generic;
using System.Text;

namespace System.Windows
{
    public class Duration
    {
        private TimeSpan _timeSpan;

        public Duration(TimeSpan timeSpan)
        {
            this._timeSpan = timeSpan;
        }

        public TimeSpan TimeSpan
        {
            get
            {
                return this._timeSpan;
            }
        }
    }
}
