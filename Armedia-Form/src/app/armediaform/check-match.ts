import { FormGroup } from '@angular/forms';
    
export function CheckMatch(controlName: string, matchingControlName: string){
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const comparingControl = formGroup.controls[matchingControlName];
        if (comparingControl.errors && !comparingControl.errors.compareValidator) {
            return;
        }
        if (control.value !== comparingControl.value) {
            comparingControl.setErrors({ compareValidator: true });
        } else {
            comparingControl.setErrors(null);
        }
    }
}