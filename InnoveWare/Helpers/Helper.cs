using System;
using System.IO;

namespace Helper
{
    using System.Windows;
    using System.Windows.Resources;

    public sealed class helper
    {
        public const int SEEK_SET = 0;
        static readonly Random r = new Random();

        #region Memory Buffers
        #region ObjectBuffer
        public class ObjectBuffer
        {
            public object[] buffer;
            public int ofs;

            public ObjectBuffer(object[] buffer, int ofs)
            {
                this.buffer = buffer;
                this.ofs = ofs;
            }

            public object this[int index]
            {
                get { return buffer[ofs + index]; }
                set { buffer[ofs + index] = value; }
            }

            public static ObjectBuffer operator +(ObjectBuffer obj, int ofs)
            {
                obj.ofs += ofs;
                return obj;
            }

            public static ObjectBuffer operator -(ObjectBuffer obj, int ofs)
            {
                obj.ofs -= ofs;
                return obj;
            }

            public static bool operator >=(ObjectBuffer obj1, ObjectBuffer obj2)
            {
                return obj1.ofs >= obj2.ofs;
            }

            public static bool operator <=(ObjectBuffer obj1, ObjectBuffer obj2)
            {
                return obj1.ofs <= obj2.ofs;
            }
        }
        #endregion

        #region ByteBuffer
        public class ByteBuffer
        {
            public Uint8Array buffer;
            public int ofs;

            public ByteBuffer(Uint8Array buffer)
                : this(buffer, 0)
            { }
            public ByteBuffer(ByteBuffer buf)
                : this(buf.buffer, buf.ofs)
            { }
            public ByteBuffer(ByteBuffer buf, int ofs)
                : this(buf.buffer, buf.ofs + ofs)
            { }
            public ByteBuffer(Uint8Array buffer, int ofs)
            {
                this.buffer = buffer;
                this.ofs = ofs;
            }

            public byte this[int index]
            {
                get { return buffer[ofs + index]; }
                set { buffer[ofs + index] = value; }
            }

            public static ByteBuffer operator +(ByteBuffer obj, int ofs)
            {
                return new ByteBuffer(obj.buffer, obj.ofs + ofs);
            }

            public void Add(int ofs)
            {
                this.ofs += ofs;
            }
            public void Sub(int ofs)
            {
                this.ofs -= ofs;
            }

            public static bool operator >=(ByteBuffer obj1, ByteBuffer obj2)
            {
                return obj1.ofs >= obj2.ofs;
            }

            public static bool operator <=(ByteBuffer obj1, ByteBuffer obj2)
            {
                return obj1.ofs <= obj2.ofs;
            }
        }
        #endregion

        #region UIntBuffer
        public class UIntBuffer
        {
            public uint[] buffer;
            public int ofs;

            public UIntBuffer(uint[] buffer, int ofs)
            {
                this.buffer = buffer;
                this.ofs = ofs;
            }

            public uint this[int index]
            {
                get { return buffer[ofs + index]; }
                set { buffer[ofs + index] = value; }
            }

            public static UIntBuffer operator +(UIntBuffer obj, int ofs)
            {
                obj.ofs += ofs;
                return obj;
            }

            public static UIntBuffer operator -(UIntBuffer obj, int ofs)
            {
                obj.ofs -= ofs;
                return obj;
            }

            public static bool operator >=(UIntBuffer obj1, UIntBuffer obj2)
            {
                return obj1.ofs >= obj2.ofs;
            }

            public static bool operator <=(UIntBuffer obj1, UIntBuffer obj2)
            {
                return obj1.ofs <= obj2.ofs;
            }
        }
        #endregion
        #endregion

        public class FILE
        {
            public Stream stream;
            public string name;

            public FILE(Stream stream, string name)
            {
                this.stream = stream;
                this.name = name;
            }
        }
        
        public static char getc(FILE file)
        {
            return (char)file.stream.ReadByte();
        }

        public static int fread(out double data, int size, int count, FILE file)
        {
            var reader = new BinaryReader(file.stream);
            data = (size == 4) ? reader.ReadSingle() : reader.ReadDouble();
            return count;
        }

        public static int fread(out int data, int size, int count, FILE file)
        {
            var reader = new BinaryReader(file.stream);
            data = reader.ReadInt32();
            return count;
        }

        public static int fread(Uint8Array data, int size, int count, FILE file)
        {
            var reader = new BinaryReader(file.stream);
            Uint8Array buf = reader.ReadBytes(size);
            Buffer.BlockCopy(buf, 0, data, 0, size);
            return count;
        }

        public static void fseek(FILE file, int position, int seek)
        {
            file.stream.Seek(position, SeekOrigin.Begin);
        }

        public static void fclose(FILE file)
        {
            file.stream.Close();
            file.stream = null;
            file = null;
        }

        public static FILE fopen(string name, string mode)
        {
            var stream = new MemoryStream(new Uint8Array(5 * 1024 * 1024)); // todo: not great
            FILE file = new FILE(stream, name);
            return file;
        }

        public static void fwrite(int value, int size, int count, FILE file)
        {
            if (size != 4) 
                throw new NotImplementedException("writing int with size other than 4");
            var writer = new BinaryWriter(file.stream);
            writer.Write(value);
        }

        public static void fwrite(float value, int size, int count, FILE file)
        {
            if (size != 4) 
                throw new NotImplementedException("writing float with size other than 4");
            var writer = new BinaryWriter(file.stream);
            writer.Write(value);
        }

        public static void fwrite(Uint8Array array, int size, int count, FILE file)
        {
            var writer = new BinaryWriter(file.stream);
            writer.Write(array);
        }

        public static void fflush(FILE file)
        {
            // ??
        }

        public static void fprintf(helper.FILE file, string str)
        {
        }

        public static int rand()
        {
#if DEBUG
            return 1000000000; 
#else
            return r.Next();
#endif       
        }

    }
}
