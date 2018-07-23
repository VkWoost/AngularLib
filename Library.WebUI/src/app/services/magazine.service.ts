import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { GetMagazineListViewModel } from '../models/magazine/get.magazine-list.view.model';
import { CreateMagazineViewModel } from '../models/magazine/create.magazine.view.model';
import { UpdateMagazineViewModel } from '../models/magazine/update.magazine.view.model';

@Injectable()
export class DataService {

    private url: string = "/api/Magazine";

    constructor(private http: HttpClient) { }

    public get() {
        return this.http.get<GetMagazineListViewModel>(this.url);
    }

    public create(item: CreateMagazineViewModel) {
        return this.http.post(this.url, item)
    }

    public update(item: UpdateMagazineViewModel) {
        return this.http.put(this.url, item)
    }

    public delete(id?: number) {
        return this.http.delete(`${this.url}/${id}`);
    }
}
