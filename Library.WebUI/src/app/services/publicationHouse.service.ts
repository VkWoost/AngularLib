import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AllPublicationHouses } from '../models/publicationHouse/allPublicationHouses';
import { PublicationHouseCreateView } from '../models/publicationHouse/publicationHouseCreateView';
import { PublicationHouseUpdateView } from '../models/publicationHouse/publicationHouseUpdateView';

@Injectable()
export class PublicationHouseService {

    private url = "/api/PublicationHouse";

    constructor(private http: HttpClient) { }

    public get() {
        return this.http.get<AllPublicationHouses>(this.url);
    }
    public create(item: PublicationHouseCreateView) {
        return this.http.post(this.url, item)
    }
    public update(item: PublicationHouseUpdateView) {
        return this.http.put(this.url, item)
    }
    public delete(id?: number) {
        return this.http.delete(`${this.url}/${id}`);
    }
}
