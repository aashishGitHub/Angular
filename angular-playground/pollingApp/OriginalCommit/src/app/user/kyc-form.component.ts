import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray  } from '@angular/forms';

import {ProgressBarModule} from 'primeng/primeng';

import { debounceTime } from 'rxjs/operators';

@Component({  
  selector: 'app-kyc-form',
  templateUrl: './kyc-form.component.html',
  styleUrls: ['./kyc-form.component.less']
  })  
export class KycFormComponent implements OnInit {
  kycForm: FormGroup;
  progress: number;
  emailMessage: string;

  private validationMessages = {
    required: 'Please enter your email address.',
    email: 'Please enter a valid email address.'
  };

  constructor(private fb: FormBuilder) { }
  
  ngOnInit() {
    this.progress = 16;

    this.kycForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(3)]],  
      
      // 1.  email group 
      emailGroup: this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        confirmEmail: ['', Validators.required],
      }, { validator: emailMatcher }),
      phone: '',
      notification: 'email',
      rating: [null, ratingRange(1, 5)]
     // sendCatalog: true,
      //addresses: this.fb.array([this.buildAddress()])
    });

    this.kycForm.get('notification').valueChanges.subscribe(
      value => this.setNotification(value)
    );

    // 2 attaching the error message after a debounce of 1000  
    const emailControl = this.kycForm.get('emailGroup.email');
    emailControl.valueChanges.pipe(
      debounceTime(1000)
    ).subscribe(
      value => this.setMessage(emailControl)
    );

    this.kycForm.valueChanges.subscribe(control=>{
      debugger;
    })
  }  
  save() {
    console.log(this.kycForm);
    console.log('Saved: ' + JSON.stringify(this.kycForm.value));
  }
  // 3. custom validation for email
  setMessage(c: AbstractControl): void {
    this.emailMessage = '';
    // 4. Reading from the class level variables 
    console.log(this.validationMessages);
    if ((c.touched || c.dirty) && c.errors) {
      this.emailMessage = Object.keys(c.errors).map(
        key => this.emailMessage += this.validationMessages[key]).join(' ');
    }
  }

  // Creating your own validation logic dynamically on a specific control.
  setNotification(notifyVia: string): void {
    const phoneControl = this.kycForm.get('phone');
    if (notifyVia === 'text') {
      phoneControl.setValidators(Validators.required);
    } else {
      phoneControl.clearValidators();
    }
    phoneControl.updateValueAndValidity();
  }
}

// This can be moved out in a separate file of its own, and exported. Because it is outside the class.
// 1.1 the custom validation for email matcher.
function emailMatcher(c: AbstractControl): { [key: string]: boolean } | null {
  const emailControl = c.get('email');
  const confirmControl = c.get('confirmEmail');

  if (emailControl.pristine || confirmControl.pristine) {
    return null;
  }

  if (emailControl.value === confirmControl.value) {
    return null;
  }
  return { 'match': true };
}

function ratingRange(min: number, max: number):ValidatorFn{
  return (c: AbstractControl) : { [key: string]:boolean } | null =>{ 

    if(c!=null && (isNaN(c.value) || c.value<min || c.value > max))
    {
      return {'range': true};
    }  
    return null;
  }
}




