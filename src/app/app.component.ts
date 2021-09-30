import {Component, OnInit} from '@angular/core';
import {AuthService} from "./services/auth.service";
import {UserService} from "./services/user.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isLoggedIn: boolean = false;
  isAdmin: boolean =  false;
  isAdvertiser: boolean = false;

  public username: string = '';
  public token: string = '';

  constructor(private userService: UserService,
              private authService: AuthService){}

  ngOnInit() {
    this.isLoggedIn = this.userService.isLoggedIn();
    if (this.isLoggedIn) {
      this.isAdmin = this.userService.isAdmin();
      this.isAdvertiser = this.userService.isAdmin();
      this.username = this.userService.getUserName();
    }
  }

  signOut(): void {
    this.authService.signOut();
    window.location.reload();
  }
}
