import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2>Login</h2>

    <input [(ngModel)]="email" placeholder="Email">
    <input [(ngModel)]="password" type="password" placeholder="Senha">

    <button (click)="login()">Entrar</button>

    <p *ngIf="error" style="color:red">Login inválido</p>
  `
})
export class LoginComponent {
  email = '';
  password = '';
  error = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  login() {
    const success = this.authService.login(this.email, this.password);

    if (success) {
      this.router.navigate(['/courses']);
    } else {
      this.error = true;
    }
  }
}

