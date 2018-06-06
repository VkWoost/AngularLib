(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (max-width: 767px) {\r\n  /* On small screens, the nav menu spans the full width of the screen. Leave a space for it. */\r\n  .body-content {\r\n    padding-top: 50px;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='container-fluid'>\r\n\r\n  <div class='row'>\r\n    <div class='col-sm-3'>\r\n      <nav-menu></nav-menu>\r\n    </div>\r\n    <div class='col-sm-9 body-content'>\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _components_navmenu_navmenu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/navmenu/navmenu.component */ "./src/app/components/navmenu/navmenu.component.ts");
/* harmony import */ var _components_author_author_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/author/author.component */ "./src/app/components/author/author.component.ts");
/* harmony import */ var _components_magazine_magazine_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/magazine/magazine.component */ "./src/app/components/magazine/magazine.component.ts");
/* harmony import */ var _components_brochure_brochure_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/brochure/brochure.component */ "./src/app/components/brochure/brochure.component.ts");
/* harmony import */ var _components_publicationHouse_publicationHouse_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/publicationHouse/publicationHouse.component */ "./src/app/components/publicationHouse/publicationHouse.component.ts");
/* harmony import */ var _components_book_book_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/book/book.component */ "./src/app/components/book/book.component.ts");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/es/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//import { HttpModule } from '@angular/http';











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"],
                _components_navmenu_navmenu_component__WEBPACK_IMPORTED_MODULE_6__["NavMenuComponent"],
                _components_author_author_component__WEBPACK_IMPORTED_MODULE_7__["AuthorComponent"],
                _components_magazine_magazine_component__WEBPACK_IMPORTED_MODULE_8__["MagazineComponent"],
                _components_brochure_brochure_component__WEBPACK_IMPORTED_MODULE_9__["BrochureComponent"],
                _components_publicationHouse_publicationHouse_component__WEBPACK_IMPORTED_MODULE_10__["PublicationHouseComponent"],
                _components_book_book_component__WEBPACK_IMPORTED_MODULE_11__["BookComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                //HttpModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
                    .forRoot([
                    { path: '', redirectTo: 'book', pathMatch: 'full' },
                    { path: 'author', component: _components_author_author_component__WEBPACK_IMPORTED_MODULE_7__["AuthorComponent"] },
                    { path: "magazine", component: _components_magazine_magazine_component__WEBPACK_IMPORTED_MODULE_8__["MagazineComponent"] },
                    { path: 'brochure', component: _components_brochure_brochure_component__WEBPACK_IMPORTED_MODULE_9__["BrochureComponent"] },
                    { path: 'publicationHouse', component: _components_publicationHouse_publicationHouse_component__WEBPACK_IMPORTED_MODULE_10__["PublicationHouseComponent"] },
                    { path: 'book', component: _components_book_book_component__WEBPACK_IMPORTED_MODULE_11__["BookComponent"] },
                    { path: '**', redirectTo: 'book' }
                ]),
                _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_12__["GridModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/author/author.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/author/author.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kendo-grid [data]=\"view | async\"\r\n            [height]=\"533\"\r\n            [pageSize]=\"gridState.take\" [skip]=\"gridState.skip\" [sort]=\"gridState.sort\"\r\n            [pageable]=\"true\" [sortable]=\"true\"\r\n            (dataStateChange)=\"onStateChange($event)\"\r\n            (edit)=\"editHandler($event)\" (cancel)=\"cancelHandler($event)\"\r\n            (save)=\"saveHandler($event)\" (remove)=\"removeHandler($event)\"\r\n            (add)=\"addHandler($event)\"\r\n            [navigable]=\"true\">\r\n    <ng-template kendoGridToolbarTemplate>\r\n        <button kendoGridAddCommand>Add new</button>\r\n    </ng-template>\r\n    <kendo-grid-column field=\"Name\" title=\"Product Name\"></kendo-grid-column>\r\n    <kendo-grid-column field=\"UnitPrice\" editor=\"numeric\" title=\"Price\"></kendo-grid-column>\r\n    <kendo-grid-column field=\"Discontinued\" editor=\"boolean\" title=\"Discontinued\"></kendo-grid-column>\r\n    <kendo-grid-column field=\"UnitsInStock\" editor=\"numeric\" title=\"Units In Stock\"></kendo-grid-column>\r\n    <kendo-grid-command-column title=\"command\" width=\"220\">\r\n        <ng-template kendoGridCellTemplate let-isNew=\"isNew\">\r\n            <button kendoGridEditCommand [primary]=\"true\">Edit</button>\r\n            <button kendoGridRemoveCommand>Remove</button>\r\n            <button kendoGridSaveCommand [disabled]=\"formGroup?.invalid\">{{ isNew ? 'Add' : 'Update' }}</button>\r\n            <button kendoGridCancelCommand>{{ isNew ? 'Discard changes' : 'Cancel' }}</button>\r\n        </ng-template>\r\n    </kendo-grid-command-column>\r\n</kendo-grid>"

/***/ }),

