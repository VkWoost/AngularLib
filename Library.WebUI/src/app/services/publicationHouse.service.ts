import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PublicationHouse } from '../models/publicationHouse/publicationHouse';
import { AllPublicationHouses } from '../models/publicationHouse/allPublicationHouses';

@Injectable()
export class DataService {

    private url = "/api/PublicationHouse";

    constructor(private http: HttpClient) { }

    getProducts() {
        return this.http.get<AllPublicationHouses>(this.url);
    }
    getProduct(id: number) {
        return this.http.get(this.url + '/Get/' + id);
    }
    createProduct(product: PublicationHouse) {
        return this.http.post(this.url, product);
    }
    updateProduct(product: PublicationHouse) {
        return this.http.put(this.url, product);
    }
    deleteProduct(id: number) {
        return this.http.delete(this.url + '/' + id);
    }
}
