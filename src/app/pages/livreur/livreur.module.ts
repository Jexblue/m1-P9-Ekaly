import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivreurRoutingModule } from './livreur-routing.module';
import { LivreurComponent } from './livreur.component';
import { AlivrerComponent } from './alivrer/alivrer.component';


@NgModule({
  declarations: [
    LivreurComponent,
    AlivrerComponent
  ],
  imports: [
    CommonModule,
    LivreurRoutingModule
  ]
})
export class LivreurModule { }
