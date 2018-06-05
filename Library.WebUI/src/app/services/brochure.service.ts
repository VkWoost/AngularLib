import { Inject, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Brochure } from '../models/brochure/brochure';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class DataService {

    private url = "";

    constructor(private http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.url = baseUrl;
    }

    getProducts() {
        return this.http.get(this.url + 'api/Brochure/GetAll')
            .map((response: Response) => response.json());
    }

    getProduct(id: number) {
        return this.http.get(this.url + 'api/Brochure/Get/' + id)
            .map((response: Response) => response.json());
    }

    createProduct(product: Brochure) {
        return this.http.post(this.url + 'api/Brochure/Create', product)
            .map((response: Response) => response.json());
    }
    updateProduct(product: Brochure) {
        return this.http.put(this.url + 'api/Brochure/Update', product)
            .map((response: Response) => response.json());
    }
    deleteProduct(id: number) {
        return this.http.delete(this.url + 'api/Brochure/Delete/' + id)
            .map((response: Response) => response.json());
    }
}