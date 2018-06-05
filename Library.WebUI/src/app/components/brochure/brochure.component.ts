import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/brochure.service';
import { Brochure } from '../../models/brochure/brochure';
import { AllBrochures } from '../../models/brochure/allBrochures';

@Component({
    selector: 'brochure',
    templateUrl: './brochure.component.html',
    providers: [DataService]
})
export class BrochureComponent implements OnInit {

    product: Brochure;
    products: AllBrochures;                
    tableMode: boolean = true;         

    constructor(private dataService: DataService) {
        this.product = new Brochure();
        this.products = new AllBrochures();
    }

    ngOnInit() {
        this.loadProducts();     
    }
    
    loadProducts() {
        this.dataService.getProducts()
            .subscribe((data: AllBrochures) => this.products = data);
    }
    
    save() {
        if ((this.product as any).id == null) {
            this.dataService.createProduct(this.product)
                .subscribe((data: Brochure) => this.products.brochures.push(data));
        } else {
            this.dataService.updateProduct(this.product)
                .subscribe(data => this.loadProducts());
        }
        this.cancel();
    }
    editProduct(p: Brochure) {
        this.product = p;
    }
    cancel() {
        this.product = new Brochure();
        this.tableMode = true;
    }
    delete(p: Brochure) {
        this.dataService.deleteProduct((p as any).id)
            .subscribe(data => this.loadProducts());
    }
    add() {
        this.cancel();
        this.tableMode = false;
    }
}