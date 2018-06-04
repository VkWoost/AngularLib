import { Inject, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { PublicationHouse } from '../models/publicationHouse/publicationHouse';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class DataService {

    private url = "";

    constructor(private http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.url = baseUrl;
    }

    getProducts() {
        return this.http.get(this.url + 'api/PublicationHouse/GetAll')
            .map((response: Response) => response.json());
    }

    getProduct(id: number) {
        return this.http.get(this.url + 'api/PublicationHouse/Get/' + id)
            .map((response: Response) => response.json());
    }

    createProduct(product: PublicationHouse) {
        return this.http.post(this.url + 'api/PublicationHouse/Create', product)
            .map((response: Response) => response.json());
    }
    updateProduct(product: PublicationHouse) {
        return this.http.put(this.url + 'api/PublicationHouse/Update', product)
            .map((response: Response) => response.json());
    }
    deleteProduct(id: number) {
        return this.http.delete(this.url + 'api/PublicationHouse/Delete/' + id)
            .map((response: Response) => response.json());
    }
}