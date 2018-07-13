import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CreateBrochureViewModel } from '../models/brochure/CreateBrochureViewModel';
import { UpdateBrochureViewModel } from '../models/brochure/UpdateBrochureViewModel';
import { GetAllBrochuresViewModel } from '../models/brochure/GetAllBrochuresViewModel';

@Injectable()
export class DataService {

    private url: string = "/api/Brochure";

    constructor(private http: HttpClient) { }

    public get() {
        return this.http.get<GetAllBrochuresViewModel>(this.url);
    }

    public create(item: CreateBrochureViewModel) {
        return this.http.post(this.url, item)
    }

    public update(item: UpdateBrochureViewModel) {
        return this.http.put(this.url, item)
    }

    public delete(id?: number) {
        return this.http.delete(`${this.url}/${id}`);
    }
}