/***/ "./src/app/components/author/author.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/author/author.component.ts ***!
  \*******************************************************/
/*! exports provided: AuthorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorComponent", function() { return AuthorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_author_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/author.service */ "./src/app/services/author.service.ts");
/* harmony import */ var _models_author_author__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/author/author */ "./src/app/models/author/author.ts");
/* harmony import */ var _models_author_allAuthors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/author/allAuthors */ "./src/app/models/author/allAuthors.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthorComponent = /** @class */ (function () {
    function AuthorComponent(dataService) {
        this.dataService = dataService;
        this.tableMode = true;
        debugger;
        this.product = new _models_author_author__WEBPACK_IMPORTED_MODULE_2__["Author"]();
        this.products = new _models_author_allAuthors__WEBPACK_IMPORTED_MODULE_3__["AllAuthors"]();
    }
    AuthorComponent.prototype.ngOnInit = function () {
        debugger;
        this.loadProducts();
    };
    AuthorComponent.prototype.loadProducts = function () {
        var _this = this;
        this.dataService.getProducts()
            .subscribe(function (data) { return _this.products = data; });
    };
    AuthorComponent.prototype.save = function () {
        var _this = this;
        if (this.product.id == null) {
            this.dataService.createProduct(this.product)
                .subscribe(function (data) { return _this.products.authors.push(data); });
        }
        else {
            this.dataService.updateProduct(this.product)
                .subscribe(function (data) { return _this.loadProducts(); });
        }
        this.cancel();
    };
    AuthorComponent.prototype.editProduct = function (p) {
        this.product = p;
    };
    AuthorComponent.prototype.cancel = function () {
        this.product = new _models_author_author__WEBPACK_IMPORTED_MODULE_2__["Author"]();
        this.tableMode = true;
    };
    AuthorComponent.prototype.delete = function (p) {
        var _this = this;
        this.dataService.deleteProduct(p.id)
            .subscribe(function (data) { return _this.loadProducts(); });
    };
    AuthorComponent.prototype.add = function () {
        this.cancel();
        this.tableMode = false;
    };
    AuthorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'author',
            template: __webpack_require__(/*! ./author.component.html */ "./src/app/components/author/author.component.html"),
            providers: [_services_author_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]]
        }),
        __metadata("design:paramtypes", [_services_author_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], AuthorComponent);
    return AuthorComponent;
}());



/***/ }),

/***/ "./src/app/components/book/book.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/book/book.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Books</h1>\r\n<input type=\"button\" value=\"Add\" class=\"btn btn-default\" (click)=\"add()\" />\r\n<table *ngIf=\"tableMode; else create\" class=\"table table-striped\">\r\n    <thead>\r\n        <tr>\r\n            <td>Name</td>\r\n            <td>Author</td>\r\n            <td>Year Of Publication</td>\r\n            <td></td>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let p of products.books\">\r\n            <ng-template [ngIf]=\"product?.id != p.id\" [ngIfElse]=\"edit\">\r\n                <td>{{p?.name}}</td>\r\n                <td>{{p?.author.name}}</td>\r\n                <td>{{p?.yearOfPublication}}</td>\r\n\r\n                <td>\r\n                    <button class=\"btn btn-sm btn-primary\" (click)=\"editProduct(p)\">Edit</button>\r\n                    <button class=\"btn btn-sm btn-danger\" (click)=\"delete(p)\">Delete</button>\r\n                </td>\r\n            </ng-template>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n\r\n<!--шаблон для редактирования-->\r\n<ng-template #edit>\r\n    <td>\r\n        <input type=\"text\" [(ngModel)]=\"product.name\" class=\"form-control\" />\r\n        <input type=\"number\" [(ngModel)]=\"product.authorId\" class=\"form-control\" />\r\n        <input type=\"number\" [(ngModel)]=\"product.yearOfPublication\" class=\"form-control\" />\r\n    </td>\r\n    <td>\r\n        <input type=\"button\" value=\"Save\" (click)=\"save()\" class=\"btn btn-sm btn-success\" />\r\n        <input type=\"button\" value=\"Cancel\" (click)=\"cancel()\" class=\"btn btn-sm btn-warning\" />\r\n    </td>\r\n</ng-template>\r\n\r\n<!--шаблон для добавления-->\r\n<ng-template #create>\r\n    <div class=\"form-group\">\r\n        <label>Name</label>\r\n        <input type=\"text\" [(ngModel)]=\"product.name\" class=\"form-control\" />\r\n        <label>Author</label>\r\n        <input type=\"number\" [(ngModel)]=\"product.authorId\" class=\"form-control\" />\r\n        <label>Year Of Publication</label>\r\n        <input type=\"number\" [(ngModel)]=\"product.yearOfPublication\" class=\"form-control\" />\r\n    </div>\r\n    <div>\r\n        <input type=\"button\" value=\"Save\" (click)=\"save()\" class=\"btn btn-success\" />\r\n        <input type=\"button\" value=\"Cancel\" (click)=\"cancel()\" class=\"btn btn-warning\" />\r\n    </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/components/book/book.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/book/book.component.ts ***!
  \***************************************************/
