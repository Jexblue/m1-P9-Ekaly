import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor() { }

  isNotLogged(){
    if(localStorage.getItem('session')==null){
      return true;
    }
    return false;
  }
  logout(){
    localStorage.removeItem('session');
  }
}
