namespace System.IO
{
    public class MemoryStream : Stream
    {
        public MemoryStream(Uint8Array data)
            : base(data.Buffer)
        {
            
        }
    }
}