/*! exports provided: BookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookComponent", function() { return BookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/book.service */ "./src/app/services/book.service.ts");
/* harmony import */ var _models_book_book__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/book/book */ "./src/app/models/book/book.ts");
/* harmony import */ var _models_book_allBooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/book/allBooks */ "./src/app/models/book/allBooks.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BookComponent = /** @class */ (function () {
    function BookComponent(dataService) {
        this.dataService = dataService;
        this.tableMode = true;
        this.product = new _models_book_book__WEBPACK_IMPORTED_MODULE_2__["Book"]();
        this.products = new _models_book_allBooks__WEBPACK_IMPORTED_MODULE_3__["AllBooks"]();
    }
    BookComponent.prototype.ngOnInit = function () {
        this.loadProducts();
    };
    BookComponent.prototype.loadProducts = function () {
        var _this = this;
        this.dataService.getProducts()
            .subscribe(function (data) { return _this.products = data; });
    };
    BookComponent.prototype.save = function () {
        var _this = this;
        if (this.product.id == null) {
            this.dataService.createProduct(this.product)
                .subscribe(function (data) { return _this.products.books.push(data); });
        }
        else {
            this.dataService.updateProduct(this.product)
                .subscribe(function (data) { return _this.loadProducts(); });
        }
        this.cancel();
    };
    BookComponent.prototype.editProduct = function (p) {
        this.product = p;
    };
    BookComponent.prototype.cancel = function () {
        this.product = new _models_book_book__WEBPACK_IMPORTED_MODULE_2__["Book"]();
        this.tableMode = true;
    };
    BookComponent.prototype.delete = function (p) {
        var _this = this;
        this.dataService.deleteProduct(p.id)
            .subscribe(function (data) { return _this.loadProducts(); });
    };
    BookComponent.prototype.add = function () {
        this.cancel();
        this.tableMode = false;
    };
    BookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'book',
            template: __webpack_require__(/*! ./book.component.html */ "./src/app/components/book/book.component.html"),
            providers: [_services_book_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]]
        }),
        __metadata("design:paramtypes", [_services_book_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], BookComponent);
    return BookComponent;
}());



/***/ }),

/***/ "./src/app/components/brochure/brochure.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/brochure/brochure.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Brochures</h1>\r\n<input type=\"button\" value=\"Add\" class=\"btn btn-default\" (click)=\"add()\" />\r\n<table *ngIf=\"tableMode; else create\" class=\"table table-striped\">\r\n    <thead>\r\n        <tr>\r\n            <td>Name</td>\r\n            <td>Type Of Cover</td>\r\n            <td>Number Of Pages</td>\r\n            <td></td>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let p of products.brochures\">\r\n            <ng-template [ngIf]=\"product?.id != p.id\" [ngIfElse]=\"edit\">\r\n                <td>{{p?.name}}</td>\r\n                <td>{{p?.typeOfCover}}</td>\r\n                <td>{{p?.numberOfPages}}</td>\r\n                <td>\r\n                    <button class=\"btn btn-sm btn-primary\" (click)=\"editProduct(p)\">Edit</button>\r\n                    <button class=\"btn btn-sm btn-danger\" (click)=\"delete(p)\">Delete</button>\r\n                </td>\r\n            </ng-template>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n\r\n<!--шаблон для редактирования-->\r\n<ng-template #edit>\r\n    <td>\r\n        <input type=\"text\" [(ngModel)]=\"product.name\" class=\"form-control\" />\r\n        <input type=\"text\" [(ngModel)]=\"product.typeOfCover\" class=\"form-control\" />\r\n        <input type=\"number\" [(ngModel)]=\"product.numberOfPages\" class=\"form-control\" />\r\n    </td>\r\n    <td>\r\n        <input type=\"button\" value=\"Save\" (click)=\"save()\" class=\"btn btn-sm btn-success\" />\r\n        <input type=\"button\" value=\"Cancel\" (click)=\"cancel()\" class=\"btn btn-sm btn-warning\" />\r\n    </td>\r\n</ng-template>\r\n\r\n<!--шаблон для добавления-->\r\n<ng-template #create>\r\n    <div class=\"form-group\">\r\n        <label>Name</label>\r\n        <input type=\"text\" [(ngModel)]=\"product.name\" class=\"form-control\" />\r\n        <label>Type Of Cover</label>\r\n        <input type=\"text\" [(ngModel)]=\"product.typeOfCover\" class=\"form-control\" />\r\n        <label>Number Of Pages</label>\r\n        <input type=\"number\" [(ngModel)]=\"product.numberOfPages\" class=\"form-control\" />\r\n    </div>\r\n    <div>\r\n        <input type=\"button\" value=\"Save\" (click)=\"save()\" class=\"btn btn-success\" />\r\n        <input type=\"button\" value=\"Cancel\" (click)=\"cancel()\" class=\"btn btn-warning\" />\r\n    </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/components/brochure/brochure.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/brochure/brochure.component.ts ***!
  \***********************************************************/
