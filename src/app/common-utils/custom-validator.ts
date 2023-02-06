import { FormControl } from "@angular/forms";
import { EMAIL_REGEX } from './common-util';

export interface CustomValidationError {
    msg: string;
    key: string;
}

export class CustomValidator {
    
    /* Email Id Validator Method  */
    static validateEmialId( formControl: FormControl ): CustomValidationError | null  {
        let validationRes = null;
        if ( !EMAIL_REGEX.test(formControl.value) ) {
            validationRes = { key: 'WRONG_EMAIL_ID', msg: 'Please enter a valid email id.' } as CustomValidationError;
        }
        return validationRes;
    }

}