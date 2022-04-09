import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ChartsModule } from 'ng2-charts';
import { NgxPaginationModule } from 'ngx-pagination';
import { AdminGuard } from 'src/guard/adminGuard';
import { LivreurGuard } from 'src/guard/livreurGuard';
import { LoginGuard } from 'src/guard/loginGuard';
import { RestoGuard } from 'src/guard/restoGuard';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    ChartsModule,
    HttpClientModule


  ],
  providers: [LoginGuard, LivreurGuard, RestoGuard, AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
