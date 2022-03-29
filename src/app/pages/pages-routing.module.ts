import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path: '', component: PagesComponent,
    children: [
      { path: 'liste', component: ProductComponent/*, canActivate:[Guard]*/ },
      //{ path: 'resto', component: RestoComponent/*, canActivate:[Guard]*/ },
      //{ path: 'crud', component: CrudComponent }

    ]
  }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
