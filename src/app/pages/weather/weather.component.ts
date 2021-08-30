import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { City, Weather } from 'src/app/models';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  city = {} as City;
  weather: Weather;

  constructor(private _route: ActivatedRoute, private _weatherService: WeatherService) { }

  ngOnInit(): void {
    this.city.name = this._route.snapshot.paramMap.get('city');

    this._weatherService.forecastWeather(this.city.name).toPromise()
    .then((resp: Weather) => {
      this.weather = resp;
    })
    .catch(error => {
      console.log(error);
    });
  }

  get background() {
    let color = '#000';
   /*  if(this.weather?.code === 1000) {
      color = '#57CBDB';
    } */
    
    if([1000, 1001, 1004].indexOf(this.weather?.code) !== -1) {
      color = '#57CBDB';
    } else if ([1000, 1001, 1004].indexOf(this.weather?.code) !== -1) {
      color = '#57CBDB';
    }else if ([1005, 1006, 1007].indexOf(this.weather?.code) !== -1) {
      color = '#E0E0E0';
    }
    return `linear-gradient(rgb(83, 95, 109), ${color})` 
  }

}
