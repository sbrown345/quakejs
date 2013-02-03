namespace System.Windows.Media.Imaging
{
    using System.Html;
    using System.Html.Media.Graphics;

    public class WriteableBitmap
    {
        public WriteableBitmap(int width, int height)
        {
            this.PixelWidth = width;
            this.PixelHeight = height;
            this.canvas = (CanvasElement)Document.GetElementById("gameCanvas");
            this.context = (CanvasContext2D)this.canvas.GetContext(Rendering.Render2D);
        }

        public CanvasElement canvas;

        public CanvasContext2D context;

        public int PixelWidth;

        public int PixelHeight;
    }
}