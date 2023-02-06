import { ErrorHandler, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PASSWORD_SRENGTH, STRONG_PASSWORD_REGEX, MEDIUM_PASSWORD_REGEX, TOKEN } from './../../common-utils/common-util';
import { catchError, Observable, tap } from 'rxjs';
import { CommonHttpService } from './../../common-utils/common-http.service';


export interface Login_Creds {
  emailId: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class UserService extends CommonHttpService {

  private USER_SERVICE_LOGIN_URL = 'localhost:9090/login';

  /* Injecting the http Client Service */
  constructor(private http: HttpClient) {
    super();
  }

  /* Method To Check Password Strength */
  getPasswordStrength(password: string): PASSWORD_SRENGTH {
    let passwordStrength: PASSWORD_SRENGTH;
    if (STRONG_PASSWORD_REGEX.test(password)) {
      passwordStrength = PASSWORD_SRENGTH.STRONG;
    } else if (MEDIUM_PASSWORD_REGEX.test(password)) {
      passwordStrength = PASSWORD_SRENGTH.MEDIUM;
    } else {
      passwordStrength = PASSWORD_SRENGTH.WEAK;
    }
    return passwordStrength;
  }

  /*
    **  Uncomemnt And Update The Method Once The BE Service Is Ready **
    logInUser(loginCreds: Login_Creds): Observable<any> {
      return this.http.post(this.USER_SERVICE_LOGIN_URL, loginCreds).pipe(
        tap(val => console.log(val)),
        catchError(UserService.handleError)
      )
    }
  */
  
  logInUser(loginCreds: Login_Creds): Promise<boolean> {
    let {emailId, password} = loginCreds;
    if (emailId === 'test@gmail.com' && password === 'test12345' ) {
      sessionStorage.setItem(TOKEN.key, 'TEST_TOCKEN_VAL');
      return Promise.resolve(true); 
    } else {
      return Promise.resolve(false);
    }
  }

}
