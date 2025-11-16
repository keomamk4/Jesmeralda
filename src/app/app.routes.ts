import { Routes } from '@angular/router';

export const routes: Routes = [

  // Ruta inicial: welcome
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },

  // Welcome
  {
    path: 'welcome',
    loadComponent: () =>
      import('./pages/welcome/welcome.page').then(m => m.WelcomePage)
  },

  // Scanner
  {
    path: 'scanner',
    loadComponent: () =>
      import('./pages/scanner/scanner.page').then(m => m.ScannerPage)
  },

  // Start
  {
    path: 'start',
    loadComponent: () =>
      import('./pages/start/start.page').then(m => m.StartPage)
  },

  // Login
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.page').then(m => m.LoginPage)
  },

  // Register
  {
    path: 'register',
    loadComponent: () =>
      import('./pages/register/register.page').then(m => m.RegisterPage)
  },

  // Verification
  {
    path: 'verification',
    loadComponent: () =>
      import('./pages/verification/verification.page').then(m => m.VerificationPage)
  },

  // Tabs (usa archivo de rutas interno)
  {
    path: 'tabs',
    loadChildren: () =>
      import('./pages/tabs/tabs.routes').then(m => m.tabsRoutes)
  },

  // Pages fuera de tabs (si las usas)
  {
    path: 'product',
    loadComponent: () =>
      import('./pages/product/product.page').then(m => m.ProductPage)
  },

  {
    path: 'order',
    loadComponent: () =>
      import('./pages/order/order.page').then(m => m.OrderPage)
  }
];
