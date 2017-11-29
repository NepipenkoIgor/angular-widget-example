import { ChangeDetectorRef, Injectable, OnDestroy, OnInit } from '@angular/core';
import { DataService } from './common/services/data.service';
import { Subscription } from 'rxjs/Subscription';


@Injectable()
export class ItemSubscriber implements OnInit, OnDestroy {
  public item: IItem;
  public itemSubscription: Subscription;

  public constructor(
    private _dataService: DataService,
    private _cdr: ChangeDetectorRef
  ) { }

  public ngOnInit(): void {
    this.itemSubscription = this._dataService.choosedItem.subscribe((item: IItem) => {
      // setTimeout(()=>{},0)
      // Promise.resolve()
      //   .then(() => this.item = item);
      this.item = item;
      this._cdr.detectChanges();
    });
  }

  public ngOnDestroy(): void {
    this.itemSubscription.unsubscribe();
  }
}