using System;
using System.Collections.Generic;
using System.Text;
using System.Windows.Media.Imaging;

namespace InnoveWare
{
    using System.Html;
    using System.Windows.Controls;

    using Missing.Libs;

    using jQueryApi;

    using Window = Window;

    public class Page
    {
        public static BitmapImage bitmap = new BitmapImage();
        //private Dictionary<Key, int> dictionaryKeys;
        private double oldtime;
        public static Page thePage;
        public static int gwidth
        {
            get
            {
                return thePage.gameCanvas.Width;
            }
        }
        public static int gheight
        {
            get
            {
                return thePage.gameCanvas.Height;
            }
        }
        public static Stats stats;

        // faking stuff from xaml
        public Canvas parentCanvas { get; set; }
        public CanvasElement gameCanvas { get; set; }
        public Image image { get; set; }

        public Page()
        {
            parentCanvas = new Canvas();
            thePage = this;
            image = new Image();
            stats = new Stats();
            stats.SetMode(0);
            jQuery.Select("body").Append(stats.domElement);
            gameCanvas = (CanvasElement)jQuery.Select("#gameCanvas")[0];
        }

        public void Page_Loaded()
        {
            // Initialize Quake.
            oldtime = quake.sys_linux.Sys_FloatTime();
            quake.sys_linux.main(0, null);

            // Game loop.
            Page_CompositionTarget_Rendering();
        }

        void Page_CompositionTarget_Rendering()
        {
            stats.Begin();

            // Synchronize the Silverlight UI thread to Quake framerate.
            double newtime = quake.sys_linux.Sys_FloatTime();
            double time = newtime - oldtime;
            quake.host.Host_Frame(time);
            oldtime = newtime;

            Window.RequestAnimationFrame(Page_CompositionTarget_Rendering);

            stats.End();
        }
    }
}
