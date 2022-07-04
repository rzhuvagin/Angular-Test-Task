import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of, throwError, timer } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IAuthQuery } from '../models/auth.model';


export enum AuthState {
  Unknown = 'Unknown',
  Authorized = 'Authorized',
  Unauthorized = 'Unauthorized'
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authSubject$: BehaviorSubject<AuthState> = new BehaviorSubject<AuthState>(AuthState.Unknown);

  public authState$ = this.authSubject$.asObservable();
  get authState() {
    return this.authSubject$.value;
  }

  private readonly tokenKey = 'ACCESS_TOKEN';

  constructor(
    private router: Router
  ) { }

  login(model: IAuthQuery): Observable<unknown> {
    return timer(400).pipe(
      tap(() => localStorage.setItem(this.tokenKey, `some-user-token ${model.login}`)),
    );
  }

  logout(): void {
    localStorage.clear();
    this.router.navigateByUrl('auth');
  }

  checkAuth(): AuthState {
    const token: string | null = localStorage.getItem(this.tokenKey);
    const state: AuthState = token === null ? AuthState.Unauthorized : AuthState.Authorized;
    if (state !== this.authState) {
      this.authSubject$.next(state);
    }
    return state;
  }

}