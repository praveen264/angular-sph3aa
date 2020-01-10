import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MembersComponent} from './members/members.component';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {HelloComponent} from './hello.component';
import {AuthGuard} from './auth.guard';
const routes: Routes = [
   {path:'hello',canActivate:[AuthGuard],component:HelloComponent},
   {path:'members',canActivate:[AuthGuard],component:MembersComponent},
   {path:'logout',component:LoginComponent},
   {path:'',component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
