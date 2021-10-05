import {Injectable} from '@angular/core';
import {SessionStorageService} from "./session-storage.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user = this.sessionStorageService.getUser();
  private roles = this.user ? this.user.roles : [];
  private _isLoggedIn = !!this.user;

  constructor(private sessionStorageService: SessionStorageService) {
  }

  public isLoggedIn(): boolean {
    return this._isLoggedIn;
  }

  public getUserName(): string {
    return this.user ? this.user.username : '';
  }

  public getEmail(): string {
    return this.user ? this.user.email : '';
  }

  public isAdmin(): boolean {
    return this.hasRole('ROLE_ADMIN');
  }

  public isAdvertiser(): boolean {
    return this.hasRole('ROLE_ADVERTISER');
  }

  public isUser(): boolean {
    return this.hasRole('ROLE_USER');
  }

  public hasRole(role: string): boolean {
    if (!this.roles) {
      return false;
    }
    return this.roles.includes(role);
  }

}

