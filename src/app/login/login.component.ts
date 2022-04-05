import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public router: Router;
  constructor(router: Router) {
    this.router = router;
   }

  ngOnInit(): void {
  }

  login(){
    localStorage.setItem("session","moi");
    this.router.navigate(['pages/']);
  }
}
