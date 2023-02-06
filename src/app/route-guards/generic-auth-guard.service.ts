import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router"; 
import { Observable } from "rxjs";
import { Router } from "@angular/router";
import { TOKEN } from '../common-utils/common-util';

@Injectable()
export class GenericAuthGuard implements CanActivate {

    /* Router is injected to navigate on success or failure in canActive() */
    constructor(private router: Router) {}
    
    /* If JWT token found from storge - 
     *  1. Let the user navigate to the specified URL. return true.
     *  2. Else Return false and navigate the user to login Page.
     */
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if (sessionStorage.getItem(TOKEN.key)) {
            return true;
        } else {
            this.router.navigate(['user/login']);
            return false;
        }
    }
    
}