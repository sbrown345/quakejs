namespace System.Windows.Controls
{
    using System.Collections.Generic;

    public class Canvas
    {
        private readonly List<MediaElement> _children = new List<MediaElement>();

        public /*UIElementCollection*/ List<MediaElement> Children
        {
            get
            {
                return this._children;
            }
        }
    }
}