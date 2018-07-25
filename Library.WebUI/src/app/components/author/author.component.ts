import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthorService } from '../../services/author.service';
import { GetAuthorListViewModel } from '../../models/author/get.author-list.view.model';
import { CreateAuthorViewModel } from '../../models/author/сreate.author.view.model';
import { UpdateAuthorViewModel } from '../../models/author/update.author.view.model';

import { GridDataResult } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';
import { UserService } from '../../services/authentication/user.service';

@Component({
    selector: 'author',
    templateUrl: './author.component.html',
    providers: [AuthorService, UserService]
})

export class AuthorComponent implements OnInit {

    public authors: GetAuthorListViewModel;
    public gridState: State = {
        sort: [],
        skip: 0,
        take: 10
    };
    public formGroup: FormGroup;
    private editedRowIndex: number;
    private admin: boolean;

    constructor(private dataService: AuthorService, private userService: UserService) {
        this.authors = new GetAuthorListViewModel();
    }

    public ngOnInit(): void {
        this.loadData();
        this.admin = this.userService.getIsAdmin();
    }

    private loadData() {
        this.dataService.get().subscribe(data => this.authors = data);
    }

    public addHandler({ sender }) {
        this.closeEditor(sender);

        this.formGroup = new FormGroup(
            {
                'id': new FormControl(0),
                'name': new FormControl('', Validators.required),
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
            const product: CreateAuthorViewModel = formGroup.value;
            this.dataService.create(product)
                .subscribe(() => this.loadData());
        }
        if (!isNew) {
            const product: UpdateAuthorViewModel = formGroup.value;
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
}
