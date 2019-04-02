import { Injectable } from '@angular/core';
import * as L from 'leaflet';
import 'pixi.js';
import 'leaflet-pixi-overlay';
import 'fs';

@Injectable({
  providedIn: 'root'
})
export class ShowRentalPlaceService {
  loader: PIXI.loaders.Loader;
  text: string;
  constructor() { }
  openRentalPlace() {
    const csv = require('csv-parser');
    const fs = require('fs');
    const results = [];

    fs.createReadStream('assets/seoul_bicycle/o1_rental_place/rental_place.csvs')
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => {
        console.log(results);
      });
  }



  showRentalPlace(map: L.Map) {
    console.log('rental');
    this.loader = new PIXI.loaders.Loader();
    this.loader.add('marker', 'assets/img/marker.png');
    this.loader.load((loader, resources) => {
      let markerTexture = resources.marker.texture;
      let markerLatLng = [37.52, 127];
      let marker = new PIXI.Sprite(markerTexture);
      marker.anchor.set(0.5, 1);

      let pixiContainer = new PIXI.Container();
      pixiContainer.addChild(marker);

      let firstDraw = true;
      let prevZoom;

      let pixiOverlay = L.pixiOverlay(utils => {
        let zoom = utils.getMap().getZoom();
        let container = utils.getContainer();
        let renderer = utils.getRenderer();
        let project = utils.latLngToLayerPoint;
        let scale = utils.getScale();
        scale = scale * 10;
        if (firstDraw) {
          let markerCoords = project(markerLatLng);
          marker.x = markerCoords.x;
          marker.y = markerCoords.y;
        }

        if (firstDraw || prevZoom !== zoom) {
          marker.scale.set(1 / scale);
        }

        firstDraw = false;
        prevZoom = zoom;
        renderer.render(container);

      }, pixiContainer);
      pixiOverlay.addTo(map);
    });
  }
}
