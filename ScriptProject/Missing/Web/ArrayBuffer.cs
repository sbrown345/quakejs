namespace Missing
{
    using System;
    using System.Runtime.CompilerServices;

    [Imported]
    [ModuleName(null)]
    [IgnoreNamespace]
    public class ArrayBuffer
    {
        public ArrayBuffer Slice(int start, int end)
        {
            throw new ImplementedInJavaScript();
        }
    }
}