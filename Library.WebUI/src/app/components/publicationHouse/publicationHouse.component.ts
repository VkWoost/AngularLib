import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/publicationHouse.service';
import { PublicationHouse } from '../../models/publicationHouse/publicationHouse';
import { AllPublicationHouses } from '../../models/publicationHouse/allPublicationHouses';

@Component({
    selector: 'publicationHouse',
    templateUrl: './publicationHouse.component.html',
    providers: [DataService]
})
export class PublicationHouseComponent implements OnInit {
    
    product: PublicationHouse;   
    products: AllPublicationHouses;                
    tableMode: boolean = true;          

    constructor(private dataService: DataService) {
        this.product = new PublicationHouse();
        this.products = new AllPublicationHouses();
    }

    ngOnInit() {
        this.loadProducts();     
    }
    loadProducts() {
        this.dataService.getProducts()
            .subscribe((data: AllPublicationHouses) => this.products = data);
    }
    save() {
        if (this.product.id == null) {
            this.dataService.createProduct(this.product)
                .subscribe((data: PublicationHouse) => this.products.publicationHouses.push(data));
        } else {
            this.dataService.updateProduct(this.product)
                .subscribe(data => this.loadProducts());
        }
        this.cancel();
    }
    editProduct(p: PublicationHouse) {
        this.product = p;
    }
    cancel() {
        this.product = new PublicationHouse();
        this.tableMode = true;
    }
    delete(p: PublicationHouse) {
        this.dataService.deleteProduct(p.id)
            .subscribe(data => this.loadProducts());
    }
    add() {
        this.cancel();
        this.tableMode = false;
    }
}
