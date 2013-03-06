namespace System.IO
{
    public class BinaryReader
    {
        public BinaryReader(Stream stream)
        {
            this.stream = stream;
        }

        private Stream stream;

        public Single ReadSingle()
        {
            return this.stream.ReadFloat32();
        }

        public Double ReadDouble()
        {
            return this.stream.ReadFloat64();
        }

        public int ReadInt32()
        {
            return this.stream.ReadInt32();
        }

        internal Uint8Array ReadBytes(int size)
        {
            return this.stream.ReadBytes(size);
        }
    }
}
