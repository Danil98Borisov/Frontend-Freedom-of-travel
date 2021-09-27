import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {TokenStorageService} from "./token-storage.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user = this.tokenStorageService.getUser();
  private roles = this.user ? this.user.roles : [];

  private isLogin = new BehaviorSubject<boolean>(false);

  constructor(private tokenStorageService: TokenStorageService) {
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

