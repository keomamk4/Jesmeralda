import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage {

  cart = [
    {
      name: 'Producto 1',
      price: 50,
      qty: 1,
      image: 'assets/img/product1.jpg'
    },
    {
      name: 'Producto 2',
      price: 30,
      qty: 2,
      image: 'assets/img/product2.jpg'
    }
  ];

  constructor(private alertCtrl: AlertController) {}

  increase(item: any) {
    item.qty++;
  }

  decrease(item: any) {
    if (item.qty > 1) {
      item.qty--;
    }
  }

  remove(i: number) {
    this.cart.splice(i, 1);
  }

  // Método para calcular el total del carrito
  getTotal(): number {
    return this.cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  }

  // Método para simular el checkout
  async checkout() {
    const alert = await this.alertCtrl.create({
      header: 'Compra',
      message: `Total a pagar: S/ ${this.getTotal()}`,
      buttons: ['OK']
    });
    await alert.present();
    // Aquí puedes agregar la lógica real de pago
  }

}
