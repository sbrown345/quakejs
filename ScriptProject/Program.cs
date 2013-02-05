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

        ///// <summary>
        ///// Volume from 0 - 255
        ///// </summary>
        //public static void ChangeVolume(int volume)
        //{
        //    // all channels
        //    foreach (var channel in sound.channels)
        //    {
        //        channel.master_vol = volume;
        //    }

        //    // sounds currently playing
        //    foreach (var mediaElement in Page.thePage.parentCanvas.Children)
        //    {
        //        mediaElement.Volume = volume;
        //    }
        //}
    }
}