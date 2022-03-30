import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestoRoutingModule } from './resto-routing.module';
import { RestoComponent } from './resto.component';
import { CommandeComponent } from './commande/commande.component';
import { CrudComponent } from './crud/crud.component';
import { BeneficeComponent } from './benefice/benefice.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    RestoComponent,
    CommandeComponent,
    CrudComponent,
    BeneficeComponent
  ],
  imports: [
    CommonModule,
    RestoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class RestoModule { }
