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

/***/ "./src/app/AppHttpInterceptor.ts":
/*!***************************************!*\
  !*** ./src/app/AppHttpInterceptor.ts ***!
  \***************************************/
/*! exports provided: AppHttpInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppHttpInterceptor", function() { return AppHttpInterceptor; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppHttpInterceptor = /** @class */ (function () {
    function AppHttpInterceptor(router) {
        this.router = router;
        this.getToken();
    }
    AppHttpInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        if (this.token) {
            req = req.clone({ setHeaders: { 'Authorization': 'Bearer ' + this.token } });
        }
        console.log(req);
        return next.handle(req)
            .map(function (resp) {
            if (resp instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]) {
                return resp;
            }
        })
            .catch(function (err) {
            console.log(err);
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpErrorResponse"]) {
                console.log(err.status);
                console.log(err.statusText);
                if (err.status === 401) {
                    _this.router.navigate(['/login']);
                }
            }
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"].of(err);
        });
    };
    AppHttpInterceptor.prototype.getToken = function () {
        if (localStorage.getItem("data")) {
            this.token = JSON.parse(localStorage.getItem("data")).token;
        }
    };
    AppHttpInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppHttpInterceptor);
    return AppHttpInterceptor;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " @media (max-width: 767px) {\r\n  /* On small screens, the nav menu spans the full width of the screen. Leave a space for it. */\r\n  .body-content {\r\n    padding-top: 50px;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='container-fluid'>\r\n  <div class='row'>\r\n    <div class='col-sm-3'>\r\n      <nav-menu></nav-menu>\r\n    </div>\r\n    <div class='col-sm-9 body-content'>\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navmenu_navmenu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/navmenu/navmenu.component */ "./src/app/components/navmenu/navmenu.component.ts");
