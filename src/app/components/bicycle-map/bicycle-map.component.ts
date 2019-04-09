import { Component, OnInit } from '@angular/core';
import { LeafletMapService } from 'src/app/services/leaflet-map.service';
import { ShowRentalPlaceService } from 'src/app/services/show-rental-place.service';
import * as L from 'leaflet';

@Component({
  selector: 'app-bicycle-map',
  templateUrl: './bicycle-map.component.html',
  styleUrls: ['./bicycle-map.component.css']
})
export class BicycleMapComponent implements OnInit {

  map: L.map;
  rentalPlaceUrl = 'http://localhost:4200/assets/seoul_bicycle/01_rental_place/rental_place.csv';
  constructor(private leafletMapService: LeafletMapService,
    private showRentalPlaceService: ShowRentalPlaceService) { }
  ngOnInit() {
    // create map
    this.map = this.leafletMapService.createMap();
  }
}
