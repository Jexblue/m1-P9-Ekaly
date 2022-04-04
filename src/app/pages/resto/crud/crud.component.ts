import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { InsertModalComponent } from './insert-modal/insert-modal.component';
import { UpdateModalComponent } from './update-modal/update-modal.component';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  ngOnInit(): void {
  }
  p=2;
    nbrperpage=5;
    total=18;
  //  modalRef: BsModalRef;
    checklist : any;
    checkedList:any;
    masterSelected:boolean;
    modalRef: BsModalRef;
    constructor(private modalService: BsModalService)  {
      this.masterSelected = false;
      this.checklist = [
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
      ];
    }
    checkUncheckAll() {
      var currentpage = this.p;
      var indice = currentpage*this.nbrperpage-this.nbrperpage
      for (var i = 0; i < this.nbrperpage; i++) {
        this.checklist[indice].isSelected = this.masterSelected;
        indice++;
      }
      this.getCheckedItemList();
    }
    UncheckedAll(){
      this.masterSelected = false;
      for (var i = 0; i < this.checklist.length; i++) {
        this.checklist[i].isSelected = false;
      }
    }

    // Check All Checkbox Checked
    isAllSelected() {
      this.masterSelected = this.checklist.every(function(item:any) {
          return item.isSelected == true;
        })
      this.getCheckedItemList();
    }

    // Get List of Checked Items
    getCheckedItemList(){
      this.checkedList = [];
      for (var i = 0; i < this.checklist.length; i++) {
        if(this.checklist[i].isSelected)
        this.checkedList.push(this.checklist[i]);
      }
    }


    openModal() {
      this.modalRef = this.modalService.show(InsertModalComponent,  {
        initialState: {

        }
      });
    }
    editModal(item:any){
      this.modalRef = this.modalService.show(UpdateModalComponent,  {
        initialState: {

          plat: {nom:item.name, prix:item.prix}

        }
      });
   }
   confirmer(id: string) {
    if (confirm('valider la suppression')) {
     // this.deleteDevise(id)
    }
  }
  supprimerTous() {
    if (confirm('supprimer les élements sélectionner')) {
     // this.deleteDevise(id)
    }
  }

}
