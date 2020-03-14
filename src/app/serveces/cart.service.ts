import { Injectable } from '@angular/core';
import { Good } from 'src/app/interfaces/good.interfaces';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private fs: AngularFirestore, private AuthService: AuthService) { }

  addToCart(data: Good) {
    return this.fs.collection(`user/${this.AuthService.userId}/cart`).add(data)
  }
  getCart() {
    return this.fs.collection(`user/${this.AuthService.userId}/cart`).snapshotChanges();
  }
}
