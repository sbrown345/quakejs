using System;
using System.Collections.Generic;
using System.Text;

public class Uint8Array
{
    private byte[] bytes;

    public Uint8Array(int length)
    {
        this.bytes = new byte[length];
    }

    public Uint8Array(byte[] bytes)
    {
        this.bytes = bytes;
    }

    public byte this[int index]
    {
        get
        {
            return bytes[index];
        }
        set
        {
            bytes[index] = value;
        }
    }

    public static implicit operator Uint8Array(byte[] bytes)
    {
        return new Uint8Array(bytes);
    }

    public static implicit operator byte[](Uint8Array array)
    {
        return array.bytes;
    }

    public static implicit operator Array(Uint8Array array)
    {
        return array.bytes;
    }

    public int Length
    {
        get
        {
            return this.bytes.Length;
        }
    }
}