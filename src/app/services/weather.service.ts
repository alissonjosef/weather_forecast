import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Weather } from '../models';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private _http: HttpClient) {}

  currentWeather(cityName: string): Observable<Weather> {
    return this._http
      .get(
        `${environment.API.openweathermap.url}/${environment.API.openweathermap.version}/weather`,
        {
          params: {
            q: cityName,
            appid: environment.API.openweathermap.apiKey,
            units: 'metric',
          },
        }
      )
      .pipe(
        map((resp: any) => {
          return {
            description: resp.weather[0].description,
            humidity: resp.main.humidity,
            temp: {
              current: Math.trunc(resp.main.temp),
              max: Math.trunc(resp.main.temp_max),
              min: Math.trunc(resp.main.temp_min),
            },
            icon: `https://openweathermap.org/img/wn/${resp.weather[0].icon}@4x.png`,
            sunrise: new Date(resp.sys.sunrise * 1000),
            sunset: new Date(resp.sys.sunset * 1000),
            windSpeed: resp.wind.speed,
          } as Weather;
        })
      );
  }

  forecastWeather(cityName: string): Observable<Weather> {
    return this._http
      .get(
        `${environment.API.weatherapi.url}/${environment.API.weatherapi.version}/forecast.json`,
        {
          params: {
            q: cityName,
            key: environment.API.weatherapi.apiKey,
            days: '1',
            aqi: 'no',
            alerts: 'no'
          },
        }
      )
      .pipe(
        map((resp: any) => {
          return {
            description: resp.current.condition.text,
            code: resp.current.condition.code,
            icon: resp.current.condition.icon.replace('64x64', '128x128'),
            windSpeed: resp.current.wind_kph,
            humidity: resp.current.humidity,
            temp: {
              current: Math.trunc(resp.current.temp_c),
              max: Math.trunc(resp.forecast.forecastday[0].day.maxtemp_c),
              min: Math.trunc(resp.forecast.forecastday[0].day.mintemp_c),
            },
            sunrise: resp.forecast.forecastday[0].astro.sunrise,
            sunset: resp.forecast.forecastday[0].astro.sunset,
            hours: resp.forecast.forecastday[0].hour.filter(el =>  [3, 9, 15, 21].indexOf(new Date(el.time).getHours()) !== -1).map(el => {
              return {
                description: el.condition.text,
                icon: el.condition.icon,
                temp: Math.trunc(el.temp_c)
              }
            })
          } as Weather;
        })
      );
  }
}

/*
  3
  9
  15
  21
*/
