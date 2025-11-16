import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  imports: [IonicModule, CommonModule],
  styleUrls: ['./start.page.scss'],
})
export class StartPage {

  constructor(private router: Router) {}

  goNext() {
    this.router.navigate(['/tabs/menu']);
  }
}
