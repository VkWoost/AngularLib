import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { PublicationHouseService } from '../../services/publicationHouse.service';
import { CreatePublicationHouseViewModel } from '../../models/publicationHouse/create.publicationHouse.view.model';
import { UpdatePublicationHouseViewModel } from '../../models/publicationHouse/update.publicationHouse.view.model';
import { GetAllPublicationHousesViewModel } from '../../models/publicationHouse/get.all-publicationHouses.view.model';

import { GridDataResult } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';
import { UserService } from '../../services/identity/user.service';

@Component({
    selector: 'publicationHouse',
    templateUrl: './publicationHouse.component.html',
    providers: [PublicationHouseService, UserService]
})
export class PublicationHouseComponent implements OnInit {

    public publicationHouses: GetAllPublicationHousesViewModel;
    public gridState: State = {
        sort: [],
        skip: 0,
        take: 10
    };
    public formGroup: FormGroup;
    private editedRowIndex: number;
    private admin: boolean;

    constructor(private dataService: PublicationHouseService, private userService: UserService) {
        this.publicationHouses = new GetAllPublicationHousesViewModel();
    }

    public ngOnInit(): void {
        this.loadData();
        this.admin = this.userService.getIsAdmin();
    }

    private loadData() {
        this.dataService.get().subscribe(data => this.publicationHouses = data);
    }

    public addHandler({ sender }) {
        this.closeEditor(sender);

        this.formGroup = new FormGroup(
            {
                'id': new FormControl(0),
                'name': new FormControl('', Validators.required),
                'adress': new FormControl('', Validators.required)
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
                'adress': new FormControl(dataItem.adress, Validators.required)
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
            const product: CreatePublicationHouseViewModel = formGroup.value;
            this.dataService.create(product)
                .subscribe(() => this.loadData());
        }

        if (!isNew) {
            const product: UpdatePublicationHouseViewModel = formGroup.value;
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
