import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AllAuthors } from '../models/author/allAuthors';
import { AuthorCreateView } from '../models/author/authorCreateView';
import { AuthorUpdateView } from '../models/author/authorUpdateView';

@Injectable()
export class AuthorService {

  private url: string = "/api/Author";

  constructor(private http: HttpClient) { }

  public get() {
    return this.http.get<AllAuthors>(this.url);
  }
  public create(item: AuthorCreateView) {
    return this.http.post(this.url, item)
  }
  public update(item: AuthorUpdateView) {
    return this.http.put(this.url, item)
  }
  public delete(id?: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
