import {Injectable} from '@angular/core';
@Injectable()

export class ValidationService {
    static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
        let config = {
            'required': 'Required',
            'invalidCreditCard': 'Is invalid credit card number',
            'invalidEmailAddress': 'Invalid email address',
            'invalidPassword': 'Invalid password. Password must be at least 8 characters long, and contain a number and a capital letter',
            'minlength': `Minimum length ${validatorValue.requiredLength}`,
            'invalidCurrency': `Invalid Format. Currency Format allow two decimal after comma.`,
            'invalidmyDocumentTitle': `Invalid Format`,
            'invalidmyDocumentData': `Invalid Format`
        };

        return config[validatorName];
    }

    static creditCardValidator(control) {
        // Visa, MasterCard, American Express, Diners Club, Discover, JCB
        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        } else {
            return { 'invalidCreditCard': true };
        }
    }

    static emailValidator(control) {
        // RFC 2822 compliant regex
        if (control.value.match(/^[\w\.\-]+@([\w\-]+\.)+[\w-]{2,6}$/)) {
            return null;
        } else {
            return { 'invalidEmailAddress': true };
        }
    }

    static passwordValidator(control) {
        // {6,100}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        if (control.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/)) {
            return null;
        } else {
            return { 'invalidPassword': true };
        }
    }

    static currencyValidator(control) {
        if (control.value.match(/^\d+(,\d{0,2})?$/)) {
            return null;
        } else {
            return { 'invalidCurrency': true };
        }
    }

    static myDocumentTitleValidator(control) {
        if (control.value.match(/^[A-z]\d\s.-,&\/()\+':!?]+$/)) {
            return null;
        } else {
            return { 'invalidmyDocumentTitle': true };
        }
    }

    static myDocumentDataValidator(control) {
        if (control.value.match(/^[[A-z]\d\s.-,&\/()\+':!?]+$/)) {
            return null;
        } else {
            return { 'invalidmyDocumentData': true };
        }
    }
}
