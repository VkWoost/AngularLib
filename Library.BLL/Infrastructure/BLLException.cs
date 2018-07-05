using System;
using System.Globalization;

namespace Library.BLL.Infrastructure
{
    public class BLLException : Exception
    {
		public BLLException() : base() { }

        public BLLException(string message) : base(message){}

		public BLLException(string message, params object[] args)
			: base(String.Format(CultureInfo.CurrentCulture, message, args))
		{
		}
	}
}
