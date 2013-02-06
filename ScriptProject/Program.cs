namespace ScriptProject
{
    using System.Runtime.CompilerServices;

    using InnoveWare;

    using quake;

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
            keys.Key_Event(quake_key, true);
        }

        public static void ExecuteCommands(string text)
        {
            cmd.Cbuf_AddText(text);
        }

        public static double GetVariableValue(string name)
        {
            var value = cvar_t.Cvar_VariableValue(name);
            return value;
        }
    }
}