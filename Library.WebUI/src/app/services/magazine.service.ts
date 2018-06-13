import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AllMagazines } from '../models/magazine/allMagazines';
import { MagazineCreateView } from '../models/magazine/magazineCreateView';
import { MagazineUpdateView } from '../models/magazine/MagazineUpdateView';

@Injectable()
export class DataService {
  
  private url: string = "/api/Magazine";

  constructor(private http: HttpClient) { }

  public get() {
    return this.http.get<AllMagazines>(this.url);
  }
  public create(item: MagazineCreateView) {
    return this.http.post(this.url, item)
  }
  public update(item: MagazineUpdateView) {
    return this.http.put(this.url, item)
  }
  public delete(id?: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
