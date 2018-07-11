import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Credentials } from '../../models/identity/interfaces/credentials.interface';
import { UserService } from '../../services/identity/user.service';
import { Local } from 'protractor/built/driverProviders';
import { LoginService } from '../../services/identity/login.service';

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss']
})

export class LoginFormComponent implements OnInit, OnDestroy {

    private subscription: Subscription;

    private brandNew: boolean;
    private errors: string;
    private isRequesting: boolean;
    private submitted: boolean = false;
    private credentials: Credentials = { email: '', password: '' };

    constructor(private loginService: LoginService, private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        this.subscription = this.activatedRoute.queryParams.subscribe(
            (param: any) => {
                this.brandNew = param['brandNew'];
                this.credentials.email = param['email'];
            });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    public login({ value, valid }: { value: Credentials, valid: boolean }) {
        this.submitted = true;
        this.isRequesting = true;
        this.errors = '';
        if (valid) {
            this.loginService.login(value.email, value.password)
                .subscribe(
                    result => {
                        if (result) {
                            localStorage.setItem("data", result);
                            this.router.navigate(['/book']);
                        }
                        else {
                            this.router.navigate(['/login']);
                        }
                    },
                    error => this.errors = error);
        }
    }
}
