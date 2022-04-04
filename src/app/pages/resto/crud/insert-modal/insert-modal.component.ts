import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-insert-modal',
  templateUrl: './insert-modal.component.html',
  styleUrls: ['./insert-modal.component.css']
})
export class InsertModalComponent implements OnInit {

  title:any;
  constructor(   public modalRef: BsModalRef) { }

  ngOnInit() {
  }

}
