import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-update-modal',
  templateUrl: './update-modal.component.html',
  styleUrls: ['./update-modal.component.css']
})
export class UpdateModalComponent implements OnInit {

  title:any;
  plat: {nom:string,prix:number }
  nom:string = "";
  prix: number =0;
  constructor(   public modalRef: BsModalRef) {
    this.plat = {nom:this.nom,prix:this.prix}
   }

  ngOnInit() {
  }


}
