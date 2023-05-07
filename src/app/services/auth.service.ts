import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getAuthToken(): string {
    return localStorage.getItem('token') || '';
  }

  isLoggedIn(): boolean {
   return !!localStorage.getItem('token');   
  }
}
