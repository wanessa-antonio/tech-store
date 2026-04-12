import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html'
})
export class CartComponent {

  items: any[] = [];

  constructor(private cartService: CartService) {
    this.items = this.cartService.getItems();
  }

  removeItem(index: number) {
    this.cartService.removeItem(index);
    this.items = this.cartService.getItems();
  }

  clearCart() {
    this.cartService.clearCart();
    this.items = [];
  }

  getTotal() {
    return this.items.reduce((total, item) => total + item.price, 0);
  }
}


