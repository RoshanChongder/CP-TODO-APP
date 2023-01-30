import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserRoutingModule } from './user-routing.module';
import { TranslateModule } from '@ngx-translate/core'; 

@NgModule({
  declarations: [
    UserLoginComponent,
    UserSignupComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    TranslateModule
  ]
})
export class UserModule { }
