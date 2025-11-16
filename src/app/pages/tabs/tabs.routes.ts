import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const tabsRoutes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'menu',
        loadComponent: () =>
          import('../menu/menu.page').then(m => m.MenuPage),
      },
      {
        path: 'cart',
        loadComponent: () =>
          import('../cart/cart.page').then(m => m.CartPage),
      },
      {
        path: 'notifications',
        loadComponent: () =>
          import('../notifications/notifications.page').then(m => m.NotificationsPage),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('../profile/profile.page').then(m => m.ProfilePage),
      },

      // Redirect por defecto
      {
        path: '',
        redirectTo: 'menu',
        pathMatch: 'full'
      }
    ]
  }
];
