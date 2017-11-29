import { Directive, Input, OnInit, Output } from '@angular/core';
import { DataService } from '../common/services/data.service';

@Directive({
  selector: '[appInit]'
})
export class InitDirective implements OnInit {
  @Input()
  public item: IItem;

  @Input()
  public first: boolean;


  public constructor(
    private _dataService: DataService
  ) {

  }

  public ngOnInit(): void {
    if (!this.first) {
      return;
    }
    this._dataService.chooseItem = this.item;
  }

}