/* harmony import */ var _components_author_author_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/author/author.component */ "./src/app/components/author/author.component.ts");
/* harmony import */ var _components_magazine_magazine_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/magazine/magazine.component */ "./src/app/components/magazine/magazine.component.ts");
/* harmony import */ var _components_brochure_brochure_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/brochure/brochure.component */ "./src/app/components/brochure/brochure.component.ts");
/* harmony import */ var _components_publicationHouse_publicationHouse_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/publicationHouse/publicationHouse.component */ "./src/app/components/publicationHouse/publicationHouse.component.ts");
/* harmony import */ var _components_book_book_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/book/book.component */ "./src/app/components/book/book.component.ts");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/es/index.js");
/* harmony import */ var _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @progress/kendo-angular-dropdowns */ "./node_modules/@progress/kendo-angular-dropdowns/dist/es/index.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _components_registration_form_registration_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/registration-form/registration-form.component */ "./src/app/components/registration-form/registration-form.component.ts");
/* harmony import */ var _services_identity_user_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/identity/user.service */ "./src/app/services/identity/user.service.ts");
/* harmony import */ var _components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/login-form/login-form.component */ "./src/app/components/login-form/login-form.component.ts");
/* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/user/user.component */ "./src/app/components/user/user.component.ts");
/* harmony import */ var _AppHttpInterceptor__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./AppHttpInterceptor */ "./src/app/AppHttpInterceptor.ts");
/* harmony import */ var _services_identity_login_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/identity/login.service */ "./src/app/services/identity/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_navmenu_navmenu_component__WEBPACK_IMPORTED_MODULE_7__["NavMenuComponent"],
                _components_author_author_component__WEBPACK_IMPORTED_MODULE_8__["AuthorComponent"],
                _components_magazine_magazine_component__WEBPACK_IMPORTED_MODULE_9__["MagazineComponent"],
                _components_brochure_brochure_component__WEBPACK_IMPORTED_MODULE_10__["BrochureComponent"],
                _components_publicationHouse_publicationHouse_component__WEBPACK_IMPORTED_MODULE_11__["PublicationHouseComponent"],
                _components_book_book_component__WEBPACK_IMPORTED_MODULE_12__["BookComponent"],
                _components_user_user_component__WEBPACK_IMPORTED_MODULE_19__["UserComponent"],
                _components_registration_form_registration_form_component__WEBPACK_IMPORTED_MODULE_16__["RegistrationFormComponent"],
                _components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_18__["LoginFormComponent"],
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
                    .forRoot([
                    { path: '', redirectTo: 'book', pathMatch: 'full' },
                    { path: 'author', component: _components_author_author_component__WEBPACK_IMPORTED_MODULE_8__["AuthorComponent"] },
                    { path: "magazine", component: _components_magazine_magazine_component__WEBPACK_IMPORTED_MODULE_9__["MagazineComponent"] },
                    { path: 'brochure', component: _components_brochure_brochure_component__WEBPACK_IMPORTED_MODULE_10__["BrochureComponent"] },
                    { path: 'publicationHouse', component: _components_publicationHouse_publicationHouse_component__WEBPACK_IMPORTED_MODULE_11__["PublicationHouseComponent"] },
                    { path: 'book', component: _components_book_book_component__WEBPACK_IMPORTED_MODULE_12__["BookComponent"] },
                    { path: 'register', component: _components_registration_form_registration_form_component__WEBPACK_IMPORTED_MODULE_16__["RegistrationFormComponent"] },
                    { path: 'login', component: _components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_18__["LoginFormComponent"] },
                    { path: 'user', component: _components_user_user_component__WEBPACK_IMPORTED_MODULE_19__["UserComponent"] },
                    { path: '**', redirectTo: '' }
                ]),
                _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_13__["GridModule"],
                _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_14__["DropDownsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"]
            ],
            providers: [
                _services_identity_login_service__WEBPACK_IMPORTED_MODULE_21__["LoginService"],
                _services_identity_user_service__WEBPACK_IMPORTED_MODULE_17__["UserService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _AppHttpInterceptor__WEBPACK_IMPORTED_MODULE_20__["AppHttpInterceptor"],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
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

module.exports = "<kendo-grid [data]=\"authors.authors\"\r\n            [height]=\"533\"\r\n            [pageSize]=\"gridState.take\" [skip]=\"gridState.skip\" [sort]=\"gridState.sort\"\r\n            [pageable]=\"true\" [sortable]=\"true\"\r\n            (dataStateChange)=\"onStateChange($event)\"\r\n            (edit)=\"editHandler($event)\" (cancel)=\"cancelHandler($event)\"\r\n            (save)=\"saveHandler($event)\" (remove)=\"removeHandler($event)\"\r\n            (add)=\"addHandler($event)\"\r\n            [navigable]=\"true\">\r\n  <ng-container *ngIf=\"admin\">\r\n    <ng-template kendoGridToolbarTemplate>\r\n      <button kendoGridAddCommand>Add new</button>\r\n    </ng-template>\r\n  </ng-container>\r\n  <kendo-grid-column field=\"name\" title=\"Name\"></kendo-grid-column>\r\n  <ng-container *ngIf=\"admin\">\r\n    <kendo-grid-command-column title=\"command\" width=\"220\">\r\n      <ng-template kendoGridCellTemplate let-isNew=\"isNew\">\r\n        <button kendoGridEditCommand [primary]=\"true\">Edit</button>\r\n        <button kendoGridRemoveCommand>Remove</button>\r\n        <button kendoGridSaveCommand [disabled]=\"formGroup?.invalid\">{{ isNew ? 'Add' : 'Update' }}</button>\r\n        <button kendoGridCancelCommand>{{ isNew ? 'Discard changes' : 'Cancel' }}</button>\r\n      </ng-template>\r\n    </kendo-grid-command-column>\r\n  </ng-container>\r\n</kendo-grid>\r\n"

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_author_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/author.service */ "./src/app/services/author.service.ts");
/* harmony import */ var _models_author_GetAllAuthorsViewModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/author/GetAllAuthorsViewModel */ "./src/app/models/author/GetAllAuthorsViewModel.ts");
/* harmony import */ var _services_identity_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/identity/user.service */ "./src/app/services/identity/user.service.ts");
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
    function AuthorComponent(dataService, userService) {
        this.dataService = dataService;
        this.userService = userService;
        this.gridState = {
            sort: [],
            skip: 0,
            take: 10
        };
        this.authors = new _models_author_GetAllAuthorsViewModel__WEBPACK_IMPORTED_MODULE_3__["GetAllAuthorsViewModel"]();
    }
    AuthorComponent.prototype.ngOnInit = function () {
        this.loadData();
        this.admin = this.userService.getIsAdmin();
    };
    AuthorComponent.prototype.loadData = function () {
        var _this = this;
        this.dataService.get().subscribe(function (data) { return _this.authors = data; });
    };
    AuthorComponent.prototype.addHandler = function (_a) {
        var sender = _a.sender;
        this.closeEditor(sender);
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'id': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0),
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
        sender.addRow(this.formGroup);
    };
    AuthorComponent.prototype.editHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex, dataItem = _a.dataItem;
        this.closeEditor(sender);
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'id': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](dataItem.id),
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](dataItem.name, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
        this.editedRowIndex = rowIndex;
        sender.editRow(rowIndex, this.formGroup);
    };
    AuthorComponent.prototype.cancelHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex;
        this.closeEditor(sender, rowIndex);
    };
    AuthorComponent.prototype.saveHandler = function (_a) {
        var _this = this;
        var sender = _a.sender, rowIndex = _a.rowIndex, formGroup = _a.formGroup, isNew = _a.isNew;
        if (isNew) {
            var product = formGroup.value;
            this.dataService.create(product)
                .subscribe(function () { return _this.loadData(); });
        }
        if (!isNew) {
            var product = formGroup.value;
            this.dataService.update(product)
                .subscribe(function () { return _this.loadData(); });
        }
        sender.closeRow(rowIndex);
    };
    AuthorComponent.prototype.removeHandler = function (_a) {
        var _this = this;
        var dataItem = _a.dataItem;
        this.dataService.delete(dataItem.id)
            .subscribe(function () { return _this.loadData(); });
    };
    AuthorComponent.prototype.closeEditor = function (grid, rowIndex) {
        if (rowIndex === void 0) { rowIndex = this.editedRowIndex; }
        grid.closeRow(rowIndex);
        this.editedRowIndex = undefined;
        this.formGroup = undefined;
    };
    AuthorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'author',
            template: __webpack_require__(/*! ./author.component.html */ "./src/app/components/author/author.component.html"),
            providers: [_services_author_service__WEBPACK_IMPORTED_MODULE_2__["AuthorService"], _services_identity_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]]
        }),
        __metadata("design:paramtypes", [_services_author_service__WEBPACK_IMPORTED_MODULE_2__["AuthorService"], _services_identity_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
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

module.exports = "<kendo-grid [data]=\"books.books\"\r\n            [height]=\"533\"\r\n            [pageSize]=\"gridState.take\" [skip]=\"gridState.skip\" [sort]=\"gridState.sort\"\r\n            [pageable]=\"true\" [sortable]=\"true\"\r\n            (dataStateChange)=\"onStateChange($event)\"\r\n            (edit)=\"editHandler($event)\" (cancel)=\"cancelHandler($event)\"\r\n            (save)=\"saveHandler($event)\" (remove)=\"removeHandler($event)\"\r\n            (add)=\"addHandler($event)\"\r\n            [navigable]=\"true\">\r\n  <ng-container *ngIf=\"admin\">\r\n    <ng-template kendoGridToolbarTemplate>\r\n      <button kendoGridAddCommand>Add new</button>\r\n    </ng-template>\r\n  </ng-container>\r\n  <kendo-grid-column field=\"name\" title=\"Name\"></kendo-grid-column>\r\n  <kendo-grid-column field=\"author.name\" title=\"Author\">\r\n    <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\" >\r\n      <kendo-dropdownlist\r\n        name=\"dataItem.author\"\r\n        [data]=\"authors.authors\"\r\n                         textField=\"name\"\r\n                          valueField=\"id\"\r\n                          [(ngModel)]=\"dataItem.author\"\r\n                          (valueChange)=\"authorChange($event)\">\r\n      </kendo-dropdownlist>\r\n    </ng-template>\r\n  </kendo-grid-column>\r\n  <kendo-grid-column field=\"yearOfPublication\" title=\"Year Of Publication\"></kendo-grid-column>\r\n  <kendo-grid-column field=\"publicationHouses\" title=\"Publication Houses\">\r\n    <ng-template kendoGridCellTemplate let-dataItem=\"dataItem\">\r\n\r\n      <span *ngFor=\"let publicationHouse of dataItem.publicationHouses\">{{publicationHouse.name}}, </span>\r\n\r\n    </ng-template>\r\n    <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\r\n      <kendo-multiselect\r\n        name=\"dataItem.publicationHouses\"\r\n        [data]=\"publicationHouses.publicationHouses\"\r\n        textField=\"name\"\r\n        valueField=\"id\"\r\n        [(ngModel)]=\"dataItem.publicationHouses\"\r\n        (valueChange)=\"publicationHousesChange($event)\">\r\n      </kendo-multiselect>\r\n    </ng-template>\r\n  </kendo-grid-column>\r\n  <ng-container *ngIf=\"admin\">\r\n    <kendo-grid-command-column title=\"command\" width=\"220\">\r\n      <ng-template kendoGridCellTemplate let-isNew=\"isNew\">\r\n        <button kendoGridEditCommand [primary]=\"true\">Edit</button>\r\n        <button kendoGridRemoveCommand>Remove</button>\r\n        <button kendoGridSaveCommand [disabled]=\"formGroup?.invalid\">{{ isNew ? 'Add' : 'Update' }}</button>\r\n        <button kendoGridCancelCommand>{{ isNew ? 'Discard changes' : 'Cancel' }}</button>\r\n      </ng-template>\r\n    </kendo-grid-command-column>\r\n  </ng-container>\r\n</kendo-grid>\r\n"

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/book.service */ "./src/app/services/book.service.ts");
/* harmony import */ var _services_author_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/author.service */ "./src/app/services/author.service.ts");
/* harmony import */ var _services_publicationHouse_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/publicationHouse.service */ "./src/app/services/publicationHouse.service.ts");
/* harmony import */ var _models_publicationHouse_GetAllPublicationHousesViewModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/publicationHouse/GetAllPublicationHousesViewModel */ "./src/app/models/publicationHouse/GetAllPublicationHousesViewModel.ts");
/* harmony import */ var _models_author_GetAllAuthorsViewModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/author/GetAllAuthorsViewModel */ "./src/app/models/author/GetAllAuthorsViewModel.ts");
/* harmony import */ var _models_book_GetAllBooksViewModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/book/GetAllBooksViewModel */ "./src/app/models/book/GetAllBooksViewModel.ts");
/* harmony import */ var _services_identity_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/identity/user.service */ "./src/app/services/identity/user.service.ts");
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
    function BookComponent(dataService, authorService, publicationHouseSevice, userService) {
        this.dataService = dataService;
        this.authorService = authorService;
        this.publicationHouseSevice = publicationHouseSevice;
        this.userService = userService;
        this.gridState = {
            sort: [],
            skip: 0,
            take: 10
        };
        this.books = new _models_book_GetAllBooksViewModel__WEBPACK_IMPORTED_MODULE_7__["GetAllBooksViewModel"]();
        this.authors = new _models_author_GetAllAuthorsViewModel__WEBPACK_IMPORTED_MODULE_6__["GetAllAuthorsViewModel"]();
        this.publicationHouses = new _models_publicationHouse_GetAllPublicationHousesViewModel__WEBPACK_IMPORTED_MODULE_5__["GetAllPublicationHousesViewModel"]();
    }
    BookComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadData();
        this.authorService.get().subscribe(function (data) { return _this.authors = data; });
        this.publicationHouseSevice.get().subscribe(function (data) { return _this.publicationHouses = data; });
        this.admin = this.userService.getIsAdmin();
    };
    BookComponent.prototype.loadData = function () {
        var _this = this;
        this.dataService.get().subscribe(function (data) {
            _this.books = data;
        });
    };
    BookComponent.prototype.addHandler = function (_a) {
        var sender = _a.sender;
        this.closeEditor(sender);
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'id': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0),
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'yearOfPublication': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]{4}')])),
            'author': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            'publicationHouses': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
        sender.addRow(this.formGroup);
    };
    BookComponent.prototype.editHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex, dataItem = _a.dataItem;
        this.closeEditor(sender);
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'id': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](dataItem.id),
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](dataItem.name, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'yearOfPublication': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](dataItem.yearOfPublication, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]{4}')])),
            'author': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](dataItem.author),
            'publicationHouses': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](dataItem.publicationHouses)
        });
        this.editedRowIndex = rowIndex;
        sender.editRow(rowIndex, this.formGroup);
    };
    BookComponent.prototype.cancelHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex;
        this.closeEditor(sender, rowIndex);
    };
    BookComponent.prototype.saveHandler = function (_a) {
        var _this = this;
        var sender = _a.sender, rowIndex = _a.rowIndex, formGroup = _a.formGroup, isNew = _a.isNew;
        if (isNew) {
            var product = formGroup.value;
            this.dataService.create(product)
                .subscribe(function () { return _this.loadData(); });
        }
        if (!isNew) {
            var product = formGroup.value;
            this.dataService.update(product)
                .subscribe(function () { return _this.loadData(); });
        }
        sender.closeRow(rowIndex);
    };
    BookComponent.prototype.removeHandler = function (_a) {
        var _this = this;
        var dataItem = _a.dataItem;
        this.dataService.delete(dataItem.id)
            .subscribe(function () { return _this.loadData(); });
    };
    BookComponent.prototype.closeEditor = function (grid, rowIndex) {
        if (rowIndex === void 0) { rowIndex = this.editedRowIndex; }
        grid.closeRow(rowIndex);
        this.editedRowIndex = undefined;
        this.formGroup = undefined;
    };
    BookComponent.prototype.authorChange = function (value) {
        this.formGroup.get('author').setValue(value);
    };
    BookComponent.prototype.publicationHousesChange = function (value) {
        this.formGroup.get('publicationHouses').setValue(value);
    };
    BookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'book',
            template: __webpack_require__(/*! ./book.component.html */ "./src/app/components/book/book.component.html"),
            providers: [_services_book_service__WEBPACK_IMPORTED_MODULE_2__["BookService"], _services_author_service__WEBPACK_IMPORTED_MODULE_3__["AuthorService"], _services_publicationHouse_service__WEBPACK_IMPORTED_MODULE_4__["PublicationHouseService"], _services_identity_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"]]
        }),
        __metadata("design:paramtypes", [_services_book_service__WEBPACK_IMPORTED_MODULE_2__["BookService"],
            _services_author_service__WEBPACK_IMPORTED_MODULE_3__["AuthorService"],
            _services_publicationHouse_service__WEBPACK_IMPORTED_MODULE_4__["PublicationHouseService"],
            _services_identity_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"]])
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

module.exports = "<kendo-grid [data]=\"brochures.brochures\"\r\n            [height]=\"533\"\r\n            [pageSize]=\"gridState.take\" [skip]=\"gridState.skip\" [sort]=\"gridState.sort\"\r\n            [pageable]=\"true\" [sortable]=\"true\"\r\n            (dataStateChange)=\"onStateChange($event)\"\r\n            (edit)=\"editHandler($event)\" (cancel)=\"cancelHandler($event)\"\r\n            (save)=\"saveHandler($event)\" (remove)=\"removeHandler($event)\"\r\n            (add)=\"addHandler($event)\"\r\n            [navigable]=\"true\">\r\n  <ng-container *ngIf=\"admin\">\r\n    <ng-template kendoGridToolbarTemplate>\r\n      <button kendoGridAddCommand>Add new</button>\r\n    </ng-template>\r\n  </ng-container>\r\n  <kendo-grid-column field=\"name\" title=\"Name\"></kendo-grid-column>\r\n  <kendo-grid-column field=\"typeOfCover\" title=\"Type Of Cover\"></kendo-grid-column>\r\n  <kendo-grid-column field=\"numberOfPages\" title=\"Number Of Pages\"></kendo-grid-column>\r\n  <ng-container *ngIf=\"admin\">\r\n    <kendo-grid-command-column title=\"command\" width=\"220\">\r\n      <ng-template kendoGridCellTemplate let-isNew=\"isNew\">\r\n        <button kendoGridEditCommand [primary]=\"true\">Edit</button>\r\n        <button kendoGridRemoveCommand>Remove</button>\r\n        <button kendoGridSaveCommand [disabled]=\"formGroup?.invalid\">{{ isNew ? 'Add' : 'Update' }}</button>\r\n        <button kendoGridCancelCommand>{{ isNew ? 'Discard changes' : 'Cancel' }}</button>\r\n      </ng-template>\r\n    </kendo-grid-command-column>\r\n  </ng-container>\r\n</kendo-grid>\r\n"

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_brochure_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/brochure.service */ "./src/app/services/brochure.service.ts");
/* harmony import */ var _models_brochure_GetAllBrochuresViewModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/brochure/GetAllBrochuresViewModel */ "./src/app/models/brochure/GetAllBrochuresViewModel.ts");
/* harmony import */ var _services_identity_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/identity/user.service */ "./src/app/services/identity/user.service.ts");
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
    function BrochureComponent(dataService, userService) {
        this.dataService = dataService;
        this.userService = userService;
        this.gridState = {
            sort: [],
            skip: 0,
            take: 10
        };
        this.brochures = new _models_brochure_GetAllBrochuresViewModel__WEBPACK_IMPORTED_MODULE_3__["GetAllBrochuresViewModel"]();
    }
    BrochureComponent.prototype.ngOnInit = function () {
        this.loadData();
        this.admin = this.userService.getIsAdmin();
    };
    BrochureComponent.prototype.loadData = function () {
        var _this = this;
        this.dataService.get().subscribe(function (data) { return _this.brochures = data; });
    };
    BrochureComponent.prototype.addHandler = function (_a) {
        var sender = _a.sender;
        this.closeEditor(sender);
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'id': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0),
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'typeOfCover': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'numberOfPages': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]{1,3}')])),
        });
        sender.addRow(this.formGroup);
    };
    BrochureComponent.prototype.editHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex, dataItem = _a.dataItem;
        this.closeEditor(sender);
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'id': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](dataItem.id),
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](dataItem.name, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'typeOfCover': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](dataItem.typeOfCover, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'numberOfPages': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](dataItem.numberOfPages, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]{1,3}')])),
        });
        this.editedRowIndex = rowIndex;
        sender.editRow(rowIndex, this.formGroup);
    };
    BrochureComponent.prototype.cancelHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex;
        this.closeEditor(sender, rowIndex);
    };
    BrochureComponent.prototype.saveHandler = function (_a) {
        var _this = this;
        var sender = _a.sender, rowIndex = _a.rowIndex, formGroup = _a.formGroup, isNew = _a.isNew;
        if (isNew) {
            var product = formGroup.value;
            this.dataService.create(product)
                .subscribe(function () { return _this.loadData(); });
        }
        if (!isNew) {
            var product = formGroup.value;
            this.dataService.update(product)
                .subscribe(function () { return _this.loadData(); });
        }
        sender.closeRow(rowIndex);
    };
    BrochureComponent.prototype.removeHandler = function (_a) {
        var _this = this;
        var dataItem = _a.dataItem;
        this.dataService.delete(dataItem.id)
            .subscribe(function () { return _this.loadData(); });
    };
    BrochureComponent.prototype.closeEditor = function (grid, rowIndex) {
        if (rowIndex === void 0) { rowIndex = this.editedRowIndex; }
        grid.closeRow(rowIndex);
        this.editedRowIndex = undefined;
        this.formGroup = undefined;
    };
    BrochureComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'brochure',
            template: __webpack_require__(/*! ./brochure.component.html */ "./src/app/components/brochure/brochure.component.html"),
            providers: [_services_brochure_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _services_identity_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]]
        }),
        __metadata("design:paramtypes", [_services_brochure_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _services_identity_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], BrochureComponent);
    return BrochureComponent;
}());



