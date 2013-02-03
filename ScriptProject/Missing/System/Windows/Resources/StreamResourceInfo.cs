namespace System.Windows.Resources
{
    public class StreamResourceInfo
    {
        private Stream _stream;

        public StreamResourceInfo(Stream stream, string contentType)
        {
            if (stream == null)
            {
                throw new Exception("stream");
            }
            this._stream = stream;
        }

        public Stream Stream
        {
            get
            {
                return _stream;
            }
        }
    }
}