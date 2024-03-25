import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService, AuthState } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UnauthorizedGuard  {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const authState = this.authService.checkAuth();
    if (authState === AuthState.Authorized) {
      this.router.navigateByUrl('');
    }
    return authState === AuthState.Unauthorized;
  }
  
}
