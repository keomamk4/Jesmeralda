import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-scanner',
  imports: [IonicModule, CommonModule],
  templateUrl: './scanner.page.html',
  styleUrls: ['./scanner.page.scss'],
})
export class ScannerPage {
  constructor() {}

  // Aquí luego se integrará el lector QR con Capacitor o Ionic Native
}
