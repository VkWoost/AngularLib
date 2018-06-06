import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PublicationHouse } from '../models/publicationHouse/publicationHouse';


@Injectable()
export class DataService {

    private url = "/api/publicationHouse";

    constructor(private http: HttpClient) { }

    getProducts() {
        return this.http.get(this.url + 'api/PublicationHouse/GetAll');
    }
    getProduct(id: number) {
        return this.http.get(this.url + 'api/PublicationHouse/Get/' + id);
    }
    createProduct(product: PublicationHouse) {
        return this.http.post(this.url + 'api/PublicationHouse/Create', product);
    }
    updateProduct(product: PublicationHouse) {
        return this.http.put(this.url + 'api/PublicationHouse/Update', product);
    }
    deleteProduct(id: number) {
        return this.http.delete(this.url + 'api/PublicationHouse/Delete/' + id);
    }
}
