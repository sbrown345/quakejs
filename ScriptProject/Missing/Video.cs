using System;
using System.Html.Media.Graphics;
using System.Runtime.CompilerServices;

[Imported]
[ModuleName(null)]
[ScriptNamespace("Whammy")]
public class Video
{
    public Video(int fps)
    {
        throw new ImplementedInJavaScript();
    }

    public void Add(CanvasContext ctx)
    {
        throw new ImplementedInJavaScript();
    }

    public object[] Frames;

    public Blob Compile()
    {
        throw new ImplementedInJavaScript();
    }

    /// <summary>
    /// Bug here, do not put false!
    /// </summary>
    /// <param name="outputAsArray">Always put true!</param>
    public Uint8Array Compile(bool outputAsArray)
    {
        throw new ImplementedInJavaScript();
    }
}