/***/ }),

/***/ "./src/app/components/login-form/login-form.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/login-form/login-form.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-6 new-user-alert\">\r\n    <div *ngIf=\"brandNew\" class=\"alert alert-success\" role=\"alert\">\r\n      <strong>All set!</strong> Please login with your account\r\n    </div>\r\n    <h2>Login</h2>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-md-6\">\r\n    <form #f=\"ngForm\" novalidate (ngSubmit)=\"login(f)\">\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"email\">Email</label>\r\n        <input id=\"email\" type=\"text\" required name=\"email\" class=\"form-control\" placeholder=\"Email\" [ngModel]=\"credentials.email\" #email=\"ngModel\" tmFocus validateEmail>\r\n        <small [hidden]=\"email.valid || (email.pristine && !submitted)\" class=\"text-danger\">Please enter a valid email</small>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"password\">Password</label>\r\n        <input type=\"password\" class=\"form-control\" id=\"password\" required name=\"password\" placeholder=\"Password\" ngModel>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"f.invalid || isRequesting\">Login</button>\r\n      </div>\r\n\r\n      <div *ngIf=\"errors\" class=\"alert alert-danger\" role=\"alert\">\r\n        <strong>Oops!</strong> {{errors}}\r\n      </div>\r\n\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/login-form/login-form.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/login-form/login-form.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".new-user-alert {\n  padding-top: 2.5rem; }\n"

