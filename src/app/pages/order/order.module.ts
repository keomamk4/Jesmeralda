import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { OrderPageRoutingModule } from './order-routing.module';
import { OrderPage } from './order.page';


@NgModule({
imports: [
CommonModule,
IonicModule,
OrderPageRoutingModule
],
declarations: [OrderPage]
})
export class OrderPageModule {}