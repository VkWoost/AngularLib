import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AuthorComponent } from '../../components/author/author.component';
import { MagazineComponent } from '../../components/magazine/magazine.component';
import { BrochureComponent } from '../../components/brochure/brochure.component';
import { PublicationHouseComponent } from '../../components/publicationHouse/publicationHouse.component';
import { BookComponent } from '../../components/book/book.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthorComponent,
    MagazineComponent,
    BrochureComponent,
    PublicationHouseComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    GridModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'book', pathMatch: 'full' },
      { path: 'author', component: AuthorComponent },
      { path: 'magazine', component: MagazineComponent },
      { path: 'brochure', component: BrochureComponent },
      { path: 'publicationHouse', component: PublicationHouseComponent },
      { path: 'book', component: BookComponent },
      { path: '**', redirectTo: 'book' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
