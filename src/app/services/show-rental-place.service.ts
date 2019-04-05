import { Injectable } from '@angular/core';
import * as L from 'leaflet';
import 'pixi.js';
import 'leaflet-pixi-overlay';

@Injectable({
  providedIn: 'root'
})
export class ShowRentalPlaceService {
  loader: PIXI.loaders.Loader;
  text: string;
  constructor() { }
  /*
  openRentalPlace() {
    let reader = new FileReader();
    reader.readAsDataURL('http://localhost:4200');
    reader.onload = e => {
      this.text = reader.result;
    }
    reader.readAsText(file);
  }

*/

  showRentalPlace(map: L.Map, latLng: number[]) {
    console.log('rental');
    this.loader = new PIXI.loaders.Loader();
    this.loader.add('marker', 'assets/img/marker.png');
    this.loader.load((loader, resources) => {
      let markerTexture = resources.marker.texture;
      let markerLatLng = latLng;
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
        scale = scale * 30;
        if (firstDraw) {
          let markerCoords = project(markerLatLng);
          marker.x = markerCoords.x;
          marker.y = markerCoords.y;
        }

        if (firstDraw || prevZoom !== zoom) {
          console.log(scale)
          marker.scale.set(1 / scale);
          console.log(marker.scale);
        }

        firstDraw = false;
        prevZoom = zoom;
        renderer.render(container);

      }, pixiContainer);
      pixiOverlay.addTo(map);
    });
  }
}
