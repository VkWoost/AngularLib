using AutoMapper;
using Library.Entities.Identity;
using Library.ViewModels.Identity;

namespace Library.BLL.Profiles
{
	public class UserProfile : Profile
	{
		public UserProfile()
		{
			CreateMap<AppUser, RegistrationViewModel>();
			CreateMap<RegistrationViewModel, AppUser>();
		}
	}
}
