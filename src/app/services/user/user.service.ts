import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user;

  constructor() { 
    this.getUser();
  }
  setUser(user){
    localStorage.setItem('user', JSON.stringify(user));
    this.user = user;
  }
  getUser(){
    var userJson = localStorage.getItem('user');
    this.user = userJson != null ? JSON.parse(userJson) : null;
    return userJson != null ? JSON.parse(userJson) : null;
  }
  removeUser(){
    this.user = null;
    localStorage.removeItem('user');
  }
}
