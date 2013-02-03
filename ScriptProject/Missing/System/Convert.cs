namespace System
{
    using System.Runtime.CompilerServices;

    public static class Convert
    {
        public static string ToString(object value)
        {
            return value.ToString();
        }

        //[InlineCode("{$System.String}.fromCharCode({this})")]
        public static char ToChar(int value)
        {
            return (char)value;
        }
    }
}