namespace System.Windows
{
    using System.Runtime.CompilerServices;

    public class MessageBox
    {
        [InlineCode("alert({messageBoxText});")]
        public static /*MessageBoxResult*/ void Show(string messageBoxText)
        {
        }
    }
}