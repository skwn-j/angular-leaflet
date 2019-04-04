import { Component, OnInit } from '@angular/core';
import { LeafletMapService } from './leaflet-map.service';
import { ShowRentalPlaceService } from './show-rental-place.service';
import * as L from 'leaflet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  map: L.map;
  constructor(private leafletMapService: LeafletMapService,
              private showRentalPlaceService: ShowRentalPlaceService) {

  }

  ngOnInit() {
    //create map
    this.map = this.leafletMapService.createMap();
    this.showRentalPlaceService.showRentalPlace(this.map);
    //this.showRentalPlaceService.openRentalPlace();
  }
}
