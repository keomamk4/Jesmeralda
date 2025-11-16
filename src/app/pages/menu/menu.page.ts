import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,   // 👈 NECESARIO PARA *ngFor
    RouterModule
  ],
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss']
})
export class MenuPage {
  pages = [
    { title: 'Inicio', url: '/tabs/home', icon: 'home' },
    { title: 'Carrito', url: '/cart', icon: 'cart' },
    { title: 'Perfil', url: '/profile', icon: 'person' }
  ];

  constructor() {}
}
