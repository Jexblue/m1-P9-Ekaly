import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestoRoutingModule } from './resto-routing.module';
import { RestoComponent } from './resto.component';
import { CommandeComponent } from './commande/commande.component';
import { CrudComponent } from './crud/crud.component';
import { BeneficeComponent } from './benefice/benefice.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { InsertModalComponent } from './crud/insert-modal/insert-modal.component';
import { UpdateModalComponent } from './crud/update-modal/update-modal.component';
import { DeleteModalComponent } from './crud/delete-modal/delete-modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [
    RestoComponent,
    CommandeComponent,
    CrudComponent,
    BeneficeComponent,
    InsertModalComponent,
    UpdateModalComponent,
    DeleteModalComponent
  ],
  imports: [
    CommonModule,
    RestoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    ModalModule.forRoot()
  ]
})
export class RestoModule { }
