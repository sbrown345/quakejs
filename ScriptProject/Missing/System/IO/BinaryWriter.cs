namespace System.IO
{
    public class BinaryWriter
    {
        public BinaryWriter(Stream stream)
        {
            this.stream = stream;
        }

        private Stream stream;

        public void Write(int value)
        {
            this.stream.WriteInt32(value);
        }

        public void Write(float value)
        {
            this.stream.WriteFloat32(value);
        }

        public void Write(Uint8Array array)
        {
            this.stream.WriteUint8Array(array);
        }
    }
}