/*! exports provided: BrochureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrochureComponent", function() { return BrochureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_brochure_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/brochure.service */ "./src/app/services/brochure.service.ts");
/* harmony import */ var _models_brochure_brochure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/brochure/brochure */ "./src/app/models/brochure/brochure.ts");
/* harmony import */ var _models_brochure_allBrochures__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/brochure/allBrochures */ "./src/app/models/brochure/allBrochures.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BrochureComponent = /** @class */ (function () {
    function BrochureComponent(dataService) {
        this.dataService = dataService;
        this.tableMode = true;
        this.product = new _models_brochure_brochure__WEBPACK_IMPORTED_MODULE_2__["Brochure"]();
        this.products = new _models_brochure_allBrochures__WEBPACK_IMPORTED_MODULE_3__["AllBrochures"]();
    }
    BrochureComponent.prototype.ngOnInit = function () {
        this.loadProducts();
    };
    BrochureComponent.prototype.loadProducts = function () {
        var _this = this;
        this.dataService.getProducts()
            .subscribe(function (data) { return _this.products = data; });
    };
    BrochureComponent.prototype.save = function () {
        var _this = this;
        if (this.product.id == null) {
            this.dataService.createProduct(this.product)
                .subscribe(function (data) { return _this.products.brochures.push(data); });
        }
        else {
            this.dataService.updateProduct(this.product)
                .subscribe(function (data) { return _this.loadProducts(); });
        }
        this.cancel();
    };
    BrochureComponent.prototype.editProduct = function (p) {
        this.product = p;
    };
    BrochureComponent.prototype.cancel = function () {
        this.product = new _models_brochure_brochure__WEBPACK_IMPORTED_MODULE_2__["Brochure"]();
        this.tableMode = true;
    };
    BrochureComponent.prototype.delete = function (p) {
        var _this = this;
        this.dataService.deleteProduct(p.id)
            .subscribe(function (data) { return _this.loadProducts(); });
    };
    BrochureComponent.prototype.add = function () {
        this.cancel();
        this.tableMode = false;
    };
    BrochureComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'brochure',
            template: __webpack_require__(/*! ./brochure.component.html */ "./src/app/components/brochure/brochure.component.html"),
            providers: [_services_brochure_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]]
        }),
        __metadata("design:paramtypes", [_services_brochure_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], BrochureComponent);
    return BrochureComponent;
}());



/***/ }),

/***/ "./src/app/components/magazine/magazine.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/magazine/magazine.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Magazines</h1>\r\n<input type=\"button\" value=\"Add\" class=\"btn btn-default\" (click)=\"add()\" />\r\n<table *ngIf=\"tableMode; else create\" class=\"table table-striped\">\r\n    <thead>\r\n        <tr>\r\n            <td>Name</td>\r\n            <td>Number</td>\r\n            <td>Year Of Publication</td>\r\n            <td></td>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let p of products.magazines\">\r\n            <ng-template [ngIf]=\"product?.id != p.id\" [ngIfElse]=\"edit\">\r\n                <td>{{p?.name}}</td>\r\n                <td>{{p?.number}}</td>\r\n                <td>{{p?.yearOfPublication}}</td>\r\n                <td>\r\n                    <button class=\"btn btn-sm btn-primary\" (click)=\"editProduct(p)\">Edit</button>\r\n                    <button class=\"btn btn-sm btn-danger\" (click)=\"delete(p)\">Delete</button>\r\n                </td>\r\n            </ng-template>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n\r\n<!--шаблон для редактирования-->\r\n<ng-template #edit>\r\n    <td>\r\n        <input type=\"text\" [(ngModel)]=\"product.name\" class=\"form-control\" />\r\n        <input type=\"number\" [(ngModel)]=\"product.number\" class=\"form-control\" />\r\n        <input type=\"number\" [(ngModel)]=\"product.yearOfPublication\" class=\"form-control\" />\r\n    </td>\r\n    <td>\r\n        <input type=\"button\" value=\"Save\" (click)=\"save()\" class=\"btn btn-sm btn-success\" />\r\n        <input type=\"button\" value=\"Cancel\" (click)=\"cancel()\" class=\"btn btn-sm btn-warning\" />\r\n    </td>\r\n</ng-template>\r\n\r\n<!--шаблон для добавления-->\r\n<ng-template #create>\r\n    <div class=\"form-group\">\r\n        <label>Name</label>\r\n        <input type=\"text\" [(ngModel)]=\"product.name\" class=\"form-control\" />\r\n        <label>Number</label>\r\n        <input type=\"number\" [(ngModel)]=\"product.number\" class=\"form-control\" />\r\n        <label>Year Of Publication</label>\r\n        <input type=\"number\" [(ngModel)]=\"product.yearOfPublication\" class=\"form-control\" />\r\n    </div>\r\n    <div>\r\n        <input type=\"button\" value=\"Save\" (click)=\"save()\" class=\"btn btn-success\" />\r\n        <input type=\"button\" value=\"Cancel\" (click)=\"cancel()\" class=\"btn btn-warning\" />\r\n    </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/components/magazine/magazine.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/magazine/magazine.component.ts ***!
  \***********************************************************/
