import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private action = '/api/login'
  public user = { email: "", pwd: "", pwd2:"" }
  public router: Router;
  constructor(router: Router, private rest: ApiService, private http: HttpClient) {
    this.router = router;
   }

  ngOnInit(): void {
  }

  register(){
    this.router.navigate(['pages/']);
  }

}
