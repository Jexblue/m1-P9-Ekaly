import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../service/authentification.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  auth: AuthentificationService;
  public router: Router;
  constructor(service: AuthentificationService, router: Router) {
    this.router = router;
    this.auth = service;
      //this.isNotlogged = this.auth.isNotLogged()
   }

  ngOnInit(): void {
  }
  logout(){
    this.auth.logout();
    this.router.navigate(['pages/']);
  }

}
