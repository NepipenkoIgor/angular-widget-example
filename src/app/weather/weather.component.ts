import { Component } from '@angular/core';
import { ItemSubscriber } from '../item-subscriber';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent extends ItemSubscriber {}
