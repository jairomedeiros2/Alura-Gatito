//import { LoginComponent } from './home/login/login.component';
//import { HomeModule } from './home/home.module';
//import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//import { RouterModule } from '@angular/router';
//import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //FormsModule,
    //RouterModule,
    HttpClientModule,

    // HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
