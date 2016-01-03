import {IonicApp, Page, NavController, NavParams} from 'ionic-framework/ionic';
import {Products} from '../../providers/products';
import {Inject} from 'angular2/core';

@Page({
  templateUrl: 'build/pages/mislistas/mislistas.html',
  providers: [Products]
})
export class MisListas {
  quantity: number[];

  constructor(app: IonicApp, nav: NavController, navParams: NavParams, @Inject(Products) private products: Products) {
    this.nav = nav;
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.quantity = new Array(100);
    for (var i=0;i<100;i++) this.quantity[i]=0;
    this.items = this.products.getProductsRandom(6);
  }

  substract(index: number) {
    this.quantity[index] = this.quantity[index]-1;
    if (this.quantity[index]<0) this.quantity[index]=0;
  }
  sum(idx: number) {
    this.quantity[idx] = this.quantity[idx]+1;
    console.log(this.quantity, idx);
  }
}
