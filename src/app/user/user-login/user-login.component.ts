import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, ValidationErrors } from '@angular/forms';
import { CustomValidator } from './../../common-utils/custom-validator';
import { PASSWORD_SRENGTH } from './../../common-utils/common-util';
import { UserService, Login_Creds } from './../services/user.service'; 

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  loginForm!: FormGroup;
  userId: FormControl = new FormControl('', { validators: [ Validators.required, CustomValidator.validateEmialId ] });
  password: FormControl = new FormControl('', { validators: [ Validators.required, Validators.minLength(8) ] });
  formError: { [key: string]: ValidationErrors | null } = {};
  passWordStrength!: PASSWORD_SRENGTH; 

  /* Constructing The Loging From Group */
  constructor( private formBuilder: FormBuilder, private userService: UserService ) {
    this.loginForm = this.formBuilder.group({
      userId: this.userId,
      password: this.password
    });
  }

  ngOnInit(): void {
    /* Subscribe To Any Form Change And Updating Error Object */
    this.loginForm.valueChanges.subscribe(formObj => {
      this.formError = {};
      Object.keys(formObj).forEach(key => {
        this.formError[key] = this.loginForm.controls[key].errors;
      });
      /* Update The Password Strength To Update On UI */
      this.passWordStrength = this.userService.getPasswordStrength(this.loginForm.controls['password'].value);
    });
  }

  /* On Submit, Request BE For validation Of The Id And Password */
  async logInUser() {
    try {
      if ( this.loginForm.valid ) {
        let response = await this.userService.logInUser({ emailId: this.userId.value, password: this.password.value });
        this.handleLoginResponse(response);
      }
    } catch(err) {
      console.log(err);
      /* Show System Error */
    }
  }

  /* 
  * Method To Handle LogIn Response - @isCredValid of type boolean
  * 1. If the creds are valid, navigate the user the dashboard
  * 2. If the creds are invalid, show a validation meesage that creds are wrong.
  */
  handleLoginResponse(isCredValid: boolean): void {
    if (isCredValid) {
      alert('Succesful Login');
      /* Navigate The User To Dashboard. */
    } else {
      /* Show Notification Message For Wrong Creds */
    }
  }

}
