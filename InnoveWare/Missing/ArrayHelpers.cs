public static class ArrayHelpers
{
    public static double[] ExplcitDoubleArray(int length)
    {
        var arr = new double[length];
        for (int i = 0; i < arr.Length; i++)
        {
            arr[i] = 0;
        }

        return arr;
    }

    /// <summary>
    /// Ensures all elements in the array not null - useful for what were structs
    /// </summary>
    public static T[] InitArray<T>(int length) where T : new()
    {
        var array = new T[length];
        for (int i = 0; i < length; i++)
        {
            array[i] = new T();
        }

        return array;
    }
}