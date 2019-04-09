import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { PapaParseModule } from 'ngx-papaparse';
import { RentalPlaceInfoComponent } from './components/rental-place-info/rental-place-info.component';
import { BicycleMapComponent } from './components/bicycle-map/bicycle-map.component';

@NgModule({
    declarations: [
        AppComponent,
        RentalPlaceInfoComponent,
        BicycleMapComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        PapaParseModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
