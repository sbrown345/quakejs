using System;
using System.Collections.Generic;
using System.Text;
using System.Windows.Media.Imaging;

namespace InnoveWare
{
    using System.Windows.Controls;

    public class Page
   {
       private int _frames_count = 0;
       private int _last_frame = 0;
       private DateTime _lastTime;
       public static BitmapImage bitmap = new BitmapImage();
       //private Dictionary<Key, int> dictionaryKeys;
       private double oldtime;
       public static Page thePage;
       public static int gwidth;
       public static int gheight;
       private int count_fps = 0;
       private int nb_fps = 0;

       // faking stuff from xaml
       public Canvas parentCanvas { get; set; }
       public Image image { get; set; }

       public Page()
       {
           parentCanvas = new Canvas();
           thePage = this;
       }

       public void Page_Loaded()
       {
           // hardcode for now
           gwidth = 800; //(int)Application.Current.Host.Content.ActualWidth; //if this is bigger it was crashing because it was larger than 1024 and some buffer didn't liek it
           gheight = 600;// (int)Application.Current.Host.Content.ActualHeight;
           
           // Initialize Quake.
           oldtime = quake.sys_linux.Sys_FloatTime();
           quake.sys_linux.main(0, null);

           // Game loop.
           Page_CompositionTarget_Rendering();
       }

       void Page_CompositionTarget_Rendering()
       {
           // Count frame.
           _frames_count++;

           // Synchronize the Silverlight UI thread to Quake framerate.
           double newtime = quake.sys_linux.Sys_FloatTime();
           double time = newtime - oldtime;
           quake.host.Host_Frame(time);
           oldtime = newtime;
           
           Window.RequestAnimationFrame(Page_CompositionTarget_Rendering);
       }
   }
}
