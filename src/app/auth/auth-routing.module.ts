import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'registro', component:RegistroComponent},
      {path: 'login', component: LoginComponent},
      {path: '**', redirectTo: 'login'}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class AuthRoutingModule { }
