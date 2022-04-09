import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';




@NgModule({
  declarations: [
    PagesComponent,


  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ModalModule.forRoot()

  ]
})
export class PagesModule { }
