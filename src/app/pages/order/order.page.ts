import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
selector: 'app-order',
imports: [IonicModule, CommonModule],
templateUrl: './order.page.html',
styleUrls: ['./order.page.scss'],
})
export class OrderPage {
constructor(private router: Router) {}


goHome() {
this.router.navigateByUrl('/tabs');
}
}