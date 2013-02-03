namespace Missing
{
    public class ArrayHelpers
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
    }
}