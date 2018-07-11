import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AllBrochures } from '../models/brochure/allBrochures';
import { BrochureCreateView } from '../models/brochure/brochureCreateView';
import { BrochureUpdateView } from '../models/brochure/brochureUpdateView';

@Injectable()
export class DataService {

    private url: string = "/api/Brochure";

    constructor(private http: HttpClient) { }

    public get() {
        return this.http.get<AllBrochures>(this.url);
    }
    public create(item: BrochureCreateView) {
        return this.http.post(this.url, item)
    }
    public update(item: BrochureUpdateView) {
        return this.http.put(this.url, item)
    }
    public delete(id?: number) {
        return this.http.delete(`${this.url}/${id}`);
    }
}
