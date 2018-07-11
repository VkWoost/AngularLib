import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserRegistration } from '../../models/identity/interfaces/user.registration.interface';
import { UserService } from '../../services/identity/user.service';
import { LoginService } from '../../services/identity/login.service';

@Component({
    selector: 'app-registration-form',
    templateUrl: './registration-form.component.html',
})
export class RegistrationFormComponent implements OnInit {

    private errors: string;
    private isRequesting: boolean;
    private submitted: boolean = false;

    constructor(private router: Router, private loginService: LoginService) { }

    ngOnInit() {
    }

    public registerUser({ value, valid }: { value: UserRegistration, valid: boolean }) {
        if (!valid) {
            return;
        }

        this.submitted = true;
        this.isRequesting = true;
        this.errors = '';

        this.loginService.register(value.email, value.password, value.firstName, value.lastName)
            .finally(() => this.isRequesting = false)
            .subscribe(
                result => {
                    if (result) {
                        this.router.navigate(['/login'], { queryParams: { brandNew: true, email: value.email } });
                    }
                },
                errors => this.errors = errors);
        
    }
}
