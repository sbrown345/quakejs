﻿namespace System
{
    using System.Runtime.CompilerServices;

    [Imported]
    [ModuleName(null)]
    [IgnoreNamespace]
    public static class BitConverter
    {
        public static float ToSingle(Uint8Array value, int startIndex)
        {
            throw new ImplementedInJavaScript();
        }

        public static int ToInt32(Uint8Array value, int startIndex)
        {
            throw new ImplementedInJavaScript();
        }

        public static uint ToUInt32(Uint8Array value, int startIndex)
        {
            throw new ImplementedInJavaScript();
        }

        public static ushort ToUInt16(Uint8Array value, int startIndex)
        {
            throw new ImplementedInJavaScript();
        }

        public static short ToInt16(Uint8Array value, int startIndex)
        {
            throw new ImplementedInJavaScript();
        }

        [ScriptName("getBytesFromFloat")]
        public static Uint8Array GetBytes(float value)
        {
            throw new ImplementedInJavaScript();
        }

        [ScriptName("getBytesFromInt")]
        public static Uint8Array GetBytes(int value)
        {
            throw new ImplementedInJavaScript();
        }

        [ScriptName("getBytesFromInt")]
        public static Uint8Array GetBytes(uint value)
        {
            throw new ImplementedInJavaScript();
        }
    }
}