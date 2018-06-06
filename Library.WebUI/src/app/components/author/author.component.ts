import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/author.service';
import { Author } from '../../models/author/author';
import { AllAuthors } from '../../models/author/allAuthors';

import { GridDataResult } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';

@Component({
    selector: 'author',
    templateUrl: './author.component.html',
    providers: [DataService]
})
export class AuthorComponent implements OnInit {
    product: Author;
    products: AllAuthors;                
    tableMode: boolean = true;          

  constructor(private dataService: DataService) {
    debugger;
        this.product = new Author();
        this.products = new AllAuthors();
    }

  ngOnInit() {
    debugger;
        this.loadProducts();      
    }
    
    loadProducts() {
        this.dataService.getProducts()
            .subscribe((data: AllAuthors) => this.products = data);
    }
    
    save() {
        if (this.product.id == null) {
            this.dataService.createProduct(this.product)
                .subscribe(data => this.products.authors.push(data));
        } else {
            this.dataService.updateProduct(this.product)
                .subscribe(data => this.loadProducts());
        }
        this.cancel();
    }
    editProduct(p: Author) {
        this.product = p;
    }
    cancel() {
        this.product = new Author();
        this.tableMode = true;
    }
    delete(p: Author) {
        this.dataService.deleteProduct((p as any).id)
            .subscribe(data => this.loadProducts());
    }
    add() {
        this.cancel();
        this.tableMode = false;
    }
}
