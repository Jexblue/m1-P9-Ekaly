import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
items :any[] = [];
  constructor(public modalRef: BsModalRef,private rest: ApiService) {
      this.items = this.rest.panier;
   }

  ngOnInit(): void {

  }


}