/***/ }),

/***/ "./src/app/components/login-form/login-form.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/login-form/login-form.component.ts ***!
  \***************************************************************/
/*! exports provided: LoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return LoginFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_identity_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/identity/user.service */ "./src/app/services/identity/user.service.ts");
/* harmony import */ var _services_identity_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/identity/login.service */ "./src/app/services/identity/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent(loginService, userService, router, activatedRoute) {
        this.loginService = loginService;
        this.userService = userService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.submitted = false;
        this.credentials = { email: '', password: '' };
    }
    LoginFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.activatedRoute.queryParams.subscribe(function (param) {
            _this.brandNew = param['brandNew'];
            _this.credentials.email = param['email'];
        });
    };
    LoginFormComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    LoginFormComponent.prototype.login = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        if (!valid) {
            return;
        }
        this.submitted = true;
        this.isRequesting = true;
        this.errors = '';
        this.loginService.login(value.email, value.password)
            .subscribe(function (result) {
            if (result) {
                localStorage.setItem("data", result);
                _this.router.navigate(['/book']);
            }
            else {
                _this.router.navigate(['/login']);
            }
        }, function (error) { return _this.errors = error; });
    };
    LoginFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-form',
            template: __webpack_require__(/*! ./login-form.component.html */ "./src/app/components/login-form/login-form.component.html"),
            styles: [__webpack_require__(/*! ./login-form.component.scss */ "./src/app/components/login-form/login-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_identity_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"], _services_identity_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], LoginFormComponent);
    return LoginFormComponent;
}());



/***/ }),

