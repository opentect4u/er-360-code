import { global_url_test } from 'src/app/url';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  url=global_url_test.URL+'windy';
  constructor() { }

  ngOnInit(): void {
  }

}
