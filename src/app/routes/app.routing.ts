import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { WeatherComponent } from '../pages/weather/weather.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'weather/:city',
    component: WeatherComponent,
  },
];