/***/ "./src/app/components/magazine/magazine.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/magazine/magazine.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kendo-grid [data]=\"magazines.magazines\"\r\n            [height]=\"533\"\r\n            [pageSize]=\"gridState.take\" [skip]=\"gridState.skip\" [sort]=\"gridState.sort\"\r\n            [pageable]=\"true\" [sortable]=\"true\"\r\n            (dataStateChange)=\"onStateChange($event)\"\r\n            (edit)=\"editHandler($event)\" (cancel)=\"cancelHandler($event)\"\r\n            (save)=\"saveHandler($event)\" (remove)=\"removeHandler($event)\"\r\n            (add)=\"addHandler($event)\"\r\n            [navigable]=\"true\">\r\n  <ng-container *ngIf=\"admin\">\r\n    <ng-template kendoGridToolbarTemplate>\r\n      <button kendoGridAddCommand>Add new</button>\r\n    </ng-template>\r\n  </ng-container>\r\n  <kendo-grid-column field=\"name\" title=\"Name\"></kendo-grid-column>\r\n  <kendo-grid-column field=\"number\" title=\"Number\"></kendo-grid-column>\r\n  <kendo-grid-column field=\"yearOfPublication\" title=\"Year Of Publication\"></kendo-grid-column>\r\n  <ng-container *ngIf=\"admin\">\r\n    <kendo-grid-command-column title=\"command\" width=\"220\">\r\n      <ng-template kendoGridCellTemplate let-isNew=\"isNew\">\r\n        <button kendoGridEditCommand [primary]=\"true\">Edit</button>\r\n        <button kendoGridRemoveCommand>Remove</button>\r\n        <button kendoGridSaveCommand [disabled]=\"formGroup?.invalid\">{{ isNew ? 'Add' : 'Update' }}</button>\r\n        <button kendoGridCancelCommand>{{ isNew ? 'Discard changes' : 'Cancel' }}</button>\r\n      </ng-template>\r\n    </kendo-grid-command-column>\r\n  </ng-container>\r\n</kendo-grid>\r\n"

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_magazine_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/magazine.service */ "./src/app/services/magazine.service.ts");
/* harmony import */ var _models_magazine_GetAllMagazinesViewModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/magazine/GetAllMagazinesViewModel */ "./src/app/models/magazine/GetAllMagazinesViewModel.ts");
/* harmony import */ var _services_identity_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/identity/user.service */ "./src/app/services/identity/user.service.ts");
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
    function MagazineComponent(dataService, userService) {
        this.dataService = dataService;
        this.userService = userService;
        this.gridState = {
            sort: [],
            skip: 0,
            take: 10
        };
        this.magazines = new _models_magazine_GetAllMagazinesViewModel__WEBPACK_IMPORTED_MODULE_3__["GetAllMagazinesViewModel"]();
    }
    MagazineComponent.prototype.ngOnInit = function () {
        this.loadData();
        this.admin = this.userService.getIsAdmin();
    };
    MagazineComponent.prototype.loadData = function () {
        var _this = this;
        this.dataService.get().subscribe(function (data) { return _this.magazines = data; });
    };
    MagazineComponent.prototype.addHandler = function (_a) {
        var sender = _a.sender;
        this.closeEditor(sender);
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'id': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0),
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'yearOfPublication': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]{4}')])),
            'number': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]{1,3}')])),
        });
        sender.addRow(this.formGroup);
    };
    MagazineComponent.prototype.editHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex, dataItem = _a.dataItem;
        this.closeEditor(sender);
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'id': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](dataItem.id),
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](dataItem.name, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'yearOfPublication': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](dataItem.yearOfPublication, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]{4}')])),
            'number': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](dataItem.number, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]{1,3}')])),
        });
        this.editedRowIndex = rowIndex;
        sender.editRow(rowIndex, this.formGroup);
    };
    MagazineComponent.prototype.cancelHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex;
        this.closeEditor(sender, rowIndex);
    };
    MagazineComponent.prototype.saveHandler = function (_a) {
        var _this = this;
        var sender = _a.sender, rowIndex = _a.rowIndex, formGroup = _a.formGroup, isNew = _a.isNew;
        if (isNew) {
            var product = formGroup.value;
            this.dataService.create(product)
                .subscribe(function () { return _this.loadData(); });
        }
        if (!isNew) {
            var product = formGroup.value;
            this.dataService.update(product)
                .subscribe(function () { return _this.loadData(); });
        }
        sender.closeRow(rowIndex);
    };
    MagazineComponent.prototype.removeHandler = function (_a) {
        var _this = this;
        var dataItem = _a.dataItem;
        this.dataService.delete(dataItem.id)
            .subscribe(function () { return _this.loadData(); });
    };
    MagazineComponent.prototype.closeEditor = function (grid, rowIndex) {
        if (rowIndex === void 0) { rowIndex = this.editedRowIndex; }
        grid.closeRow(rowIndex);
        this.editedRowIndex = undefined;
        this.formGroup = undefined;
    };
    MagazineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'magazine',
            template: __webpack_require__(/*! ./magazine.component.html */ "./src/app/components/magazine/magazine.component.html"),
            providers: [_services_magazine_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _services_identity_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]]
        }),
        __metadata("design:paramtypes", [_services_magazine_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _services_identity_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], MagazineComponent);
    return MagazineComponent;
}());



/***/ }),

