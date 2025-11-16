import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [IonicModule, CommonModule],
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {

  constructor(private router: Router) {}

  registerEmail() {
    // Firebase Auth (registro con email) lo hará otra persona
  }

  registerGoogle() {
    // Google Auth se integrará aquí
  }

  goLogin() {
    this.router.navigate(['/login']);
  }
}
