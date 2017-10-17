import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// 引入路由
import { RouterModule , Routes } from '@angular/router';
import { HttpModule } from '@angular/http';


// 引入组件
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UsersComponent } from './components/users/users.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PageNotFountComponent } from './components/page-not-fount/page-not-fount.component';
import { UserDetallComponent } from './components/user-detall/user-detall.component';

// 引入服务
import { UserService } from './services/user.service';
import { ExchangeComponent } from './components/exchange/exchange.component';

// 设置路由
const appRoutes: Routes = [
  {path : '' , component: HomeComponent},
  {path : 'login' , component: LoginComponent},
  {path : 'register' , component: RegisterComponent},
  {path : 'user-detall' , component: UserDetallComponent},
  {path : 'exchange' , component: ExchangeComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    AddUserComponent,
    EditUserComponent,
    SettingsComponent,
    SidebarComponent,
    PageNotFountComponent,
    UserDetallComponent,
    ExchangeComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
