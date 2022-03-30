import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlivrerComponent } from './alivrer/alivrer.component';
import { LivreurComponent } from './livreur.component';

const routes: Routes = [{ path: '', component: AlivrerComponent,
  children: [
  { path: 'alivrer', component: AlivrerComponent },


  ] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LivreurRoutingModule { }
