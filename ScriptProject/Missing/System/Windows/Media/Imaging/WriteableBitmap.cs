namespace System.Windows.Media.Imaging
{
    public class WriteableBitmap
    {
        public WriteableBitmap(int pixelWidth, int pixelHeight)
        {
        }

        public int PixelWidth { get; set; }

        public int[] Pixels
        {
            get
            {
                throw new NotImplementedException();
            }
        }

        public void Invalidate()
        {
            throw new NotImplementedException();
        }
    }
}