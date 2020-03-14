import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MustMatch } from 'src/app/_helpers/must-match.validator';
import { AuthService } from './../../serveces/auth.service';
import { User } from './../../interfaces/user.interface';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup;
  submited: boolean = false;
  errorMes: string = ''

  constructor(private formBulider: FormBuilder, private authServices: AuthService) { }

  ngOnInit() {

    this.registerForm = this.formBulider.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required, Validators.minLength(1-5)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]],
    }, {validator: MustMatch('password', 'confirmPassword')})
  }

  get f() {return this.registerForm.controls;}

  SignUp(){
    this.submited = true;
    let data: User = this.registerForm.value;
    this.authServices.signUp(data.email, data.password).then((result) => {
      console.log(result)
    }).catch((err: any) => {
      this.errorMes = err.message
    });
  }

}
