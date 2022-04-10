import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ApiService } from 'src/app/service/api.service';
import { InsertModalComponent } from './insert-modal/insert-modal.component';
import { UpdateModalComponent } from './update-modal/update-modal.component';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  plat: {nomPlat:"",coutPlat:0 }
  action="sakafo";
  collection = { count: 0, data: [] };
  init = true;
  show = true;
  p=1;
  data : any[] = [];
  sakafo = {nomPlat:"",coutPlat:0}
    nbrperpage=5;
    total=18;
  //  modalRef: BsModalRef;
    checklist : any;
    checkedList:any;
    masterSelected:boolean;
    modalRef: BsModalRef;
  ngOnInit(): void {
    this.getdata()
  }

    constructor(private modalService: BsModalService, private rest: ApiService, private http: HttpClient)  {
      this.masterSelected = false;
      this.plat = {nomPlat:"",coutPlat:0 }
      /*this.checklist = [
        {id:1,name:'Allison Becker',prix:1, isSelected:false},
        {id:2,name:'Andrew Robertson',prix:26, isSelected:false},
        {id:3,name:'Virgil Vandijk',prix:4, isSelected:false},
        {id:4,name:'Joel Matip',prix:32, isSelected:false},
        {id:5,name:'Alexander Arnold',prix:66, isSelected:false},
        {id:6,name:'Fabinho',prix:2, isSelected:false},
        {id:7,name:'Jordan Henderson',prix:14, isSelected:false},
        {id:8,name:'Thiago Alcantara',prix:6, isSelected:false},
        {id:9,name:'Sadio Mane',prix:10, isSelected:false},
        {id:10,name:'Mohamed Salah',prix:11, isSelected:false},
        {id:11,name:'Diogo Jota',prix:20, isSelected:false},
        {id:12,name:'Keller',prix:42, isSelected:false},
        {id:13,name:'Ibrahima Konate',prix:5, isSelected:false},
        {id:14,name:'Joe Gomez',prix:12, isSelected:false},
        {id:15,name:'James Milner',prix:7, isSelected:false},
        {id:16,name:'Roberto Firmino',prix:9, isSelected:false},
        {id:17,name:'Divock Origi',prix:27, isSelected:false},
        {id:18,name:'Luis Diaz',prix:23, isSelected:false}
      ];*/
    }


    // Check All Checkbox Checked


    // Get List of Checked Items



    openModal(template: any) {
      this.modalRef = this.modalService.show(template,  {
        initialState: {

        }
      });
    }
    editModal(item:any, content: any){
      this.openModal(content);
      this.plat.nomPlat = item.nomPlat;
      this.plat.coutPlat = item.coutPlat;
      console.log(item);
   }
   confirmer(id: string) {
    if (confirm('valider la suppression')) {
     // this.deleteDevise(id)
    }
  }


  getdata() {
    this.rest.get(this.action).subscribe(
      success => {
        console.log(success.data);
        this.data = success.data;
        this.init = false;
        this.total = success.data.length
        this.show = false;
      },
      error => console.log(error)

    )};
    insert(){
      this.rest.post(this.action, this.sakafo).subscribe(
        success => {
          console.log(success.data);
          this.ngOnInit();
        },
        error => console.log(error)

      )};



}
