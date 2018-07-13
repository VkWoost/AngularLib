import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { GetAllAuthorsViewModel } from '../models/author/GetAllAuthorsViewModel';
import { CreateAuthorViewModel } from '../models/author/CreateAuthorViewModel';
import { UpdateAuthorViewModel } from '../models/author/UpdateAuthorViewModel';

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
