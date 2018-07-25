import { Injectable } from '@angular/core';
import { LoginService } from './login.service';

@Injectable()
export class UserService {

    private isLoggedIn: boolean = false;
    private isAdmin: boolean = false;

    constructor(private loginService: LoginService) {
        this.isLoggedIn = !!localStorage.getItem("data");
        this.getIsAdminFromLocalStorage();
    }

    public logout() {
        this.loginService.logout();
        this.isLoggedIn = false;
    }

    public getIsLoggedIn() {
        return this.isLoggedIn;
    }

    public getIsAdmin() {
        return this.isAdmin;
    }

    public changeRole(role: boolean) {
        this.isAdmin = role;
    }

    public getIsAdminFromLocalStorage() {
        if (localStorage.getItem("data")) {
            this.changeRole(!!(JSON.parse(localStorage.getItem("data")).role == "admin"));
        }
    }
}
