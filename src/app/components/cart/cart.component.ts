import { Component, OnInit } from '@angular/core';
import { CartService } from './../../serveces/cart.service';
import { Shopping } from './../../interfaces/shopping.interfaces';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: Shopping[] = []
  constructor(private cs: CartService) { }

  ngOnInit() {
    this.cs.getCart().subscribe(cart => {
      this.cart = cart.map((shopping: any) => {
        return {
          id: shopping.payload.doc.id,
          ...shopping.payload.doc.data()
        }
      })
    })
  }

}
