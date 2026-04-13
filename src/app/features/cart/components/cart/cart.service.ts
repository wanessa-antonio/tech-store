import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private items: any[] = [];

  private itemsSubject = new BehaviorSubject<any[]>([]);
  items$ = this.itemsSubject.asObservable();

  constructor() {
    const saved = localStorage.getItem('cart');
    this.items = saved ? JSON.parse(saved) : [];
    this.itemsSubject.next(this.items);
  }

  getItems() {
    return this.items;
  }

  getCount() {
    return this.items.length;
  }

  addItem(item: any) {
    this.items.push(item);
    this.updateState();
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
    this.updateState();
  }

  clearCart() {
    this.items = [];
    this.updateState();
  }

  private updateState() {
    this.itemsSubject.next(this.items);
    localStorage.setItem('cart', JSON.stringify(this.items));
  }
}

