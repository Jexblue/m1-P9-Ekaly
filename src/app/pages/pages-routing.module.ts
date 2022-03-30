import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';


const routes: Routes = [
  {
    path: '', component: PagesComponent,
    children: [
      { path: 'pages', loadChildren: () => import('./client/client.module').then(m => m.ClientModule) },
      { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
      { path: 'livreur', loadChildren: () => import('./livreur/livreur.module').then(m => m.LivreurModule) },
      { path: 'resto', loadChildren: () => import('./resto/resto.module').then(m => m.RestoModule) }




    ]
  },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
