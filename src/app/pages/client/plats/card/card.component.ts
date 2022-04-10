import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() plat:any;
  @Output() ajouterPanier = new EventEmitter
  constructor(private rest: ApiService) { }

  ngOnInit(): void {
  }

  addToChart(item:any){
    this.rest.ajouterPanier(item);
    this.ajouterPanier.emit(item);
  }
}
