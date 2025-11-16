import { Component } from '@angular/core';
import { IonicModule, ToastController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-verification',
  standalone: true,
  templateUrl: './verification.page.html',
  styleUrls: ['./verification.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule],
})
export class VerificationPage {

  otp: string = '';

  constructor(private toastCtrl: ToastController) {}

  verifyCode() {
    console.log('Código ingresado:', this.otp);

    if (this.otp.length !== 6) {
      console.warn('El código debe tener 6 dígitos');
      return;
    }

    console.log('Código verificado correctamente');
  }

  // Corrección: se agrega el método que faltaba
  async resendCode() {
    const toast = await this.toastCtrl.create({
      message: 'Se ha reenviado el código',
      duration: 2000,
      color: 'success',
      position: 'bottom'
    });
    await toast.present();
    console.log('Código reenviado');
  }

}
