import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/identity/user.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  providers: [UserService]
})

export class UserComponent implements OnInit {
  email: string;
  status: boolean;
  subscription: Subscription;

  constructor(private userService: UserService) {
  }

  logout() {
    this.userService.logout();
  }

  ngOnInit() {
    this.subscription = this.userService.authNavStatus$.subscribe(status => this.status = status);
    this.email = localStorage.getItem("loginData");
  }

  ngOnDestroy() {
    // prevent memory leak when component is destroyed
    this.subscription.unsubscribe();
  }
}
