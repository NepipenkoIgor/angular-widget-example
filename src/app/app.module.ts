import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { WeatherComponent } from './weather/weather.component';
import { InfoComponent } from './info/info.component';
import { ItemComponent } from './list/item/item.component';
import { DataService } from './common/services/data.service';
import { InitDirective } from './list/init.directive';
import { MakeFilterMenuPipe } from './list/make-filter-menu.pipe';
import { FilterItemsPipe } from './list/filter-items.pipe';
import { BannerComponent } from './banner/banner.component';
import { PhonePipe } from './list/item/phone.pipe';



@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    WeatherComponent,
    InfoComponent,
    ItemComponent,
    MakeFilterMenuPipe,
    InitDirective,
    FilterItemsPipe,
    BannerComponent,
    PhonePipe,
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
