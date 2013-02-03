namespace System
{
    public class Uri
    {
        private readonly string uriString;

        public Uri(string uriString, UriKind uriKind)
        {
            this.uriString = uriString;
        }

        public override string ToString()
        {
            return uriString;
        }
    }
}