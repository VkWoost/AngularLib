using System;
using System.Globalization;

namespace Library.BusinessLogic.Infrastructure
{
    public class BusinessLogicException : Exception
    {
		public BusinessLogicException() : base() { }

        public BusinessLogicException(string message) : base(message){ }

		public BusinessLogicException(string message, params object[] args)
			: base(String.Format(CultureInfo.CurrentCulture, message, args))
		{
		}
	}
}
