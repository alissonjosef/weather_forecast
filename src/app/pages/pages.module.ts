import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { WeatherComponent } from './weather/weather.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { WeatherService } from '../services/weather.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, HttpClientModule, RouterModule, MaterialModule],
  declarations: [HomeComponent, WeatherComponent],
  providers: [WeatherService]
})
export class PagesModule {}
