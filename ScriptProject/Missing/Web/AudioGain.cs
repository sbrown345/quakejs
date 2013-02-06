using System;
using System.Runtime.CompilerServices;

namespace ScriptProject.Missing.Web
{
    using global::Missing;

    [Imported]
    [ModuleName(null)]
    [IgnoreNamespace]
    public class AudioGain
    {
        public double Value;

        public void Connect(object destination)
        {
            throw new ImplementedInJavaScript();
        }
    }


    [Imported]
    [ModuleName(null)]
    [IgnoreNamespace]
    public class GainNode
    {
        public AudioGain Gain;

        public AudioContext Context;

        public void Connect(object destination)
        {
            throw new ImplementedInJavaScript();
        }
    }
}