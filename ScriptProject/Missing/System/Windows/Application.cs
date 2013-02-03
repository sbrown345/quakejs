namespace System.Windows
{
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;
    using System.Windows.Resources;
    
    using Missing;

    [GlobalMethods]
    public static class Application
    {
        static Application()
        {
            Resources = new Dictionary<string, ArrayBuffer>();
        }

        public static Dictionary<string, ArrayBuffer> Resources { get; set; }

        public static StreamResourceInfo GetResourceStream(Uri uriResource)
        {
            if (!Resources.ContainsKey(uriResource.ToString()))
            {
                return null;
            }
            var arrayBuffer = Resources[uriResource.ToString()];
            var stream = new Stream(arrayBuffer);
            return new StreamResourceInfo(stream, null);
        }

        // JS interaction
        public static void SetResourceStream(string key, ArrayBuffer arrayBuffer)
        {
            Resources["InnoveWare;component/" + key] = arrayBuffer;
        }
    }
}