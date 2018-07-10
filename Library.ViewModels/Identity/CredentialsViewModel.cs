using FluentValidation.Attributes;
using Library.ViewModels.Identity.Validators;

namespace Library.ViewModels.Identity
{
	[Validator(typeof(CredentialsViewModelValidator))]
	public class CredentialsViewModel
	{
		public string UserName { get; set; }
		public string Password { get; set; }
	}
}
