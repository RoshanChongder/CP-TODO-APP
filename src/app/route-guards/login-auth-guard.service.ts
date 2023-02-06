import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router"; 
import { Observable } from "rxjs";
import { Router } from "@angular/router";
import { TOKEN } from '../common-utils/common-util';

@Injectable()
export class LoginAuthGuard implements CanActivate {

    /* Router is injected to navigate on success or failure in canActive() */
    constructor(private router: Router) {}
    
    /* If JWT token found from storge - 
     *  1. Let the user navigate to dashboard and return false.
     *  2. Else Return true and let the user navigate to login/signup page.
     */
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if (sessionStorage.getItem(TOKEN.key)) {
            // this.router.navigate(['dashboard']); - uncomment once dashboard created
            this.router.navigate(['signup']);
            return false;
        } else {
            return true;
        }
    }
    
}