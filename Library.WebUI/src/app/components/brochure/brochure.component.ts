import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { DataService } from '../../services/brochure.service';
import { AllBrochures } from '../../models/brochure/allBrochures';
import { BrochureCreateView } from '../../models/brochure/brochureCreateView';
import { BrochureUpdateView } from '../../models/brochure/brochureUpdateView';

import { GridDataResult } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';

@Component({
  selector: 'brochure',
  templateUrl: './brochure.component.html',
  providers: [DataService]
})
export class BrochureComponent implements OnInit {

  public brochures: AllBrochures;
  public gridState: State = {
    sort: [],
    skip: 0,
    take: 10
  };
  public formGroup: FormGroup;
  private editedRowIndex: number;

  constructor(private dataService: DataService) {
    this.brochures = new AllBrochures();
  }

  public ngOnInit(): void {
    this.loadData();
  }

  private loadData() {
    this.dataService.get().subscribe(data => this.brochures = data);
  }

  public addHandler({ sender }) {
    this.closeEditor(sender);

    this.formGroup = new FormGroup(
      {
        'id': new FormControl(0),
        'name': new FormControl('', Validators.required),
        'typeOfCover': new FormControl('', Validators.required),
        'numberOfPages': new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[0-9]{1,3}')])),
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
        'typeOfCover': new FormControl(dataItem.typeOfCover, Validators.required),
        'numberOfPages': new FormControl(dataItem.numberOfPages, Validators.compose([Validators.required, Validators.pattern('^[0-9]{1,3}')])),
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
      const product: BrochureCreateView = formGroup.value;
      this.dataService.create(product)
        .subscribe(() => this.loadData());
    }
    if (!isNew) {
      const product: BrochureUpdateView = formGroup.value;
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
