import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../serveces/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from './../../interfaces/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  myLogin: FormGroup;
  submited: boolean = false;
  errMesg: any = '';

  constructor(private AuthService: AuthService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.myLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  get f(){
    return this.myLogin.controls;
  }

  login(email: any, password: any){
    this.submited = true;
    let loginData: User = this.myLogin.value;
    this.AuthService.login(loginData.email, loginData.password)
    .then(res => this.router.navigate(['/']))
    .catch(err => {
      this.errMesg = err.message;
    })
  }

}
