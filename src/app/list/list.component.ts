import { Component, OnInit } from '@angular/core';
import { DataService } from '../common/services/data.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public items$: Observable<IItem[]>;
  public currentType: string;

  public constructor(
    private _dataService: DataService
  ) { }

  public ngOnInit(): void {
    this.items$ = this._dataService.items;
    this._dataService.items.subscribe((items: IItem[]) => this.currentType = items[0].type);
  }

  public chooseItem(item: IItem): void {
    this._dataService.chooseItem = item;
  }

  public choseFilter(type: string): void {
    this.currentType = type;
  }

}
