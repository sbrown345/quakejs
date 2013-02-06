namespace System.Windows.Controls
{
    using System.IO;
    using System.Windows.Media;

    using Missing;

    using ScriptProject.Missing.Web;

    public class MediaElement
    {
        // would like to use  AudioContext, not object
        private static readonly AudioContext _context;

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
                try
                {
                    _context = new webkitAudioContext();
                }
                catch
                {
                    // does not support
                }
            }
        }

        public bool AutoPlay { get; set; }

        public AudioBufferSourceNode Source;

        public AudioGain AudioGain;

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
                return MediaElementState.Playing;

                // Doesn't seem to match up, sounds get cut off too early:
                //switch (Source.PlayBackState)
                //{
                //    case AudioBufferSourceNodePlayBackState.UNSCHEDULED_STATE:
                //        return MediaElementState.Closed;
                //    case AudioBufferSourceNodePlayBackState.SCHEDULED_STATE:
                //        return MediaElementState.Opening;
                //    case AudioBufferSourceNodePlayBackState.PLAYING_STATE:
                //        return MediaElementState.Playing;
                //    case AudioBufferSourceNodePlayBackState.FINISHED_STATE:
                //        return MediaElementState.Stopped;
                //    default:
                //        return MediaElementState.Closed;
                //}
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
            if (this.Source == null)
            {
                return;
            }
            this.Source.NoteOff(0);
        }

        public void Play()
        {
            this._timePlayed = DateTime.Now;

            if (_context == null)
            {
                // dodgy workaround so non-webkit doesn't complain
                this.SetNaturalDuration(999);
                return;
            }

            if (this.Source == null)
            {
                this.Source = _context.CreateBufferSource();
            }

            GainNode gainNode = _context.CreateGainNode();

            var buffer = _context.CreateBuffer(this._stream.Buffer, false);
            this.Source.Buffer = buffer;

            this.Source.Connect(gainNode);
            gainNode.Connect(_context.Destination);
            this.Source.NoteOn(0);

            this.AudioGain = gainNode.Gain;
            this.SetNaturalDuration(this.Source.Buffer.Duration);
        }
    }
}