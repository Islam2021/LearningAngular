import { Component, OnInit } from '@angular/core';
import { Good } from 'src/app/interfaces/good.interfaces';
import { GoodsService } from './../../serveces/goods.service';
import { CartService } from './../../serveces/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Goods: Good[] = [];
  add = -1;

  constructor(private gs: GoodsService, private cs: CartService) { }

  ngOnInit() {
    this.gs.getAllGoods().subscribe(data => {
      this.Goods = data.map((ele: any) => {
        return {
          id: ele.payload.doc.id,
          ...ele.payload.doc.data()
        }
      })
    });
  }

  addToCart(index: number) {
     this.add = index;
  }

  buy(ammount: number) {
    let selectedGoods = this.Goods[this.add]
    let GoodsData = {
      name: selectedGoods.name,
      ammount: +ammount,
      price: selectedGoods.price,
      photUrl: selectedGoods.photoUrl
    }
    this.cs.addToCart(GoodsData).then(() => this.add = -1)
  }

}

