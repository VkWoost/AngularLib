import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { AuthorComponent } from './components/author/author.component';
import { MagazineComponent } from './components/magazine/magazine.component';
import { BrochureComponent } from './components/brochure/brochure.component';
import { PublicationHouseComponent } from './components/publicationHouse/publicationHouse.component';
import { BookComponent } from './components/book/book.component';

import { GridModule } from '@progress/kendo-angular-grid';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    AuthorComponent,
    MagazineComponent,
    BrochureComponent,
    PublicationHouseComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule
    .forRoot([
      { path: '', redirectTo: 'book', pathMatch: 'full' },
      { path: 'author', component: AuthorComponent },
      { path: "magazine", component: MagazineComponent },
      { path: 'brochure', component: BrochureComponent },
      { path: 'publicationHouse', component: PublicationHouseComponent },
      { path: 'book', component: BookComponent },
      { path: '**', redirectTo: 'book' }
      ])
    ,
    GridModule,
    DropDownsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap:[AppComponent]
})
export class AppModule { }
