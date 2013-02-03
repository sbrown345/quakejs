namespace System.IO
{
    using Missing;

    public class MemoryStream : Stream
    {
        public MemoryStream(byte[] data) : base(new ArrayBuffer())
        {
            throw new NotImplementedException();
        }
    }
}