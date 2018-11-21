import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './services/auth.service';
import { User } from './classes/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Social-Tech';
  currentUser: User;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
    this.authService.currentUser.subscribe(user => this.currentUser = user);
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
