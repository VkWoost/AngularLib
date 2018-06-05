import { Inject, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Book } from '../models/book/book';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class DataService {

    private url = "";

    constructor(private http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.url = baseUrl;
    }

    getProducts() {
        return this.http.get(this.url + 'api/Book/GetAll')
            .map((response: Response) => response.json());
    }

    getProduct(id: number) {
        return this.http.get(this.url + 'api/Book/Get/' + id)
            .map((response: Response) => response.json());
    }

    createProduct(product: Book) {
        return this.http.post(this.url + 'api/Book/Create', product)
            .map((response: Response) => response.json());
    }
    updateProduct(product: Book) {
        return this.http.put(this.url + 'api/Book/Update', product)
            .map((response: Response) => response.json());
    }
    deleteProduct(id: number) {
        return this.http.delete(this.url + 'api/Book/Delete/' + id)
            .map((response: Response) => response.json());
    }
}