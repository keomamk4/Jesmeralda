import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [
    IonicModule,
    CommonModule   // 👈 NECESARIO PARA *ngFor
  ],
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss']
})
export class NotificationsPage {

  notifications = [
    { title: 'Promo 2x1 en jugos', time: 'Hace 1 hora' },
    { title: 'Tu pedido está en camino', time: 'Hace 3 horas' }
  ];

  constructor() {}
}
