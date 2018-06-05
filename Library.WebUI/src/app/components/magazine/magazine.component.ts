import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/magazine.service';
import { Magazine } from '../../models/magazine/magazine';
import { AllMagazines } from '../../models/magazine/allMagazines'

@Component({
    selector: 'magazine',
    templateUrl: './magazine.component.html',
    providers: [DataService]
})
export class MagazineComponent implements OnInit {

    product: Magazine;   // изменяемый товар
    products: AllMagazines;                // массив товаров
    tableMode: boolean = true;          // табличный режим

    constructor(private dataService: DataService) {
        this.product = new Magazine();
        this.products = new AllMagazines();
    }

    ngOnInit() {
        this.loadProducts();    // загрузка данных при старте компонента  
    }
    // получаем данные через сервис
    loadProducts() {
        this.dataService.getProducts()
            .subscribe((data: AllMagazines) => this.products = data);
    }
    // сохранение данных
    save() {
        if ((this.product as any).id == null) {
            this.dataService.createProduct(this.product)
                .subscribe((data: Magazine) => this.products.magazines.push(data));
        } else {
            this.dataService.updateProduct(this.product)
                .subscribe(data => this.loadProducts());
        }
        this.cancel();
    }
    editProduct(p: Magazine) {
        this.product = p;
    }
    cancel() {
        this.product = new Magazine();
        this.tableMode = true;
    }
    delete(p: Magazine) {
        this.dataService.deleteProduct((p as any).id)
            .subscribe(data => this.loadProducts());
    }
    add() {
        this.cancel();
        this.tableMode = false;
    }
}