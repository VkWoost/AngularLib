using System;

namespace Library.BLL.Infrastructure
{
    public class BLLException : Exception
    {
        public BLLException(string message) : base(message)
        {
        }
    }
}
