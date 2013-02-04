using System;
using System.Collections.Generic;
using System.Text;

namespace System
{
    public static class StringExtensions
    {
        public static char[] ToCharArray(this string str)
        {
            throw new ImplementedInJavaScript();
        }

        public static string StringOfLength(int length)
        {
            return new string((char)0, length);
        }
    }
}
