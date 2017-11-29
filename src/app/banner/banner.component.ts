import { Component } from '@angular/core';
import { ItemSubscriber } from '../item-subscriber';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent extends ItemSubscriber {}
