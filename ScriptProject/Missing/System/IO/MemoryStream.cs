namespace System.IO
{
    using System.Runtime.CompilerServices;

    [Imported]
    [ModuleName(null)]
    [IgnoreNamespace]
    public class MemoryStream : Stream
    {
        public MemoryStream(Uint8Array data)
            : base(data.Buffer)
        {
            
        }
    }
}