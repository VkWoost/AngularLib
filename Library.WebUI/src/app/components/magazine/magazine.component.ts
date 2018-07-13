import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { DataService } from '../../services/magazine.service';
import { GetAllMagazinesViewModel } from '../../models/magazine/GetAllMagazinesViewModel';
import { CreateMagazineViewModel } from '../../models/magazine/CreateMagazineViewModel';
import { UpdateMagazineViewModel } from '../../models/magazine/UpdateMagazineViewModel';

import { GridDataResult } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';
import { UserService } from '../../services/identity/user.service';

@Component({
    selector: 'magazine',
    templateUrl: './magazine.component.html',
    providers: [DataService, UserService]
})

export class MagazineComponent implements OnInit {

    public magazines: GetAllMagazinesViewModel;
    public gridState: State = {
        sort: [],
        skip: 0,
        take: 10
    };
    public formGroup: FormGroup;
    private editedRowIndex: number;
    private admin: boolean;

    constructor(private dataService: DataService, private userService: UserService) {
        this.magazines = new GetAllMagazinesViewModel();
    }

    public ngOnInit(): void {
        this.loadData();
        this.admin = this.userService.getIsAdmin();
    }

    private loadData() {
        this.dataService.get().subscribe(data => this.magazines = data);
    }

    public addHandler({ sender }) {
        this.closeEditor(sender);

        this.formGroup = new FormGroup(
            {
                'id': new FormControl(0),
                'name': new FormControl('', Validators.required),
                'yearOfPublication': new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[0-9]{4}')])),
                'number': new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[0-9]{1,3}')])),
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
                'number': new FormControl(dataItem.number, Validators.compose([Validators.required, Validators.pattern('^[0-9]{1,3}')])),
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
            const product: CreateMagazineViewModel = formGroup.value;
            this.dataService.create(product)
                .subscribe(() => this.loadData());
        }

        if (!isNew) {
            const product: UpdateMagazineViewModel = formGroup.value;
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
