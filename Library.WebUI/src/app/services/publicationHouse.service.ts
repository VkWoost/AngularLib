import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { GetAllPublicationHousesViewModel } from '../models/publicationHouse/GetAllPublicationHousesViewModel';
import { CreatePublicationHouseViewModel } from '../models/publicationHouse/CreatePublicationHouseViewModel';
import { UpdatePublicationHouseViewModel } from '../models/publicationHouse/UpdatePublicationHouseViewModel';

@Injectable()
export class PublicationHouseService {

    private url = "/api/PublicationHouse";

    constructor(private http: HttpClient) { }

    public get() {
        return this.http.get<GetAllPublicationHousesViewModel>(this.url);
    }

    public create(item: CreatePublicationHouseViewModel) {
        return this.http.post(this.url, item)
    }

    public update(item: UpdatePublicationHouseViewModel) {
        return this.http.put(this.url, item)
    }

    public delete(id?: number) {
        return this.http.delete(`${this.url}/${id}`);
    }
}
