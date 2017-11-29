import { Component } from '@angular/core';
import { ItemSubscriber } from '../item-subscriber';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent extends ItemSubscriber {}
