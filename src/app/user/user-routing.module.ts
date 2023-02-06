import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { LoginAuthGuard } from './../route-guards/login-auth-guard.service';

/* Route Configurations */
const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: UserLoginComponent, canActivate: [ LoginAuthGuard ] },
    { path: 'signup', component: UserSignupComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ LoginAuthGuard ]
})
export class UserRoutingModule { }
