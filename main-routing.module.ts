import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { MainComponent } from './main.component';


const routes: Routes = [
    { component:MainComponent, path:'main',
      children: [
        { component:LoginComponent, path:'login'},
        { component:RegisterComponent, path:'register'}
      ]
     }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  export const routingComponents = [LoginComponent,RegisterComponent]
  