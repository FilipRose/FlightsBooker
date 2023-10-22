import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  currentUser?: User;

  login(user: User) {
    console.log(user.email);
    this.currentUser = user
  }
  
}

interface User {
email: string
}