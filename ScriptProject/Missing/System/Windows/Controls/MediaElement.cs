namespace System.Windows.Controls
{
    using System.IO;
    using System.Runtime.CompilerServices;
    using System.Windows.Media;

    using Missing;

    public class MediaElement
    {
        private MemoryStream _stream;
        private Duration _duration;
        private DateTime _timePlayed;
        private object _tag;
        private double _volume;
        private double _balance;
        
        public bool AutoPlay { get; set; }

        public AudioBufferSourceNode BufferSource;
        public AudioGain AudioGain;

        public object Tag
        {
            get
            {
                return _tag;
            }
            set
            {
                _tag = value;
            }
        }

        public event Action MediaEnded;// { get; set; }

        public double Volume
        {
            get
            {
                return _volume;
            }
            set
            {
                if (AudioGain != null)
                {
                    AudioGain.Value = value;
                }

                _volume = value;
            }
        }

        public double Balance
        {
            get
            {
                return _balance;
            }
            set
            {
                _balance = value;
            }
        }

        public TimeSpan Position
        {
            get
            {
                return new TimeSpan(DateTime.Now.GetTicks() - _timePlayed.GetTicks());
            }
        }

        public void SetNaturalDuration(long duration)
        {
            _duration = new Duration(new TimeSpan(duration));
        }

        public Duration NaturalDuration
        {
            get
            {
                return _duration;
            }
        }

        public MediaElementState CurrentState
        {
            get
            {
                // todo: can get playback state from js
                return MediaElementState.Playing;
            }
        }

        public void SetSource(MemoryStream stream)
        {
            _stream = stream;

            if (AutoPlay)
            {
                Play();
            }
        }

        public void Stop()
        {
            Stop2();
        }

        [InlineCode("stopSound(this);")]
        public void Stop2()
        {
        }

        public void Play()
        {
            _timePlayed = DateTime.Now;
            Play2();
        }

        [InlineCode("playSound(this.$_stream.dataStream._buffer, this);")]
        private void Play2()
        {
            throw new ImplementedInJavaScript();
        }
    }
}