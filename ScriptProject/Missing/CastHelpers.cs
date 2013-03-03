namespace Missing
{
    using System.Runtime.CompilerServices;

    [Imported]
    [ModuleName(null)]
    [IgnoreNamespace]
    public static class CastHelpers
    {
        public static uint ToUint32(int num)
        {
            return (uint)num;
        }
    }
}