/*! exports provided: MagazineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MagazineComponent", function() { return MagazineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_magazine_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/magazine.service */ "./src/app/services/magazine.service.ts");
/* harmony import */ var _models_magazine_magazine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/magazine/magazine */ "./src/app/models/magazine/magazine.ts");
/* harmony import */ var _models_magazine_allMagazines__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/magazine/allMagazines */ "./src/app/models/magazine/allMagazines.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MagazineComponent = /** @class */ (function () {
    function MagazineComponent(dataService) {
        this.dataService = dataService;
        this.tableMode = true;
        this.product = new _models_magazine_magazine__WEBPACK_IMPORTED_MODULE_2__["Magazine"]();
        this.products = new _models_magazine_allMagazines__WEBPACK_IMPORTED_MODULE_3__["AllMagazines"]();
    }
    MagazineComponent.prototype.ngOnInit = function () {
        this.loadProducts();
    };
    MagazineComponent.prototype.loadProducts = function () {
        var _this = this;
        debugger;
        this.dataService.getProducts()
            .subscribe(function (data) { return _this.products = data; });
    };
    MagazineComponent.prototype.save = function () {
        var _this = this;
        if (this.product.id == null) {
            this.dataService.createProduct(this.product)
                .subscribe(function (data) { return _this.products.magazines.push(data); });
        }
        else {
            this.dataService.updateProduct(this.product)
                .subscribe(function (data) { return _this.loadProducts(); });
        }
        this.cancel();
    };
    MagazineComponent.prototype.editProduct = function (p) {
        this.product = p;
    };
    MagazineComponent.prototype.cancel = function () {
        this.product = new _models_magazine_magazine__WEBPACK_IMPORTED_MODULE_2__["Magazine"]();
        this.tableMode = true;
    };
    MagazineComponent.prototype.delete = function (p) {
        var _this = this;
        this.dataService.deleteProduct(p.id)
            .subscribe(function (data) { return _this.loadProducts(); });
    };
    MagazineComponent.prototype.add = function () {
        this.cancel();
        this.tableMode = false;
    };
    MagazineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'magazine',
            template: __webpack_require__(/*! ./magazine.component.html */ "./src/app/components/magazine/magazine.component.html"),
            providers: [_services_magazine_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]]
        }),
        __metadata("design:paramtypes", [_services_magazine_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], MagazineComponent);
    return MagazineComponent;
}());



/***/ }),

/***/ "./src/app/components/navmenu/navmenu.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/navmenu/navmenu.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li .glyphicon {\r\n    margin-right: 10px;\r\n}\r\n\r\n/* Highlighting rules for nav menu items */\r\n\r\nli.link-active a,\r\nli.link-active a:hover,\r\nli.link-active a:focus {\r\n    background-color: #4189C7;\r\n    color: white;\r\n}\r\n\r\n/* Keep the nav menu independent of scrolling and on top of other items */\r\n\r\n.main-nav {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: 1;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    /* On small screens, convert the nav menu to a vertical sidebar */\r\n    .main-nav {\r\n        height: 100%;\r\n        width: calc(25% - 20px);\r\n    }\r\n    .navbar {\r\n        border-radius: 0px;\r\n        border-width: 0px;\r\n        height: 100%;\r\n    }\r\n    .navbar-header {\r\n        float: none;\r\n    }\r\n    .navbar-collapse {\r\n        border-top: 1px solid #444;\r\n        padding: 0px;\r\n    }\r\n    .navbar ul {\r\n        float: none;\r\n    }\r\n    .navbar li {\r\n        float: none;\r\n        font-size: 15px;\r\n        margin: 6px;\r\n    }\r\n    .navbar li a {\r\n        padding: 10px 16px;\r\n        border-radius: 4px;\r\n    }\r\n    .navbar a {\r\n        /* If a menu item's text is too long, truncate it */\r\n        width: 100%;\r\n        white-space: nowrap;\r\n        overflow: hidden;\r\n        text-overflow: ellipsis;\r\n    }\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/navmenu/navmenu.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/navmenu/navmenu.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class='main-nav'>\r\n  <div class='navbar navbar-inverse'>\r\n    <div class='navbar-header'>\r\n      <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>\r\n        <span class='sr-only'>Toggle navigation</span>\r\n        <span class='icon-bar'></span>\r\n        <span class='icon-bar'></span>\r\n        <span class='icon-bar'></span>\r\n      </button>\r\n      <a class='navbar-brand' [routerLink]=\"['/home']\">Library.WEB</a>\r\n    </div>\r\n    <div class='clearfix'></div>\r\n    <div class='navbar-collapse collapse'>\r\n      <ul class='nav navbar-nav'>\r\n\r\n        <li [routerLinkActive]=\"['link-active']\">\r\n          <a [routerLink]=\"['/book']\">\r\n            <span class='glyphicon glyphicon-education'></span> Books\r\n          </a>\r\n        </li>\r\n        <li [routerLinkActive]=\"['link-active']\">\r\n          <a [routerLink]=\"['/magazine']\">\r\n            <span class='glyphicon glyphicon-th-list'></span> Magazines\r\n          </a>\r\n        </li>\r\n        <li [routerLinkActive]=\"['link-active']\">\r\n          <a [routerLink]=\"['/brochure']\">\r\n            <span class='glyphicon glyphicon-education'></span> Brochures\r\n          </a>\r\n        </li>\r\n        <li [routerLinkActive]=\"['link-active']\">\r\n          <a [routerLink]=\"['/author']\">\r\n            <span class='glyphicon glyphicon-education'></span> Authors\r\n          </a>\r\n        </li>\r\n        <li [routerLinkActive]=\"['link-active']\">\r\n          <a [routerLink]=\"['/publicationHouse']\">\r\n            <span class='glyphicon glyphicon-education'></span> PublicationHouses\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/navmenu/navmenu.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/navmenu/navmenu.component.ts ***!
  \*********************************************************/
