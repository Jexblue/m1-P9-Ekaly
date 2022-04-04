import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { PlatsComponent } from './plats/plats.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CardComponent } from './plats/card/card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ClientComponent,
    PlatsComponent,
    CardComponent,


  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,

  ]
})
export class ClientModule { }
