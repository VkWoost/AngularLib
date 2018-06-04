import { Inject, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Magazine } from '../models/magazine/magazine';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class DataService {

    private url = "";

    constructor(private http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.url = baseUrl;
    }

    getProducts() {
        return this.http.get(this.url + 'api/Magazine/GetAll')
            .map((response: Response) => response.json());
    }

    getProduct(id: number) {
        return this.http.get(this.url + 'api/Magazine/Get/' + id)
            .map((response: Response) => response.json());
    }

    createProduct(product: Magazine) {
        return this.http.post(this.url + 'api/Magazine/Create', product)
            .map((response: Response) => response.json());
    }
    updateProduct(product: Magazine) {
        return this.http.put(this.url + 'api/Magazine/Update', product)
            .map((response: Response) => response.json());
    }
    deleteProduct(id: number) {
        return this.http.delete(this.url + 'api/Magazine/Delete/' + id)
            .map((response: Response) => response.json());
    }
}