/*! exports provided: NavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function() { return NavMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NavMenuComponent = /** @class */ (function () {
    function NavMenuComponent() {
    }
    NavMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'nav-menu',
            template: __webpack_require__(/*! ./navmenu.component.html */ "./src/app/components/navmenu/navmenu.component.html"),
            styles: [__webpack_require__(/*! ./navmenu.component.css */ "./src/app/components/navmenu/navmenu.component.css")]
        })
    ], NavMenuComponent);
    return NavMenuComponent;
}());



/***/ }),

/***/ "./src/app/components/publicationHouse/publicationHouse.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/publicationHouse/publicationHouse.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Publication Houses</h1>\r\n<input type=\"button\" value=\"Add\" class=\"btn btn-default\" (click)=\"add()\" />\r\n<table *ngIf=\"tableMode; else create\" class=\"table table-striped\">\r\n    <thead>\r\n        <tr>\r\n            <td>Name</td>\r\n            <td>Adress</td>\r\n            <td></td>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let p of products.publicationHouses\">\r\n            <ng-template [ngIf]=\"product?.id != p.id\" [ngIfElse]=\"edit\">\r\n                <td>{{p?.name}}</td>\r\n                <td>{{p?.adress}}</td>\r\n                <td>\r\n                    <button class=\"btn btn-sm btn-primary\" (click)=\"editProduct(p)\">Edit</button>\r\n                    <button class=\"btn btn-sm btn-danger\" (click)=\"delete(p)\">Delete</button>\r\n                </td>\r\n            </ng-template>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n\r\n<!--шаблон для редактирования-->\r\n<ng-template #edit>\r\n    <td>\r\n        <input type=\"text\" [(ngModel)]=\"product.name\" class=\"form-control\" />\r\n    </td>\r\n    <td>\r\n        <input type=\"button\" value=\"Save\" (click)=\"save()\" class=\"btn btn-sm btn-success\" />\r\n        <input type=\"button\" value=\"Cancel\" (click)=\"cancel()\" class=\"btn btn-sm btn-warning\" />\r\n    </td>\r\n</ng-template>\r\n\r\n<!--шаблон для добавления-->\r\n<ng-template #create>\r\n    <div class=\"form-group\">\r\n        <label>Name</label>\r\n        <input type=\"text\" [(ngModel)]=\"product.name\" class=\"form-control\" />\r\n        <label>Adress</label>\r\n        <input type=\"text\" [(ngModel)]=\"product.adress\" class=\"form-control\" />\r\n    </div>\r\n    <div>\r\n        <input type=\"button\" value=\"Save\" (click)=\"save()\" class=\"btn btn-success\" />\r\n        <input type=\"button\" value=\"Cancel\" (click)=\"cancel()\" class=\"btn btn-warning\" />\r\n    </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/components/publicationHouse/publicationHouse.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/publicationHouse/publicationHouse.component.ts ***!
  \***************************************************************************/
