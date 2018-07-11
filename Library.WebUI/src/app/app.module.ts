import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 
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

import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { UserService } from './services/identity/user.service';
import { LoginFormComponent } from "./components/login-form/login-form.component";
import { UserComponent } from "./components/user/user.component";
import { AppHttpInterceptor } from "./AppHttpInterceptor";
import { LoginService } from "./services/identity/login.service";

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        AuthorComponent,
        MagazineComponent,
        BrochureComponent,
        PublicationHouseComponent,
        BookComponent,
        UserComponent,
        RegistrationFormComponent,
        LoginFormComponent,
        AppComponent
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
                { path: 'register', component: RegistrationFormComponent },
                { path: 'login', component: LoginFormComponent },
                { path: 'user', component: UserComponent },
                { path: '**', redirectTo: '' }
            ])
        ,
        GridModule,
        DropDownsModule,
        BrowserAnimationsModule
    ],
    providers: [
        LoginService,
        UserService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AppHttpInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
