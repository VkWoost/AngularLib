import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { GetAllMagazinesViewModel } from '../models/magazine/GetAllMagazinesViewModel';
import { CreateMagazineViewModel } from '../models/magazine/CreateMagazineViewModel';
import { UpdateMagazineViewModel } from '../models/magazine/UpdateMagazineViewModel';

@Injectable()
export class DataService {

    private url: string = "/api/Magazine";

    constructor(private http: HttpClient) { }

    public get() {
        return this.http.get<GetAllMagazinesViewModel>(this.url);
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
