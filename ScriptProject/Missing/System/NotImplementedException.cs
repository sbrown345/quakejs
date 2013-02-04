namespace System
{
    public class NotImplementedException : /*SystemException*/ Exception
    {
        public NotImplementedException()
        {
        }

        public NotImplementedException(string message)
            : base(message)
        {
        }
    }
}