/*! exports provided: PublicationHouseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicationHouseComponent", function() { return PublicationHouseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_publicationHouse_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/publicationHouse.service */ "./src/app/services/publicationHouse.service.ts");
/* harmony import */ var _models_publicationHouse_publicationHouse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/publicationHouse/publicationHouse */ "./src/app/models/publicationHouse/publicationHouse.ts");
/* harmony import */ var _models_publicationHouse_allPublicationHouses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/publicationHouse/allPublicationHouses */ "./src/app/models/publicationHouse/allPublicationHouses.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PublicationHouseComponent = /** @class */ (function () {
    function PublicationHouseComponent(dataService) {
        this.dataService = dataService;
        this.tableMode = true;
        this.product = new _models_publicationHouse_publicationHouse__WEBPACK_IMPORTED_MODULE_2__["PublicationHouse"]();
        this.products = new _models_publicationHouse_allPublicationHouses__WEBPACK_IMPORTED_MODULE_3__["AllPublicationHouses"]();
    }
    PublicationHouseComponent.prototype.ngOnInit = function () {
        this.loadProducts();
    };
    PublicationHouseComponent.prototype.loadProducts = function () {
        var _this = this;
        this.dataService.getProducts()
            .subscribe(function (data) { return _this.products = data; });
    };
    PublicationHouseComponent.prototype.save = function () {
        var _this = this;
        if (this.product.id == null) {
            this.dataService.createProduct(this.product)
                .subscribe(function (data) { return _this.products.publicationHouses.push(data); });
        }
        else {
            this.dataService.updateProduct(this.product)
                .subscribe(function (data) { return _this.loadProducts(); });
        }
        this.cancel();
    };
    PublicationHouseComponent.prototype.editProduct = function (p) {
        this.product = p;
    };
    PublicationHouseComponent.prototype.cancel = function () {
        this.product = new _models_publicationHouse_publicationHouse__WEBPACK_IMPORTED_MODULE_2__["PublicationHouse"]();
        this.tableMode = true;
    };
    PublicationHouseComponent.prototype.delete = function (p) {
        var _this = this;
        this.dataService.deleteProduct(p.id)
            .subscribe(function (data) { return _this.loadProducts(); });
    };
    PublicationHouseComponent.prototype.add = function () {
        this.cancel();
        this.tableMode = false;
    };
    PublicationHouseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'publicationHouse',
            template: __webpack_require__(/*! ./publicationHouse.component.html */ "./src/app/components/publicationHouse/publicationHouse.component.html"),
            providers: [_services_publicationHouse_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]]
        }),
        __metadata("design:paramtypes", [_services_publicationHouse_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], PublicationHouseComponent);
    return PublicationHouseComponent;
}());



/***/ }),

/***/ "./src/app/models/author/allAuthors.ts":
/*!*********************************************!*\
  !*** ./src/app/models/author/allAuthors.ts ***!
  \*********************************************/
/*! exports provided: AllAuthors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllAuthors", function() { return AllAuthors; });
var AllAuthors = /** @class */ (function () {
    function AllAuthors() {
        this.authors = new Array();
    }
    return AllAuthors;
}());



/***/ }),

/***/ "./src/app/models/author/author.ts":
/*!*****************************************!*\
  !*** ./src/app/models/author/author.ts ***!
  \*****************************************/
/*! exports provided: Author */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Author", function() { return Author; });
var Author = /** @class */ (function () {
    function Author(id, name) {
        this.id = id;
        this.name = name;
    }
    return Author;
}());



/***/ }),

/***/ "./src/app/models/book/allBooks.ts":
/*!*****************************************!*\
  !*** ./src/app/models/book/allBooks.ts ***!
  \*****************************************/
/*! exports provided: AllBooks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllBooks", function() { return AllBooks; });
var AllBooks = /** @class */ (function () {
    function AllBooks() {
        this.books = new Array();
    }
    return AllBooks;
}());



/***/ }),

/***/ "./src/app/models/book/book.ts":
/*!*************************************!*\
  !*** ./src/app/models/book/book.ts ***!
  \*************************************/
/*! exports provided: Book */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Book", function() { return Book; });
var Book = /** @class */ (function () {
    function Book(id, name, yearOfPublication, authorId, author) {
        this.id = id;
        this.name = name;
        this.yearOfPublication = yearOfPublication;
        this.authorId = authorId;
        this.author = author;
    }
    return Book;
}());



/***/ }),

/***/ "./src/app/models/brochure/allBrochures.ts":
/*!*************************************************!*\
  !*** ./src/app/models/brochure/allBrochures.ts ***!
  \*************************************************/
/*! exports provided: AllBrochures */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllBrochures", function() { return AllBrochures; });
var AllBrochures = /** @class */ (function () {
    function AllBrochures() {
        this.brochures = new Array();
    }
    return AllBrochures;
}());



/***/ }),

/***/ "./src/app/models/brochure/brochure.ts":
/*!*********************************************!*\
  !*** ./src/app/models/brochure/brochure.ts ***!
  \*********************************************/
/*! exports provided: Brochure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Brochure", function() { return Brochure; });
var Brochure = /** @class */ (function () {
    function Brochure(id, name, typeOfCover, numberOfPages) {
        this.id = id;
        this.name = name;
        this.typeOfCover = typeOfCover;
        this.numberOfPages = numberOfPages;
    }
    return Brochure;
}());



/***/ }),

/***/ "./src/app/models/magazine/allMagazines.ts":
/*!*************************************************!*\
  !*** ./src/app/models/magazine/allMagazines.ts ***!
  \*************************************************/
/*! exports provided: AllMagazines */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllMagazines", function() { return AllMagazines; });
var AllMagazines = /** @class */ (function () {
    function AllMagazines() {
        this.magazines = new Array();
    }
    return AllMagazines;
}());



/***/ }),

/***/ "./src/app/models/magazine/magazine.ts":
/*!*********************************************!*\
  !*** ./src/app/models/magazine/magazine.ts ***!
  \*********************************************/
