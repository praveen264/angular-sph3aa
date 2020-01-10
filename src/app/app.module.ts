import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { MembersComponent } from './members/members.component';
import {AuthGuard} from './auth.guard';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ConfigService } from './config.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRoutingModule,HttpClientModule ],
  providers:[AuthGuard, ConfigService],
  declarations: [ AppComponent, HelloComponent, HeaderComponent, MembersComponent, LoginComponent, LogoutComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
