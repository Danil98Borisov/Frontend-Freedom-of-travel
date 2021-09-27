import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from "../services/token-storage.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isLoggedIn: boolean = false;
  isUser: boolean = false;
  isAdmin: boolean =  false;
  isAdvertiser: boolean = false;

  public username: string = '';
  public token: string = '';
  private roles: string[] = [];

  constructor(private tokenStorageService: TokenStorageService){}

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    this.token = this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.isUser = this.roles.includes('ROLE_USER');
      this.isAdmin = this.roles.includes('ROLE_ADMIN');
      this.isAdvertiser = this.roles.includes('ROLE_ADVERTISER');

      this.username = user.username;

    }
  }

}
