import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Papa } from 'ngx-papaparse';
import { Buffer } from 'buffer';
import { ShowRentalPlaceService } from './show-rental-place.service';

declare let require: any;

@Injectable({
    providedIn: 'root'
})
export class LocalFileopenService {
    data: string[][];
    url = 'http://localhost:4200/assets/seoul_bicycle/01_rental_place/rental_place.csv';
    iconv = require('iconv-lite');
    jschardet = require('jschardet');
    constructor(private http: HttpClient, private papa: Papa,
                private showRentalPlaceService: ShowRentalPlaceService) { }
    async getRentalPlaceData(map) {
        const res = await this.http.get(this.url, { responseType: 'arraybuffer' }).toPromise();
        const utf8Res = this.iconv.decode(Buffer.from(res), 'euc-kr');
        this.papa.parse(utf8Res, {
            complete: (result) => {
                this.data = result.data;
            }
        });
        return this.data;
    }
}
