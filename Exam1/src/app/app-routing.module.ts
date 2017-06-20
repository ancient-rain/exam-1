import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from "app/+list/list.component";
import { RandomComponent } from "app/+random/random.component";
import { SigninComponent } from "app/+signin/signin.component";

const routes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'random/:number', component: RandomComponent },
  { path: 'signin', component: SigninComponent },
  { path: '**', redirectTo: 'list' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
