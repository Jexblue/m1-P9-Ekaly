import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor() { }

  isNotLogged() {
    if (localStorage.getItem('session') == null) {
      return true;
    }
    return false;
  }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('profil');
  }
  isLivreur() {
    if (localStorage.getItem("profil") == "624ee3b4720708c9e53a2603") {

      return true;
    } else {

      return false;
    }
  }
  isResto() {
    if (localStorage.getItem("profil") == "624ee3b4720708c9e53a2602") {

      return true;
    } else {

      return false;
    }
  }
  isAdmin() {
    if (localStorage.getItem("profil") == "624ee3b4720708c9e53a2604") {

      return true;
    } else {

      return false;
    }
  }
}
