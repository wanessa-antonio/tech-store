
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'courses',
    loadChildren: () =>
      import('./features/courses/courses.routes')
        .then(m => m.COURSES_ROUTES)
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('./features/cart/components/cart/cart.component')
        .then(m => m.CartComponent)
  },
  {
    path: '',
    redirectTo: 'courses',
    pathMatch: 'full'
  }
];

