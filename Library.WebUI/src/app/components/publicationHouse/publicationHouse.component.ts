import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { PublicationHouseService } from '../../services/publicationHouse.service';
import { AllPublicationHouses } from '../../models/publicationHouse/allPublicationHouses';
import { PublicationHouseCreateView } from '../../models/publicationHouse/publicationHouseCreateView';
import { PublicationHouseUpdateView } from '../../models/publicationHouse/publicationHouseUpdateView';

import { GridDataResult } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';

@Component({
    selector: 'publicationHouse',
    templateUrl: './publicationHouse.component.html',
    providers: [PublicationHouseService]
})
export class PublicationHouseComponent implements OnInit {
    
  public publicationHouses: AllPublicationHouses;
  public gridState: State = {
    sort: [],
    skip: 0,
    take: 10
  };
  public formGroup: FormGroup;
  private editedRowIndex: number;
  private admin;

  constructor(private dataService: PublicationHouseService) {
    this.publicationHouses = new AllPublicationHouses();
  }

  public ngOnInit(): void {
    this.loadData();
    this.admin = !!(localStorage.getItem("role") == "admin");
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
      const product: PublicationHouseCreateView = formGroup.value;
      this.dataService.create(product)
        .subscribe(() => this.loadData());
    }
    if (!isNew) {
      const product: PublicationHouseUpdateView = formGroup.value;
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
