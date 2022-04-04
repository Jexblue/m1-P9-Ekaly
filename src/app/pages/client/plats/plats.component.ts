import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { configuartion } from 'src/app/service/configuration';

@Component({
  selector: 'app-plats',
  templateUrl: './plats.component.html',
  styleUrls: ['./plats.component.css']
})
export class PlatsComponent implements OnInit, AfterViewInit {
init = true;
show = true;

  ngOnInit(): void {
    this.getdata();
  }
  collection = { count: 10, data: [] };
  config = {
    id: 'custom',
    itemsPerPage: 5,
    currentPage: 1,
    totalItems: this.collection.count
  };
  data : number[] = [];
  public maxSize: number = 7;
  public directionLinks: boolean = true;
  public autoHide: boolean = false;
  public responsive: boolean = true;
  public labels: any = {
      previousLabel: '<--',
      nextLabel: '-->',
      screenReaderPaginationLabel: 'Pagination',
      screenReaderPageLabel: 'page',
      screenReaderCurrentLabel: `You're on page`
  };

  constructor(private rest: ApiService, private http: HttpClient) {

  }
  ngAfterViewInit(): void {

  }
  getdata() {
    this.rest.getData().subscribe(
        (object) => {
          this.data = object;
          this.init = false;
          this.show = false;
        })

  };





}
