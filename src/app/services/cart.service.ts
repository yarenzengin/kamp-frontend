import { Injectable } from '@angular/core';
import { CartItem } from '../models/cartItem';
import { CartItems } from '../models/cartItems';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  //sepet ol.cartItems'ı kullandık
  addToCart(product:Product){
    let item = CartItems.find(c=>c.product.productId===product.productId)
    if (item) {
      item.quantity+=1;
    }else{
      let cartItem = new CartItem();
      cartItem.product = product;
      cartItem.quantity =1;
      CartItems.push(cartItem)
    }
  }
  removeFromCart(product:Product){
    let item:CartItem = CartItems.find(c=>c.product.productId===product.productId)//elemanı buldum
    CartItems.splice(CartItems.indexOf(item),1);//arrayda belirli bir indexten sonra silme işlemi yapıyor, ama nereden itibaren itemın old.yeri bulmak gerek öncelikle
  }
  list():CartItem[]{
    return CartItems
  }
}
