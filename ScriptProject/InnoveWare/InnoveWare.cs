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
   }
}
