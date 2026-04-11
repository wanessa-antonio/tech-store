import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../../core/services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Carrinho</h2>

    <div *ngIf="items.length > 0; else empty">
      <div *ngFor="let item of items">
        {{ item.title }} - R$ {{ item.price }}
      </div>
    </div>

    <ng-template #empty>
      <p>Carrinho vazio</p>
    </ng-template>
  `
})
export class CartComponent implements OnInit {

  items: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }
}
