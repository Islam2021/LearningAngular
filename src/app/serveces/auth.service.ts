import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Observable<firebase.User>;
  userId: string = ''

  constructor(private fsAuth: AngularFireAuth) { 
    this.user = this.fsAuth.user
  }

  signUp(email: any, password: any) {
   return this.fsAuth.auth.createUserWithEmailAndPassword(email, password)
  }

  login(email: any, password: any) {
   return this.fsAuth.auth.signInWithEmailAndPassword(email, password)
  }

  logout() {
   return this.fsAuth.auth.signOut();
  }
}
