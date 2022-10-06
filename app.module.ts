import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { ListviewComponent } from './listview/listview.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainComponent } from './main/main.component';
import { AngularThreeComponent } from './angular-three/angular-three.component';
import { AngularThree1Component } from './angular-three1/angular-three1.component';




@NgModule({
  declarations: [
    AppComponent,
    ListviewComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    MainComponent,
    AngularThreeComponent,
    AngularThree1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
