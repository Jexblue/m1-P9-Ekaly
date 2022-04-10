import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from 'src/guard/loginGuard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', redirectTo:'pages',pathMatch:'full' },
  {path : 'login', component: LoginComponent/*, canActivate:[LoginGuard]*/},
  {path : 'register', component: RegisterComponent},
  { path: 'pages', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
