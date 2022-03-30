import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeneficeComponent } from './benefice/benefice.component';
import { CommandeComponent } from './commande/commande.component';
import { CrudComponent } from './crud/crud.component';
import { RestoComponent } from './resto.component';

const routes: Routes = [{ path: '', component: RestoComponent,
children: [
{ path: 'benefice', component: BeneficeComponent  },
{ path: 'commande', component:CommandeComponent  },
{ path: 'crud', component: CrudComponent  },

]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestoRoutingModule { }
