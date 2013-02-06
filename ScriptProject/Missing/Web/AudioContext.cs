namespace Missing
{
    using System;
    using System.Runtime.CompilerServices;

    using ScriptProject.Missing.Web;

    [Imported]
    [ModuleName(null)]
    [IgnoreNamespace]
    public class AudioContext
    {
        public AudioBufferSourceNode CreateBufferSource()
        {
            throw new ImplementedInJavaScript();
        }

        public GainNode CreateGainNode()
        {
            throw new ImplementedInJavaScript();
        }

        // AudioDestinationNode
        public object Destination;

        public AudioBuffer CreateBuffer(ArrayBuffer buffer, bool b)
        {
            throw new ImplementedInJavaScript();
        }
    }

    [Imported]
    [ModuleName(null)]
    [IgnoreNamespace]
    public class webkitAudioContext : AudioContext
    {
    }
}