import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './+list/list.component';
import { RandomComponent } from './+random/random.component';
import { SigninComponent } from './+signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    RandomComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
