namespace System.Windows
{
    using System.Runtime.CompilerServices;

    public class MessageBox
    {
        [InlineCode("console.info({messageBoxText});")]
        public static /*MessageBoxResult*/ void Show(string messageBoxText)
        {
        }
    }
}