import { Injectable } from '@angular/core';
import { data } from './data';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/share';

@Injectable()
export class DataService {

  private _choosenItem$$: ReplaySubject<IItem> = new ReplaySubject(1);

  public get items(): Observable<IItem[]> {
    return Observable.of(data);
  }

  public get choosedItem(): Observable<IItem> {
    return this._choosenItem$$.asObservable();
  }

  public set chooseItem(item: IItem) {
    this._choosenItem$$.next(item);
  }

}
