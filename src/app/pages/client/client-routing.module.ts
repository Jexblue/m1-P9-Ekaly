import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { PlatsComponent } from './plats/plats.component';

const routes: Routes = [{ path: '', component: PlatsComponent,
children: [
{ path: 'plats', component: PlatsComponent },
]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