/*! exports provided: Magazine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Magazine", function() { return Magazine; });
var Magazine = /** @class */ (function () {
    function Magazine(id, name, number, yearOfPublication) {
        this.id = id;
        this.name = name;
        this.number = number;
        this.yearOfPublication = yearOfPublication;
    }
    return Magazine;
}());



/***/ }),

/***/ "./src/app/models/publicationHouse/allPublicationHouses.ts":
/*!*****************************************************************!*\
  !*** ./src/app/models/publicationHouse/allPublicationHouses.ts ***!
  \*****************************************************************/
/*! exports provided: AllPublicationHouses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllPublicationHouses", function() { return AllPublicationHouses; });
var AllPublicationHouses = /** @class */ (function () {
    function AllPublicationHouses() {
        this.publicationHouses = new Array();
    }
    return AllPublicationHouses;
}());



/***/ }),

/***/ "./src/app/models/publicationHouse/publicationHouse.ts":
/*!*************************************************************!*\
  !*** ./src/app/models/publicationHouse/publicationHouse.ts ***!
  \*************************************************************/
/*! exports provided: PublicationHouse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicationHouse", function() { return PublicationHouse; });
var PublicationHouse = /** @class */ (function () {
    function PublicationHouse(id, name, adress) {
        this.id = id;
        this.name = name;
        this.adress = adress;
    }
    return PublicationHouse;
}());



/***/ }),

/***/ "./src/app/services/author.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/author.service.ts ***!
  \********************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.url = "/api/author";
    }
    DataService.prototype.getProducts = function () {
        return this.http.get(this.url);
    };
    DataService.prototype.getProduct = function (id) {
        return this.http.get(this.url + 'api/Author/Get/' + id);
    };
    DataService.prototype.createProduct = function (product) {
        return this.http.post(this.url + 'api/Author/Create', product);
    };
    DataService.prototype.updateProduct = function (product) {
        return this.http.put(this.url + 'api/Author/Update', product);
    };
    DataService.prototype.deleteProduct = function (id) {
        return this.http.delete(this.url + 'api/Author/Delete/' + id);
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/services/book.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/book.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.url = "";
        this.url = "api/Book";
    }
    DataService.prototype.getProducts = function () {
        return this.http.get(this.url);
    };
    DataService.prototype.getProduct = function (id) {
        return this.http.get(this.url + 'api/Book/Get/' + id);
    };
    DataService.prototype.createProduct = function (product) {
        return this.http.post(this.url + 'api/Book/Create', product);
    };
    DataService.prototype.updateProduct = function (product) {
        return this.http.put(this.url + 'api/Book/Update', product);
    };
    DataService.prototype.deleteProduct = function (id) {
        return this.http.delete(this.url + 'api/Book/Delete/' + id);
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/services/brochure.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/brochure.service.ts ***!
  \**********************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.url = "/api/brochures";
    }
    DataService.prototype.getProducts = function () {
        return this.http.get(this.url + 'api/Brochure/GetAll');
    };
    DataService.prototype.getProduct = function (id) {
        return this.http.get(this.url + 'api/Brochure/Get/' + id);
    };
    DataService.prototype.createProduct = function (product) {
        return this.http.post(this.url + 'api/Brochure/Create', product);
    };
    DataService.prototype.updateProduct = function (product) {
        return this.http.put(this.url + 'api/Brochure/Update', product);
    };
    DataService.prototype.deleteProduct = function (id) {
        return this.http.delete(this.url + 'api/Brochure/Delete/' + id);
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/services/magazine.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/magazine.service.ts ***!
  \**********************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.url = "/api/magazine";
    }
    DataService.prototype.getProducts = function () {
        return this.http.get(/*this.url + */ '/api/magazine/GetAll');
    };
    DataService.prototype.getProduct = function (id) {
        return this.http.get(this.url + 'api/Magazine/Get/' + id);
    };
    DataService.prototype.createProduct = function (product) {
        return this.http.post(this.url + 'api/Magazine/Create', product);
    };
    DataService.prototype.updateProduct = function (product) {
        return this.http.put(this.url + 'api/Magazine/Update', product);
    };
    DataService.prototype.deleteProduct = function (id) {
        return this.http.delete(this.url + 'api/Magazine/Delete/' + id);
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/services/publicationHouse.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/publicationHouse.service.ts ***!
  \******************************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.url = "/api/publicationHouse";
    }
    DataService.prototype.getProducts = function () {
        return this.http.get(this.url + 'api/PublicationHouse/GetAll');
    };
    DataService.prototype.getProduct = function (id) {
        return this.http.get(this.url + 'api/PublicationHouse/Get/' + id);
    };
    DataService.prototype.createProduct = function (product) {
        return this.http.post(this.url + 'api/PublicationHouse/Create', product);
    };
    DataService.prototype.updateProduct = function (product) {
        return this.http.put(this.url + 'api/PublicationHouse/Update', product);
    };
    DataService.prototype.deleteProduct = function (id) {
        return this.http.delete(this.url + 'api/PublicationHouse/Delete/' + id);
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Anuitex-66\source\repos\AngularLibrary\Library.WebUI\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map