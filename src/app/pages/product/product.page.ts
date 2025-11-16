import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone: true,
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ProductPage {

  product: any = {
    name: 'Producto sin nombre',
    price: 0,
    description: 'Sin descripción',
    image: 'assets/img/default.png'
  };

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      if (params && params['product']) {
        this.product = JSON.parse(params['product']);
      }
    });
  }

  addToCart() {
    console.log('Producto agregado al carrito:', this.product);

    // Aquí luego integrarás el servicio del carrito
    // Ejemplo:
    // this.cartService.addItem(this.product);
  }
}
