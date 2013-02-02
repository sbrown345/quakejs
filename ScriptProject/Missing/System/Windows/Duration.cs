using System;
using System.Collections.Generic;
using System.Text;

namespace System.Windows
{
    public struct Duration
    {
        private TimeSpan _timeSpan;

        public TimeSpan TimeSpan
        {
            get
            {
                return this._timeSpan;
            }
        }
    }
}
