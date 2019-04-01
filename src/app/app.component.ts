import { Component, OnInit } from '@angular/core';
import { LeafletMapService } from './leaflet-map.service';
import * as L from 'leaflet';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css' ]
})
export class AppComponent implements OnInit {
  zoom: number;
  center: L.LatLng;
  fitBounds: L.LatLngBounds;
  baseLayers: L.TileLayer[];
  map: L.Map;
  constructor(private leafletMapService: LeafletMapService) {

  }

  ngOnInit() {
    //create map
    this.map = this.leafletMapService.createMap();
  }
}
