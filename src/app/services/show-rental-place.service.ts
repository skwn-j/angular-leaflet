import { Injectable } from '@angular/core';
import * as L from 'leaflet';
import 'pixi.js';
import 'leaflet-pixi-overlay';

@Injectable({
    providedIn: 'root'
})
export class ShowRentalPlaceService {
    text: string;
    constructor() { }

    //add child for each marker
    showRentalPlace(map: L.Map, rentalPlaceData: string[][]) {
        console.log('rental');
        let loader = new PIXI.loaders.Loader();
        loader.add('marker', 'assets/img/marker.png');
        loader.load((loader, resources) => {
            let markerTexture = resources.marker.texture;
            let markerSprites = [];

            let pixiContainer = new PIXI.Container();


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
                    rentalPlaceData.forEach(place => {
                        let marker = new PIXI.Sprite(markerTexture);
                        let markerCoords = project([+place[5], +place[6]]);
                        marker.x = markerCoords.x;
                        marker.y = markerCoords.y;
                        marker.anchor.set(0.5, 0.5);
                        container.addChild(marker);
                        markerSprites.push(marker);
                    });
                }

                if (firstDraw || prevZoom !== zoom) {
                    markerSprites.forEach(marker => {
                        if (firstDraw) {
                            marker.scale.set(1 / scale);
                        } else {
                            marker.currentScale = marker.scale.x;
                            marker.targetScale = 1 / scale;
                        }
                    });
                }

                firstDraw = false;
                prevZoom = zoom;
                renderer.render(container);

            }, pixiContainer);
            pixiOverlay.addTo(map);
        });
    }
}
