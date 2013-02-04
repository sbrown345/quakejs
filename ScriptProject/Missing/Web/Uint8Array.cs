using System;
using System.Collections.Generic;
using System.Text;

using System.Runtime.CompilerServices;

using Missing;

[Imported]
[ModuleName(null)]
[IgnoreNamespace]
public class Uint8Array
{
    private byte[] bytes;

    public Uint8Array(int length)
    {
        throw new ImplementedInJavaScript();
    }

    //public static implicit operator Uint8Array(byte[] bytes)
    //{
    //    throw new NotImplementedException();
        
    //}

    //public static implicit operator byte[](Uint8Array array)
    //{
    //    throw new NotImplementedException();
    //}

    //public static implicit operator Array(Uint8Array array)
    //{
    //    throw new NotImplementedException();
    //}

    [IntrinsicPropertyAttribute]
    public byte this[int index]
    {
        get
        {
            throw new ImplementedInJavaScript();
        }
        set
        {
            throw new ImplementedInJavaScript();
        }
    }

    [IntrinsicPropertyAttribute]
    public int Length
    {
        get
        {
            throw new ImplementedInJavaScript();
        }
    }

    [IntrinsicPropertyAttribute]
    public ArrayBuffer Buffer
    {
        get
        {
            throw new ImplementedInJavaScript();
        }
    }
}