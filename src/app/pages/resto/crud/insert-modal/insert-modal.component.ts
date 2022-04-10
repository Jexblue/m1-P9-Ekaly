import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-insert-modal',
  templateUrl: './insert-modal.component.html',
  styleUrls: ['./insert-modal.component.css']
})
export class InsertModalComponent implements OnInit {
  @Output() ajouterPanier = new EventEmitter
  action = "sakafo";
sakafo = {nomPlat:"",coutPlat:0}
  title:any;
  constructor(   public modalRef: BsModalRef, private rest: ApiService, private http: HttpClient) { }

  ngOnInit() {

  }

  insert(){
    this.rest.post(this.action, this.sakafo).subscribe(
      success => {
        console.log(success.data);
        this.ajouterPanier.emit("insertion reussi");
      },
      error => console.log(error)

    )};

}
