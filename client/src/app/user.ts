import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users = ['Praveena', 'John', 'Sarah'];

  getUsers() {
    return this.users;
  }
}
