import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { BookService } from '../../services/book.service';
import { AuthorService } from '../../services/author.service';
import { PublicationHouseService } from '../../services/publicationHouse.service';

import { GetAllPublicationHousesViewModel } from '../../models/publicationHouse/get.all-publicationHouses.view.model';
import { GetAllAuthorsViewModel } from '../../models/author/get.all-authors.view.model';
import { CreateBookViewModel } from '../../models/book/create.book.view.model';
import { UpdateBookViewModel } from '../../models/book/update.book.view.model';
import { GetAllBooksViewModel } from '../../models/book/get.all-books.view.model';

import { GridDataResult } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { UserService } from '../../services/identity/user.service';

@Component({
    selector: 'book',
    templateUrl: './book.component.html',
    providers: [BookService, AuthorService, PublicationHouseService, UserService]
})
export class BookComponent implements OnInit {

    public books: GetAllBooksViewModel;
    public authors: GetAllAuthorsViewModel;
    public publicationHouses: GetAllPublicationHousesViewModel;
    public gridState: State = {
        sort: [],
        skip: 0,
        take: 10
    };
    public formGroup: FormGroup;
    private editedRowIndex: number;
    private admin: boolean;

    constructor(
        private dataService: BookService,
        private authorService: AuthorService,
        private publicationHouseSevice: PublicationHouseService,
        private userService: UserService
    )
    {
        this.books = new GetAllBooksViewModel();
        this.authors = new GetAllAuthorsViewModel();
        this.publicationHouses = new GetAllPublicationHousesViewModel();
    }

    public ngOnInit(): void {
        this.loadData();
        this.authorService.get().subscribe(data => this.authors = data);
        this.publicationHouseSevice.get().subscribe(data => this.publicationHouses = data);
        this.admin = this.userService.getIsAdmin();
    }

    private loadData() {
        this.dataService.get().subscribe(data => {
            this.books = data
        });
    }

    public addHandler({ sender }) {
        this.closeEditor(sender);

        this.formGroup = new FormGroup(
            {
                'id': new FormControl(0),
                'name': new FormControl('', Validators.required),
                'yearOfPublication': new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[0-9]{4}')])),
                'author': new FormControl(''),
                'publicationHouses': new FormControl('')
            }
        );

        sender.addRow(this.formGroup);
    }

    public editHandler({ sender, rowIndex, dataItem }) {
        this.closeEditor(sender);

        this.formGroup = new FormGroup(
            {
                'id': new FormControl(dataItem.id),
                'name': new FormControl(dataItem.name, Validators.required),
                'yearOfPublication': new FormControl(dataItem.yearOfPublication, Validators.compose([Validators.required, Validators.pattern('^[0-9]{4}')])),
                'author': new FormControl(dataItem.author),
                'publicationHouses': new FormControl(dataItem.publicationHouses)
            }
        );

        this.editedRowIndex = rowIndex;

        sender.editRow(rowIndex, this.formGroup);
    }

    public cancelHandler({ sender, rowIndex }) {
        this.closeEditor(sender, rowIndex);
    }

    public saveHandler({ sender, rowIndex, formGroup, isNew }) {
        if (isNew) {
            const product: CreateBookViewModel = formGroup.value;
            this.dataService.create(product)
                .subscribe(() => this.loadData());
        }
        if (!isNew) {
            const product: UpdateBookViewModel = formGroup.value;
            this.dataService.update(product)
                .subscribe(() => this.loadData());
        }
        sender.closeRow(rowIndex);
    }

    public removeHandler({ dataItem }) {
        this.dataService.delete(dataItem.id)
            .subscribe(() => this.loadData());
    }

    private closeEditor(grid, rowIndex = this.editedRowIndex) {
        grid.closeRow(rowIndex);
        this.editedRowIndex = undefined;
        this.formGroup = undefined;
    }

    private authorChange(value) {
        this.formGroup.get('author').setValue(value);
    }

    private publicationHousesChange(value: Array<any>) {
        this.formGroup.get('publicationHouses').setValue(value);
    }
}
