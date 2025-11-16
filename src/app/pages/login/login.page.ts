import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor(private router: Router) {}

  loginEmail() {
    // Integración con Firebase la hará otra persona
  }

  loginGoogle() {
    // Aquí se implementará Google Auth
  }

  goRegister() {
    this.router.navigate(['/register']);
  }
}
