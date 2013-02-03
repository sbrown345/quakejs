namespace System
{
    public static class Buffer
    {
        public static void BlockCopy(Array src, int srcOffset, Array dst, int dstOffset, int count)
        {
            for (var i = 0; i < count; i++)
            {
                dst[i + dstOffset] = src[i + srcOffset];
            }
        }

        public static void BlockCopy(Uint8Array src, int srcOffset, Uint8Array dst, int dstOffset, int count)
        {
            for (var i = 0; i < count; i++)
            {
                dst[i + dstOffset] = src[i + srcOffset];
            }
        }
    }
}