import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../service/authentification.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  auth: AuthentificationService;
  constructor(service: AuthentificationService) {
      this.auth = service;
   }

  ngOnInit(): void {
  }

}
