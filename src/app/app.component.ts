import { Component, OnInit } from '@angular/core';
import { LeafletMapService } from './services/leaflet-map.service';
import { ShowRentalPlaceService } from './services/show-rental-place.service';
import { LocalFileopenService } from './services/local-fileopen.service';
import * as L from 'leaflet';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    map: L.map;
    rentalPlaceUrl = 'http://localhost:4200/assets/seoul_bicycle/01_rental_place/rental_place.csv';
    constructor(private leafletMapService: LeafletMapService,
                private showRentalPlaceService: ShowRentalPlaceService) {}
    ngOnInit() {
        // create map
        this.map = this.leafletMapService.createMap();
        //this.map = this.leafletMapService.showRentalPlaceOnMap();
    }
}
