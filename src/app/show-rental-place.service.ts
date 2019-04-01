import { Injectable } from '@angular/core';
import * as L from 'leaflet';
import 'pixi.js';
import 'leaflet-pixi-overlay';


@Injectable({
  providedIn: 'root'
})
export class ShowRentalPlaceService {
  
  constructor() { }
  showRentalPlace(map: L.Map) {
    let pixiContainer = new PIXI.Container();
    pixiContainer.addChild();
    L.pixiOverlay();
  }
}
