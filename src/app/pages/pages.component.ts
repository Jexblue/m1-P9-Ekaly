import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ApiService } from '../service/api.service';
import { AuthentificationService } from '../service/authentification.service';
import { PanierComponent } from './client/panier/panier.component';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  auth: AuthentificationService;
  public router: Router;
  constructor(service: AuthentificationService, router: Router, public modalRef: BsModalRef, private modalService: BsModalService, private rest: ApiService) {
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
  showPanier(){
    this.modalRef = this.modalService.show(PanierComponent,  {
      initialState: {

       // plat: {nom:item.name, prix:item.prix}

      }
    });
  }
  ajouter(item:any){
    console.log(item)
    alert(item);

  }

}
