import { Routes } from '@angular/router';
import { AuthGuard } from './features/auth/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.routes')
        .then(m => m.AUTH_ROUTES)
  },
  {
    path: 'courses',
    loadChildren: () =>
      import('./features/courses/courses.routes')
        .then(m => m.COURSES_ROUTES)
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('./features/cart/cart.component')
        .then(m => m.CartComponent),
      canActivate: [AuthGuard] 

  },
  {
    path: '',
    redirectTo: 'courses',
    pathMatch: 'full'
  }
];