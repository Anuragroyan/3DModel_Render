import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListviewComponent } from './listview/listview.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  { path: '',redirectTo:'/',pathMatch:'full'},
  { component:ListviewComponent, path:'listview'},
  { component:MainComponent, path:'main'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AppComponent, ListviewComponent]
