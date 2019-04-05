import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Papa } from 'ngx-papaparse';
import { Buffer } from 'buffer';
import { resetComponentState } from '@angular/core/src/render3/state';

declare let require: any;
interface RentalPlaceData {
    title: string;
    body: string;
}


@Injectable({
    providedIn: 'root'
})
export class LocalFileopenService {
    url = 'http://localhost:4200/assets/seoul_bicycle/01_rental_place/rental_place.csv';
    iconv = require('iconv-lite');
    jschardet = require('jschardet');
    constructor(private http: HttpClient,
                private papa: Papa
                ) {

    }
    getRentalPlaceData() {
        this.http.get(this.url, {responseType: 'arraybuffer'}).subscribe(res => {
            let utf8Res = this.iconv.decode(Buffer.from(res), 'euc-kr');
            //let utfRes = Buffer.from(res, 'win1252').toString('utf8');
            this.papa.parse(utf8Res, {
                complete: (result) => {
                    console.log(result.data[0][0]);
                    let samplestr = result.data[0][0];

                }
            });
        }
        );
    }
    /*
    private parseCSV(res: HttpResponse<any>) {
        let csvData = 
    }
    private handleError(error: HttpErrorResponse) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        // tslint:disable-next-line: prefer-const
        let errMsg = (error.message) ? error.message :
          error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return errMsg;
    }
    */
}
