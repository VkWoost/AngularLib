import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { GetAllAuthorsViewModel } from '../models/author/get.all-authors.view.model'
import { CreateAuthorViewModel } from '../models/author/сreate.author.view.model';
import { UpdateAuthorViewModel } from '../models/author/update.author.view.model';

@Injectable()
export class AuthorService {

    private url: string = "/api/Author";

    constructor(private http: HttpClient) { }

    public get() {
        return this.http.get<GetAllAuthorsViewModel>(this.url);
    }

    public create(item: CreateAuthorViewModel) {
        return this.http.post(this.url, item)
    }

    public update(item: UpdateAuthorViewModel) {
        return this.http.put(this.url, item)
    }

    public delete(id?: number) {
        return this.http.delete(`${this.url}/${id}`);
    }
}
