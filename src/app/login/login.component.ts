import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private action = '/api/login'
  public user = { email: "", pwd: "" }
  public router: Router;

  constructor(router: Router, private rest: ApiService, private http: HttpClient) {
    this.router = router;
  }

  ngOnInit(): void {
  }

  login() {
    /*this.rest.post(this.action, this.user).subscribe(
      (response) => {

        if (response.status == 200) {

          console.log(response.data)
          localStorage.setItem("token", response.token);
          localStorage.setItem("profil",response.data[0].idprofil);
          this.router.navigate(['pages/']);
        }
      })*/
      this.router.navigate(['pages/']);
  }

}