/***/ "./src/app/components/navmenu/navmenu.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/navmenu/navmenu.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='main-nav'>\r\n  <div class='navbar navbar-inverse'>\r\n    <div class='navbar-header'>\r\n      <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>\r\n        <span class='sr-only'>Toggle navigation</span>\r\n        <span class='icon-bar'></span>\r\n        <span class='icon-bar'></span>\r\n        <span class='icon-bar'></span>\r\n      </button>\r\n      <a class='navbar-brand' [routerLink]=\"['/home']\">Library.WEB</a>\r\n    </div>\r\n    <div class='clearfix'></div>\r\n    <div class='navbar-collapse collapse'>\r\n      <ul class='nav navbar-nav'>\r\n        <li [routerLinkActive]=\"['link-active']\">\r\n          <a [routerLink]=\"['/book']\">\r\n            <span class='glyphicon glyphicon-education'></span> Books\r\n          </a>\r\n        </li>\r\n        <li [routerLinkActive]=\"['link-active']\">\r\n          <a [routerLink]=\"['/magazine']\">\r\n            <span class='glyphicon glyphicon-education'></span> Magazines\r\n          </a>\r\n        </li>\r\n        <li [routerLinkActive]=\"['link-active']\">\r\n          <a [routerLink]=\"['/brochure']\">\r\n            <span class='glyphicon glyphicon-education'></span> Brochures\r\n          </a>\r\n        </li>\r\n        <li [routerLinkActive]=\"['link-active']\">\r\n          <a [routerLink]=\"['/author']\">\r\n            <span class='glyphicon glyphicon-education'></span> Authors\r\n          </a>\r\n        </li>\r\n        <li [routerLinkActive]=\"['link-active']\">\r\n          <a [routerLink]=\"['/publicationHouse']\">\r\n            <span class='glyphicon glyphicon-education'></span> PublicationHouses\r\n          </a>\r\n        </li>\r\n        <li [routerLinkActive]=\"['link-active']\">\r\n          <a [routerLink]=\"['/user']\">\r\n            <span class='glyphicon glyphicon-king'></span> User\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/navmenu/navmenu.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/navmenu/navmenu.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li .glyphicon {\n  margin-right: 10px; }\n\nli.link-active a,\nli.link-active a:hover,\nli.link-active a:focus {\n  background-color: #4189C7;\n  color: white; }\n\n.main-nav {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1; }\n\n@media (min-width: 768px) {\n  .main-nav {\n    height: 100%;\n    width: calc(25% - 20px); }\n  .navbar {\n    border-radius: 0px;\n    border-width: 0px;\n    height: 100%; }\n  .navbar-header {\n    float: none; }\n  .navbar-collapse {\n    border-top: 1px solid #444;\n    padding: 0px; }\n  .navbar ul {\n    float: none; }\n  .navbar li {\n    float: none;\n    font-size: 15px;\n    margin: 6px; }\n  .navbar li a {\n    padding: 10px 16px;\n    border-radius: 4px; }\n  .navbar a {\n    width: 100%;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis; } }\n"

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
            styles: [__webpack_require__(/*! ./navmenu.component.scss */ "./src/app/components/navmenu/navmenu.component.scss")]
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

module.exports = "<kendo-grid [data]=\"publicationHouses.publicationHouses\"\r\n            [height]=\"533\"\r\n            [pageSize]=\"gridState.take\" [skip]=\"gridState.skip\" [sort]=\"gridState.sort\"\r\n            [pageable]=\"true\" [sortable]=\"true\"\r\n            (dataStateChange)=\"onStateChange($event)\"\r\n            (edit)=\"editHandler($event)\" (cancel)=\"cancelHandler($event)\"\r\n            (save)=\"saveHandler($event)\" (remove)=\"removeHandler($event)\"\r\n            (add)=\"addHandler($event)\"\r\n            [navigable]=\"true\">\r\n  <ng-container *ngIf=\"admin\">\r\n    <ng-template kendoGridToolbarTemplate>\r\n      <button kendoGridAddCommand>Add new</button>\r\n    </ng-template>\r\n  </ng-container>\r\n  <kendo-grid-column field=\"name\" title=\"Name\"></kendo-grid-column>\r\n  <kendo-grid-column field=\"adress\" title=\"Adress\"></kendo-grid-column>\r\n  <ng-container *ngIf=\"admin\">\r\n    <kendo-grid-command-column title=\"command\" width=\"220\">\r\n      <ng-template kendoGridCellTemplate let-isNew=\"isNew\">\r\n        <button kendoGridEditCommand [primary]=\"true\">Edit</button>\r\n        <button kendoGridRemoveCommand>Remove</button>\r\n        <button kendoGridSaveCommand [disabled]=\"formGroup?.invalid\">{{ isNew ? 'Add' : 'Update' }}</button>\r\n        <button kendoGridCancelCommand>{{ isNew ? 'Discard changes' : 'Cancel' }}</button>\r\n      </ng-template>\r\n    </kendo-grid-command-column>\r\n  </ng-container>\r\n</kendo-grid>\r\n"

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_publicationHouse_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/publicationHouse.service */ "./src/app/services/publicationHouse.service.ts");
/* harmony import */ var _models_publicationHouse_GetAllPublicationHousesViewModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/publicationHouse/GetAllPublicationHousesViewModel */ "./src/app/models/publicationHouse/GetAllPublicationHousesViewModel.ts");
/* harmony import */ var _services_identity_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/identity/user.service */ "./src/app/services/identity/user.service.ts");
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
    function PublicationHouseComponent(dataService, userService) {
        this.dataService = dataService;
        this.userService = userService;
        this.gridState = {
            sort: [],
            skip: 0,
            take: 10
        };
        this.publicationHouses = new _models_publicationHouse_GetAllPublicationHousesViewModel__WEBPACK_IMPORTED_MODULE_3__["GetAllPublicationHousesViewModel"]();
    }
    PublicationHouseComponent.prototype.ngOnInit = function () {
        this.loadData();
        this.admin = this.userService.getIsAdmin();
    };
    PublicationHouseComponent.prototype.loadData = function () {
        var _this = this;
        this.dataService.get().subscribe(function (data) { return _this.publicationHouses = data; });
    };
    PublicationHouseComponent.prototype.addHandler = function (_a) {
        var sender = _a.sender;
        this.closeEditor(sender);
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'id': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0),
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'adress': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        sender.addRow(this.formGroup);
    };
    PublicationHouseComponent.prototype.editHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex, dataItem = _a.dataItem;
        this.closeEditor(sender);
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'id': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](dataItem.id),
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](dataItem.name, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'adress': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](dataItem.adress, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        this.editedRowIndex = rowIndex;
        sender.editRow(rowIndex, this.formGroup);
    };
    PublicationHouseComponent.prototype.cancelHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex;
        this.closeEditor(sender, rowIndex);
    };
    PublicationHouseComponent.prototype.saveHandler = function (_a) {
        var _this = this;
        var sender = _a.sender, rowIndex = _a.rowIndex, formGroup = _a.formGroup, isNew = _a.isNew;
        if (isNew) {
            var product = formGroup.value;
            this.dataService.create(product)
                .subscribe(function () { return _this.loadData(); });
        }
        if (!isNew) {
            var product = formGroup.value;
            this.dataService.update(product)
                .subscribe(function () { return _this.loadData(); });
        }
        sender.closeRow(rowIndex);
    };
    PublicationHouseComponent.prototype.removeHandler = function (_a) {
        var _this = this;
        var dataItem = _a.dataItem;
        this.dataService.delete(dataItem.id)
            .subscribe(function () { return _this.loadData(); });
    };
    PublicationHouseComponent.prototype.closeEditor = function (grid, rowIndex) {
        if (rowIndex === void 0) { rowIndex = this.editedRowIndex; }
        grid.closeRow(rowIndex);
        this.editedRowIndex = undefined;
        this.formGroup = undefined;
    };
    PublicationHouseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'publicationHouse',
            template: __webpack_require__(/*! ./publicationHouse.component.html */ "./src/app/components/publicationHouse/publicationHouse.component.html"),
            providers: [_services_publicationHouse_service__WEBPACK_IMPORTED_MODULE_2__["PublicationHouseService"], _services_identity_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]]
        }),
        __metadata("design:paramtypes", [_services_publicationHouse_service__WEBPACK_IMPORTED_MODULE_2__["PublicationHouseService"], _services_identity_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], PublicationHouseComponent);
    return PublicationHouseComponent;
}());



