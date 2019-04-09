import { Injectable } from '@angular/core';
import * as L from 'leaflet';
import { LocalFileopenService } from './local-fileopen.service';

@Injectable({
    providedIn: 'root'
})
export class LeafletMapService {
    zoom: number;
    center: L.LatLng;
    fitBounds: L.LatLngBounds;
    baseLayers: L.TileLayer[];
    map: L.Map;
    constructor(private localFileopenService: LocalFileopenService) { }

    createMap() {
        this.map = L.map('map').setView([37.52, 127], 12);
        this.map.doubleClickZoom.disable();
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map);
        this.showRentalPlaceOnMap();
        return this.map;
    }

    showRentalPlaceOnMap() {
        console.log(this.map);
        let rentalPlaceUrl = 'http://localhost:4200/assets/seoul_bicycle/01_rental_place/station.csv';
        this.localFileopenService.openCsvData(rentalPlaceUrl).then((rentalPlaceData: string[][]) => {
            console.log(rentalPlaceData);
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
                        prevZoom = zoom;
                        rentalPlaceData.forEach(place => {
                            if (place.length > 6) {
                                let marker = new PIXI.Sprite(markerTexture);
                                let markerCoords = project([+place[5], +place[6]]);
                                marker.x = markerCoords.x;
                                marker.y = markerCoords.y;
                                marker.anchor.set(0.5, 0.5);
                                container.addChild(marker);
                                markerSprites.push(marker);
                            }
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
                pixiOverlay.addTo(this.map);
            });
        });
    }
}
