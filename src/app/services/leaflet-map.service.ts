import { Injectable } from '@angular/core';
import * as LL from 'leaflet';
const L = LL as any;

@Injectable({
    providedIn: 'root'
})
export class LeafletMapService {
    zoom: number;
    center: L.LatLng;
    fitBounds: L.LatLngBounds;
    baseLayers: L.TileLayer[];
    map: L.Map;
    constructor() { }
    createMap() {
        const map = L.map('map').setView([37.52, 127], 12);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        return map;
    }
}
W