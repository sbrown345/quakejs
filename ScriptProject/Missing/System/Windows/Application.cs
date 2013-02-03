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
            Resources = new Dictionary<string, StreamResourceInfo>();
        }

        public static Dictionary<string, StreamResourceInfo> Resources { get; set; }

        public static StreamResourceInfo GetResourceStream(Uri uriResource)
        {
            if (Resources.ContainsKey(uriResource.ToString()))
            {
                return Resources[uriResource.ToString()];
            }

            return null;
        }

        // JS interaction
        public static void SetResourceStream(string key, ArrayBuffer arrayBuffer)
        {
            var stream = new Stream(arrayBuffer);
            var streamResourceInfo = new StreamResourceInfo(stream, null);
            Resources["InnoveWare;component/" + key] = streamResourceInfo;
        }
    }
}