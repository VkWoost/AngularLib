import { Inject, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Author } from '../models/author/author';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

    private url = "";

    constructor(private http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.url = baseUrl;
    }

    getProducts() {
        return this.http.get(this.url + 'api/Author/GetAll')
            .map((response: Response) => response.json());
    }

    getProduct(id: number) {
        return this.http.get(this.url + 'api/Author/Get/' + id)
            .map((response: Response) => response.json());
    }

    createProduct(product: Author) {
        return this.http.post(this.url + 'api/Author/Create', product)
            .map((response: Response) => response.json());
    }
    updateProduct(product: Author) {
        return this.http.put(this.url + 'api/Author/Update', product)
            .map((response: Response) => response.json());
    }
    deleteProduct(id: number) {
        return this.http.delete(this.url + 'api/Author/Delete/' + id)
            .map((response: Response) => response.json());
    }
}