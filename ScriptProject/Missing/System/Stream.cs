namespace System
{
    using System.Runtime.CompilerServices;

    using Missing;

    [Imported]
    [ModuleName(null)]
    [IgnoreNamespace]
    public class Stream
    {
        public Stream(ArrayBuffer arrayBuffer)
        {
            throw new NotImplementedException();
        }

        public char ReadByte()
        {
            throw new NotImplementedException();
        }

        public void Seek(int position, object begin)
        {
            throw new NotImplementedException();
        }

        public void Close()
        {
            throw new NotImplementedException();
        }

        public int Length
        {
            get
            {
                throw new NotImplementedException();
            }
        }

        public int Read(Uint8Array buffer, int offset, int count)
        {
            throw new NotImplementedException();
        }

        public int ReadInt32()
        {
            throw new NotImplementedException();
        }

        public float ReadFloat32()
        {
            throw new NotImplementedException();
        }

        public double ReadFloat64()
        {
            throw new NotImplementedException();
        }

        public Uint8Array ReadBytes(int size)
        {
            throw new NotImplementedException();
        }

        public ArrayBuffer Buffer;
    }
}