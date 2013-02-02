namespace System.Windows.Controls
{
    using System.IO;
    using System.Windows.Media;

    public class MediaElement
    {
        public bool AutoPlay { get; set; }

        public object Tag
        {
            get
            {
                throw new NotImplementedException();
            }
            set
            {
                throw new NotImplementedException();
            }
        }

        public event /*RoutedEventHandler*/ EventHandler MediaEnded
        {
            add
            {
                throw new NotImplementedException();
            }
            remove
            {
                throw new NotImplementedException();
            }
        }

        public double Volume
        {
            get
            {
                throw new NotImplementedException();
            }
            set
            {
                throw new NotImplementedException();
            }
        }

        public double Balance
        {
            get
            {
                throw new NotImplementedException();
            }
            set
            {
                throw new NotImplementedException();
            }
        }

        public TimeSpan Position
        {
            get
            {
                throw new NotImplementedException();
            }
            set
            {
                throw new NotImplementedException();
            }
        }

        public Duration NaturalDuration
        {
            get
            {
                throw new NotImplementedException();
            }
        }

        public MediaElementState CurrentState
        {
            get
            {
                throw new NotImplementedException();
            }
        }

        public void SetSource(Stream stream)
        {
            throw new NotImplementedException();
        }

        public void Stop()
        {
            throw new NotImplementedException();
        }

        public void Play()
        {
            throw new NotImplementedException();
        }
    }
}