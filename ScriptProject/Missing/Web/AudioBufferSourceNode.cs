using System;
using System.Runtime.CompilerServices;

namespace ScriptProject.Missing.Web
{
    [Imported]
    [ModuleName(null)]
    [IgnoreNamespace]
    public class AudioBufferSourceNode
    {
        public long CurrentTime;

        public AudioBuffer Buffer;

        public void Connect(GainNode gainNode)
        {
            throw new ImplementedInJavaScript();
        }

        public void NoteOn(int i)
        {
            throw new ImplementedInJavaScript();
        }

        public void NoteOff(int i)
        {
            throw new ImplementedInJavaScript();
        }

        public AudioBufferSourceNodePlayBackState PlayBackState;

    }

    public enum AudioBufferSourceNodePlayBackState
    {
        UNSCHEDULED_STATE = 0,

        SCHEDULED_STATE = 1,

        PLAYING_STATE = 2,

        FINISHED_STATE = 3,
    }
}