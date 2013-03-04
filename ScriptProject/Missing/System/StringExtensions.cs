using System;
using System.Collections.Generic;
using System.Text;

namespace System
{
    public static class StringExtensions
    {
        public static char[] ToCharArray(this string str)
        {
            var array = new char[str.Length];
            for (int index = 0; index < str.Length; index++)
            {
                var chr = str[index];
                array[index] = chr;
            }
            return array;
        }

        public static string StringOfLength(int length)
        {
            return new string((char)0, length);
        }
    }
}
