import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor() { }

  isLogged(){
    if(localStorage.getItem('profil')==null){
      return false;
    }
    return true;
  }
}
