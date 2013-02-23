using System;

/// <summary>
/// Just a placeholder
/// </summary>
[AttributeUsage(AttributeTargets.All)]
//[NonScriptable]
public sealed class ReflectableAttribute : Attribute
{
    public bool Reflectable { get; private set; }

    public ReflectableAttribute()
    {
        Reflectable = true;
    }
    public ReflectableAttribute(bool reflectable)
    {
        Reflectable = reflectable;
    }
}

