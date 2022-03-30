import { Component, OnInit } from '@angular/core';

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
    constructor(/*private modalService: BsModalService*/) {
      this.masterSelected = false;
      this.checklist = [
        {id:1,name:'Allison Becker',numero:1, isSelected:false},
        {id:2,name:'Andrew Robertson',numero:26, isSelected:false},
        {id:3,name:'Virgil Vandijk',numero:4, isSelected:false},
        {id:4,name:'Joel Matip',numero:32, isSelected:false},
        {id:5,name:'Alexander Arnold',numero:66, isSelected:false},
        {id:6,name:'Fabinho',numero:2, isSelected:false},
        {id:7,name:'Jordan Henderson',numero:14, isSelected:false},
        {id:8,name:'Thiago Alcantara',numero:6, isSelected:false},
        {id:9,name:'Sadio Mane',numero:10, isSelected:false},
        {id:10,name:'Mohamed Salah',numero:11, isSelected:false},
        {id:11,name:'Diogo Jota',numero:20, isSelected:false},
        {id:12,name:'Keller',numero:42, isSelected:false},
        {id:13,name:'Ibrahima Konate',numero:5, isSelected:false},
        {id:14,name:'Joe Gomez',numero:12, isSelected:false},
        {id:15,name:'James Milner',numero:7, isSelected:false},
        {id:16,name:'Roberto Firmino',numero:9, isSelected:false},
        {id:17,name:'Divock Origi',numero:27, isSelected:false},
        {id:18,name:'Luis Diaz',numero:23, isSelected:false}
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
    }
    editModal(item:any){
   }

}
