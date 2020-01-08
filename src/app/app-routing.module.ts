import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MembersComponent} from './members/members.component';
import {HelloComponent} from './hello.component';
const routes: Routes = [
   {path:'hello',component:HelloComponent},
   {path:'members',component:MembersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
