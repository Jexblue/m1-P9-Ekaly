import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestoRoutingModule } from './resto-routing.module';
import { RestoComponent } from './resto.component';
import { CommandeComponent } from './commande/commande.component';
import { CrudComponent } from './crud/crud.component';
import { BeneficeComponent } from './benefice/benefice.component';


@NgModule({
  declarations: [
    RestoComponent,
    CommandeComponent,
    CrudComponent,
    BeneficeComponent
  ],
  imports: [
    CommonModule,
    RestoRoutingModule
  ]
})
export class RestoModule { }
