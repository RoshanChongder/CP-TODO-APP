import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";

@Injectable()
export class CommonHttpService {
    static handleError(err: HttpErrorResponse): Observable<Error> {
        /* Custom Login To Handle Error */
        return throwError('Custom Error');
    }
}