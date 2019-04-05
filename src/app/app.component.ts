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
    constructor(private leafletMapService: LeafletMapService,
                private showRentalPlaceService: ShowRentalPlaceService,
                private localFileopenService: LocalFileopenService) {

    }
    successCallback(result) {
        console.log(result);
        this.showRentalPlaceService.showRentalPlace(this.map, result);
    }
    ngOnInit() {
        // create map
        this.map = this.leafletMapService.createMap();
        this.localFileopenService.getRentalPlaceData(this.map)
            .then(this.successCallback);
            /*
        for (let rentalPlace of rentalPlaceData) {
            let lat = +rentalPlace[5];
            let lng = +rentalPlace[6];
            this.showRentalPlaceService.showRentalPlace(this.map, [lat, lng]);
        }
        */
        // this.showRentalPlaceService.openRentalPlace();
    }
}