/***/ }),

/***/ "./src/app/components/registration-form/registration-form.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/registration-form/registration-form.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-6\">\r\n    <h2>Please enter your information</h2>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-md-6\">\r\n    <form #f=\"ngForm\" novalidate (ngSubmit)=\"registerUser(f)\">\r\n      <div class=\"form-group\">\r\n        <label for=\"first-name\">First name</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"first-name\" placeholder=\"First name\" name=\"firstName\" tmFocus ngModel>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"last-name\">Last name</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"last-name\" placeholder=\"Last name\" name=\"lastName\" ngModel>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"email\">Email</label>\r\n        <input id=\"email\" type=\"text\" required name=\"email\" validateEmail class=\"form-control\" placeholder=\"Email\" ngModel #email=\"ngModel\">\r\n        <small [hidden]=\"email.valid || (email.pristine && !submitted)\" class=\"text-danger\">Please enter a valid email</small>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"password\">Password</label>\r\n        <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" placeholder=\"Password\" ngModel>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"f.invalid || isRequesting\">Sign Up</button>\r\n      </div>\r\n\r\n      <div *ngIf=\"errors\" class=\"alert alert-danger\" role=\"alert\">\r\n        <strong>Oops!</strong> {{errors}}\r\n      </div>\r\n\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/registration-form/registration-form.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/registration-form/registration-form.component.ts ***!
  \*****************************************************************************/
/*! exports provided: RegistrationFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationFormComponent", function() { return RegistrationFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_identity_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/identity/login.service */ "./src/app/services/identity/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegistrationFormComponent = /** @class */ (function () {
    function RegistrationFormComponent(router, loginService) {
        this.router = router;
        this.loginService = loginService;
        this.submitted = false;
    }
    RegistrationFormComponent.prototype.ngOnInit = function () {
    };
    RegistrationFormComponent.prototype.registerUser = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        if (!valid) {
            return;
        }
        this.submitted = true;
        this.isRequesting = true;
        this.errors = '';
        this.loginService.register(value.email, value.password, value.firstName, value.lastName)
            .finally(function () { return _this.isRequesting = false; })
            .subscribe(function (result) {
            if (result) {
                _this.router.navigate(['/login'], { queryParams: { brandNew: true, email: value.email } });
            }
        }, function (errors) { return _this.errors = errors; });
    };
    RegistrationFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registration-form',
            template: __webpack_require__(/*! ./registration-form.component.html */ "./src/app/components/registration-form/registration-form.component.html"),
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_identity_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], RegistrationFormComponent);
    return RegistrationFormComponent;
}());



/***/ }),

/***/ "./src/app/components/user/user.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/user/user.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\r\n  <nav class=\"navbar navbar-expand-md navbar-dark fixed-top bg-dark\">\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\r\n\r\n      <ul *ngIf=\"status\" class=\"nav navbar-nav\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" (click)=\"logout()\" routerLink=\"/user\">Logoff</a>\r\n        </li>\r\n      </ul>\r\n\r\n      <ul *ngIf=\"!status\" class=\"nav navbar-nav\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/register\">Email signup</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/login\">Email login</a>\r\n        </li>\r\n      </ul>\r\n\r\n    </div>\r\n  </nav>\r\n</header>\r\n<div class=\"row\">\r\n  <div class=\"col-md-6 col-sm-3\">\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/user/user.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/user/user.component.ts ***!
  \***************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_identity_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/identity/user.service */ "./src/app/services/identity/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserComponent = /** @class */ (function () {
    function UserComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    UserComponent.prototype.logout = function () {
        this.userService.logout();
        this.router.navigate(['/login']);
    };
    UserComponent.prototype.ngOnInit = function () {
        this.status = this.userService.getIsLoggedIn();
    };
    UserComponent.prototype.ngOnDestroy = function () {
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/components/user/user.component.html"),
            providers: [_services_identity_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]]
        }),
        __metadata("design:paramtypes", [_services_identity_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/models/author/GetAllAuthorsViewModel.ts":
/*!*********************************************************!*\
  !*** ./src/app/models/author/GetAllAuthorsViewModel.ts ***!
  \*********************************************************/
/*! exports provided: GetAllAuthorsViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAllAuthorsViewModel", function() { return GetAllAuthorsViewModel; });
var GetAllAuthorsViewModel = /** @class */ (function () {
    function GetAllAuthorsViewModel() {
        this.authors = new Array();
    }
    return GetAllAuthorsViewModel;
}());



/***/ }),

/***/ "./src/app/models/book/GetAllBooksViewModel.ts":
/*!*****************************************************!*\
  !*** ./src/app/models/book/GetAllBooksViewModel.ts ***!
  \*****************************************************/
/*! exports provided: GetAllBooksViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAllBooksViewModel", function() { return GetAllBooksViewModel; });
var GetAllBooksViewModel = /** @class */ (function () {
    function GetAllBooksViewModel() {
        this.books = new Array();
    }
    return GetAllBooksViewModel;
}());



/***/ }),

/***/ "./src/app/models/brochure/GetAllBrochuresViewModel.ts":
/*!*************************************************************!*\
  !*** ./src/app/models/brochure/GetAllBrochuresViewModel.ts ***!
  \*************************************************************/
/*! exports provided: GetAllBrochuresViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAllBrochuresViewModel", function() { return GetAllBrochuresViewModel; });
var GetAllBrochuresViewModel = /** @class */ (function () {
    function GetAllBrochuresViewModel() {
        this.brochures = new Array();
    }
    return GetAllBrochuresViewModel;
}());



/***/ }),

/***/ "./src/app/models/identity/user.ts":
/*!*****************************************!*\
  !*** ./src/app/models/identity/user.ts ***!
  \*****************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(userName, password) {
        this.userName = userName;
        this.password = password;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/models/identity/userRegistration.ts":
/*!*****************************************************!*\
  !*** ./src/app/models/identity/userRegistration.ts ***!
  \*****************************************************/
/*! exports provided: UserRegistration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegistration", function() { return UserRegistration; });
var UserRegistration = /** @class */ (function () {
    function UserRegistration(email, password, firstName, lastName) {
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return UserRegistration;
}());



/***/ }),

/***/ "./src/app/models/magazine/GetAllMagazinesViewModel.ts":
/*!*************************************************************!*\
  !*** ./src/app/models/magazine/GetAllMagazinesViewModel.ts ***!
  \*************************************************************/
/*! exports provided: GetAllMagazinesViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAllMagazinesViewModel", function() { return GetAllMagazinesViewModel; });
var GetAllMagazinesViewModel = /** @class */ (function () {
    function GetAllMagazinesViewModel() {
        this.magazines = new Array();
    }
    return GetAllMagazinesViewModel;
}());



