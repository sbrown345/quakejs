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

        public static void KeyPress(int quake_key)
        {
            quake.keys.Key_Event(quake_key, true);
        }
    }
}