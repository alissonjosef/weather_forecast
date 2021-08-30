import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  citties: City[] = [
    { name: 'Dallol' },
    { name: 'Fairbanks' },
    { name: 'Lodon' },
    { name: 'Recife' },
    { name: 'Vancouver' },
    { name: 'Yakutsk' },
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
