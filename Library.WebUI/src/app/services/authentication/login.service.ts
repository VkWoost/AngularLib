import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../../models/authentication/user";
import { BaseService } from "./base.service";
import { UserRegistration } from "../../models/authentication/user.registration";
import { Observable } from 'rxjs';
import { UserService } from "./user.service";


@Injectable()
export class LoginService extends BaseService {

    constructor(private http: HttpClient) {
        super();
    }

    public register(email: string, password: string, firstName: string, lastName: string) {
        let user = new UserRegistration()
        user.email = email;
        user.firstName = firstName;
        user.lastName = lastName;
        user.password = password;

        return this.http.post('api/Account/Register', user)
            .map(res => true)
            .catch(this.handleError);
    }

    public login(userName, password): Observable<any> {
        let user = new User();
        user.email = userName;
        user.password = password;
        
        return this.http.post('api/Account/Login', user, { responseType: 'text' })
            .catch(this.handleError);
    }

    public logout() {
        localStorage.removeItem("data");
    }
}
