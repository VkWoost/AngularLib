import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { AuthorComponent } from './components/author/author.component';
import { MagazineComponent } from './components/magazine/magazine.component';
import { BrochureComponent } from './components/brochure/brochure.component';
import { PublicationHouseComponent } from './components/publicationHouse/publicationHouse.component';
import { BookComponent } from './components/book/book.component';

import { GridModule } from '@progress/kendo-angular-grid';
import { AppComponent } from './app.component';

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
    HttpModule,
    FormsModule,
    RouterModule
    .forRoot([
      { path: '', redirectTo: 'book', pathMatch: 'full' },
      { path: 'author', component: AuthorComponent },
      { path: 'magazine', component: MagazineComponent },
      { path: 'brochure', component: BrochureComponent },
      { path: 'publicationHouse', component: PublicationHouseComponent },
      { path: 'book', component: BookComponent },
      { path: '**', redirectTo: 'book' }
      ])
    ,
    GridModule
  ],
  providers: [],
  bootstrap:[AppComponent]
})
export class AppModule { }