/***/ }),

/***/ "./src/app/models/publicationHouse/GetAllPublicationHousesViewModel.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/models/publicationHouse/GetAllPublicationHousesViewModel.ts ***!
  \*****************************************************************************/
/*! exports provided: GetAllPublicationHousesViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAllPublicationHousesViewModel", function() { return GetAllPublicationHousesViewModel; });
var GetAllPublicationHousesViewModel = /** @class */ (function () {
    function GetAllPublicationHousesViewModel() {
        this.publicationHouses = new Array();
    }
    return GetAllPublicationHousesViewModel;
}());



/***/ }),

/***/ "./src/app/services/author.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/author.service.ts ***!
  \********************************************/
/*! exports provided: AuthorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorService", function() { return AuthorService; });
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


var AuthorService = /** @class */ (function () {
    function AuthorService(http) {
        this.http = http;
        this.url = "/api/Author";
    }
    AuthorService.prototype.get = function () {
        return this.http.get(this.url);
    };
    AuthorService.prototype.create = function (item) {
        return this.http.post(this.url, item);
    };
    AuthorService.prototype.update = function (item) {
        return this.http.put(this.url, item);
    };
    AuthorService.prototype.delete = function (id) {
        return this.http.delete(this.url + "/" + id);
    };
    AuthorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthorService);
    return AuthorService;
}());



/***/ }),

/***/ "./src/app/services/book.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/book.service.ts ***!
  \******************************************/
/*! exports provided: BookService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookService", function() { return BookService; });
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


var BookService = /** @class */ (function () {
    function BookService(http) {
        this.http = http;
        this.url = "/api/Book";
    }
    BookService.prototype.get = function () {
        return this.http.get(this.url);
    };
    BookService.prototype.create = function (item) {
        return this.http.post(this.url, item);
    };
    BookService.prototype.update = function (item) {
        return this.http.put(this.url, item);
    };
    BookService.prototype.delete = function (id) {
        return this.http.delete(this.url + "/" + id);
    };
    BookService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BookService);
    return BookService;
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
        this.url = "/api/Brochure";
    }
    DataService.prototype.get = function () {
        return this.http.get(this.url);
    };
    DataService.prototype.create = function (item) {
        return this.http.post(this.url, item);
    };
    DataService.prototype.update = function (item) {
        return this.http.put(this.url, item);
    };
    DataService.prototype.delete = function (id) {
        return this.http.delete(this.url + "/" + id);
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/services/identity/base.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/identity/base.service.ts ***!
  \***************************************************/
/*! exports provided: BaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseService", function() { return BaseService; });
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");

var BaseService = /** @class */ (function () {
    function BaseService() {
    }
    BaseService.prototype.handleError = function (error) {
        var applicationError = error.headers.get('Application-Error');
        if (applicationError) {
            return rxjs_Rx__WEBPACK_IMPORTED_MODULE_0__["Observable"].throw(applicationError);
        }
        var modelStateErrors = '';
        var serverError = error.json();
        if (!serverError.type) {
            for (var key in serverError) {
                if (serverError[key]) {
                    modelStateErrors += serverError[key] + '\n';
                }
            }
        }
        modelStateErrors = modelStateErrors = '' ? undefined : modelStateErrors;
        return rxjs_Rx__WEBPACK_IMPORTED_MODULE_0__["Observable"].throw(modelStateErrors || 'Server error');
    };
    return BaseService;
}());



/***/ }),

/***/ "./src/app/services/identity/login.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/identity/login.service.ts ***!
  \****************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_identity_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/identity/user */ "./src/app/models/identity/user.ts");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base.service */ "./src/app/services/identity/base.service.ts");
/* harmony import */ var _models_identity_userRegistration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/identity/userRegistration */ "./src/app/models/identity/userRegistration.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginService = /** @class */ (function (_super) {
    __extends(LoginService, _super);
    function LoginService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        return _this;
    }
    LoginService.prototype.register = function (email, password, firstName, lastName) {
        var user = new _models_identity_userRegistration__WEBPACK_IMPORTED_MODULE_4__["UserRegistration"](email, password, firstName, lastName);
        return this.http.post('api/Account/Register', user)
            .map(function (res) { return true; })
            .catch(this.handleError);
    };
    LoginService.prototype.login = function (userName, password) {
        var user = new _models_identity_user__WEBPACK_IMPORTED_MODULE_2__["User"](userName, password);
        return this.http.post('api/Account/Login', user, { responseType: 'text' })
            .catch(this.handleError);
    };
    LoginService.prototype.logout = function () {
        localStorage.removeItem("data");
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LoginService);
    return LoginService;
}(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/services/identity/user.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/identity/user.service.ts ***!
  \***************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.service */ "./src/app/services/identity/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(loginService) {
        this.loginService = loginService;
        this.isLoggedIn = false;
        this.isAdmin = false;
        this.isLoggedIn = !!localStorage.getItem("data");
        this.getIsAdminFromLocalStorage();
    }
    UserService.prototype.logout = function () {
        this.loginService.logout();
        this.isLoggedIn = false;
    };
    UserService.prototype.getIsLoggedIn = function () {
        return this.isLoggedIn;
    };
    UserService.prototype.getIsAdmin = function () {
        return this.isAdmin;
    };
    UserService.prototype.changeRole = function (role) {
        this.isAdmin = role;
    };
    UserService.prototype.getIsAdminFromLocalStorage = function () {
        if (localStorage.getItem("data")) {
            this.changeRole(!!(JSON.parse(localStorage.getItem("data")).role == "admin"));
        }
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]])
    ], UserService);
    return UserService;
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
        this.url = "/api/Magazine";
    }
    DataService.prototype.get = function () {
        return this.http.get(this.url);
    };
    DataService.prototype.create = function (item) {
        return this.http.post(this.url, item);
    };
    DataService.prototype.update = function (item) {
        return this.http.put(this.url, item);
    };
    DataService.prototype.delete = function (id) {
        return this.http.delete(this.url + "/" + id);
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
/*! exports provided: PublicationHouseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicationHouseService", function() { return PublicationHouseService; });
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


var PublicationHouseService = /** @class */ (function () {
    function PublicationHouseService(http) {
        this.http = http;
        this.url = "/api/PublicationHouse";
    }
    PublicationHouseService.prototype.get = function () {
        return this.http.get(this.url);
    };
    PublicationHouseService.prototype.create = function (item) {
        return this.http.post(this.url, item);
    };
    PublicationHouseService.prototype.update = function (item) {
        return this.http.put(this.url, item);
    };
    PublicationHouseService.prototype.delete = function (id) {
        return this.http.delete(this.url + "/" + id);
    };
    PublicationHouseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PublicationHouseService);
    return PublicationHouseService;
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