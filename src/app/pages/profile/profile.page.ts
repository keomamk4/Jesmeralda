import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';



@Component({
selector: 'app-profile',
templateUrl: './profile.page.html',
imports: [IonicModule, CommonModule],
styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {
user = {
name: 'Luis Rojas',
email: 'usuario@gmail.com',
image: 'assets/img/user.png'
};


constructor() {}
}