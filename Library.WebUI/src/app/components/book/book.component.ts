import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/book.service';
import { Book } from '../../models/book/book';
import { AllBooks } from '../../models/book/allBooks';

@Component({
    selector: 'book',
    templateUrl: './book.component.html',
    providers: [DataService]
})
export class BookComponent implements OnInit {

    product: Book;   
    products: AllBooks;               
    tableMode: boolean = true;          

    constructor(private dataService: DataService) {
        this.product = new Book();
        this.products = new AllBooks();
    }

    ngOnInit() {
        this.loadProducts();    
    }
    loadProducts() {
        this.dataService.getProducts()
            .subscribe((data: AllBooks) => this.products = data);
    }
    save() {
        if (this.product.id == null) {
            this.dataService.createProduct(this.product)
                .subscribe((data: Book) => this.products.books.push(data));
        } else {
            this.dataService.updateProduct(this.product)
                .subscribe(data => this.loadProducts());
        }
        this.cancel();
    }
    editProduct(p: Book) {
        this.product = p;
    }
    cancel() {
        this.product = new Book();
        this.tableMode = true;
    }
    delete(p: Book) {
        this.dataService.deleteProduct(p.id)
            .subscribe(data => this.loadProducts());
    }
    add() {
        this.cancel();
        this.tableMode = false;
    }
}
