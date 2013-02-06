namespace System.Windows.Controls
{
    using System.IO;
    using System.Runtime.CompilerServices;
    using System.Windows.Media;

    using Missing;

    public class MediaElement
    {
        private static AudioContext _context;

        private MemoryStream _stream;

        private Duration _duration;

        private DateTime _timePlayed;

        private double _volume;

        static MediaElement()
        {
            try
            {
                _context = new AudioContext();
            }
            catch
            {
                _context = new webkitAudioContext();
            }
        }


        public bool AutoPlay { get; set; }

        public AudioBufferSourceNode BufferSource;

        public AudioGain AudioGain;

        private double maxVolume;

        public double Balance { get; set; }

        public object Tag { get; set; }

        public event Action MediaEnded;
        
        public double Volume
        {
            get
            {
                return this._volume;
            }
            set
            {
                if (this.AudioGain != null)
                {
                    this.AudioGain.Value = value;
                }

                this._volume = value;
            }
        }

        public TimeSpan Position
        {
            get
            {
                return new TimeSpan(DateTime.Now.GetTicks() - this._timePlayed.GetTicks());
            }
        }

        public void SetNaturalDuration(long duration)
        {
            this._duration = new Duration(new TimeSpan(duration));
        }

        public Duration NaturalDuration
        {
            get
            {
                return this._duration;
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
            this._stream = stream;

            if (this.AutoPlay)
            {
                this.Play();
            }
        }

        public void Stop()
        {
            this.Stop2();
        }

        [InlineCode("stopSound(this);")]
        public void Stop2()
        {
        }

        public void Play()
        {
            this._timePlayed = DateTime.Now;
            this.Play2();
        }

        [InlineCode("playSound(this.$_stream.dataStream._buffer, this);")]
        private void Play2()
        {
            throw new ImplementedInJavaScript();
        }
    }
}