﻿using AutoMapper;
using Library.BLL.Infrastructure;
using Library.DAL;
using Library.DAL.Interfaces;
using Library.DAL.Repositories;
using Library.Entities.Enteties;
using Library.ViewModels.Author;
using System.Collections.Generic;

namespace Library.BLL.Services
{
    public class AuthorService
    {
        private IRepository<Author> _authorRepository;

        public AuthorService(LibraryContext context)
        {
            _authorRepository = new EFGenericRepository<Author>(context);
        }

        public void Create(AuthorCreateView authorViewModel)
        {
            _authorRepository.Create(Mapper.Map<AuthorCreateView, Author>(authorViewModel));
        }

        public AuthorGetView Get(int id)
        {
            var author = _authorRepository.Get(id);
            if (author == null)
            {
                throw new BLLException("Author not found");
            }
            return Mapper.Map<Author, AuthorGetView>(author);
        }

        public AuthorGetAllView GetAll()
        {
            AuthorGetAllView result = new AuthorGetAllView();
            result.Authors = Mapper.Map<IEnumerable<Author>, List<AuthorGetView>>(_authorRepository.GetAll());
            return result;
        }

        public void Delete(int id)
        {
            if (_authorRepository.Get(id) == null)
            {
                throw new BLLException("Author not found");
            }
            _authorRepository.Delete(id);
        }

        public void Update(AuthorUpdateView authorViewModel)
        {
            if (_authorRepository.Get(authorViewModel.Id) == null)
            {
                throw new BLLException("Author not found");
            }
            _authorRepository.Update(Mapper.Map<AuthorUpdateView, Author>(authorViewModel));
        }
    }
}
