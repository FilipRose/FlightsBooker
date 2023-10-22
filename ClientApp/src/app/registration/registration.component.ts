import { Component, OnInit } from '@angular/core';
import { PassangerService } from '../api/services/passanger.service';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  
  constructor(
    private _passangerService: PassangerService,
    private _formBuilder: FormBuilder,
    private _authService: AuthService,
    private _router: Router,
  ) {}

  form = this._formBuilder.group({
    email: [''],
    firstName: [''],
    lastName: [''],
    isFemale: [true]
  })

  ngOnInit(): void {}


  checkPassenger(): void {
    const emailValue = this.form.get('email')?.value; 
    
    if(typeof emailValue === 'string') {
      const params = {email :emailValue};
      this._passangerService.findPassanger(params).subscribe(
        this.login, e => {
          if(e.status != 404) {
           console.error(e)
          }
        }
      );
    }

  }

  register() {
    console.log(this.form.value);
  
    this._passangerService.registerPassanger({ body: this.form.value })
      .subscribe(this.login, console.error
      );
  }

  private login = () => {
    const emailValue = this.form.get('email')?.value;
    if (typeof emailValue === 'string') {
      this._authService.login({ email: emailValue});
      this._router.navigate(['/search-flights'])
    } 
  }
  
}
