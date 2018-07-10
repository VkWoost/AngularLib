import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Credentials } from '../../models/identity/interfaces/credentials.interface';
import { UserService } from '../../services/identity/user.service';
import { Local } from 'protractor/built/driverProviders';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})

export class LoginFormComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  brandNew: boolean;
  errors: string;
  isRequesting: boolean;
  submitted: boolean = false;
  credentials: Credentials = { email: '', password: '' };

  constructor(private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute) { }

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

  login({ value, valid }: { value: Credentials, valid: boolean }) {
    this.submitted = true;
    this.isRequesting = true;
    this.errors = '';
    if (valid) {
      this.userService.login(value.email, value.password)
        .subscribe(
        result => {
          if (result /*&& result.lenght > 0*/) {
            localStorage.setItem("loginData", JSON.parse(result).token);
            localStorage.setItem("role", JSON.parse(result).role);
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
