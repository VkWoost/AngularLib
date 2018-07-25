import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/authentication/user.service';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

@Component({
    selector: 'user',
    templateUrl: './user.component.html',
    providers: [UserService]
})

export class UserComponent implements OnInit {
    status: boolean;

    constructor(private userService: UserService, private router: Router) {
    }

    logout() {
        this.userService.logout();
        this.router.navigate(['/login']);
    }

    ngOnInit() {
        this.status = this.userService.getIsLoggedIn();
    }

    ngOnDestroy() {
    }
}
