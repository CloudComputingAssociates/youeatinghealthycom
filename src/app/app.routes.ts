import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';

export const routes: Routes = [
  { path: '', component: Home, title: 'YouEatingHealthy — Practical Healthy Eating' },
  { path: 'about', component: About, title: 'About — YouEatingHealthy' },
  { path: '**', redirectTo: '' }
];
