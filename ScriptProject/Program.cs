namespace ScriptProject
{
    using System.Runtime.CompilerServices;

    using InnoveWare;

    [GlobalMethods]
    internal static class Program
    {
        private static void Main()
        {
        }

        public static void InitGame()
        {
            var page = new Page();
            page.Page_Loaded();
        }
    }
}