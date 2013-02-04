using System;
using System.Collections.Generic;
using System.Text;

namespace System.Windows.Controls
{
    using System.Windows.Media.Imaging;

    public class Image
    {
        public /*UIElementCollection*/ List<MediaElement> Children
        {
            get
            {
                throw new ImplementedInJavaScript();
            }
        }

        public WriteableBitmap Source;
    }
}
