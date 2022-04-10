import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {
  action="commande";
  init = true;
  show = true;
  collection = { count: 0, data: [] };
  data : any[] = [];
  constructor(private rest: ApiService) { }

  ngOnInit(): void {
    this.getCommande();
  }

  getCommande() {
    this.rest.get(this.action).subscribe(
      success => {
        console.log(success.data);
        this.data = success.data;
        this.collection.count = success.data.length;
        this.init = false;
      },
      error => console.log(error)

    )};
}
