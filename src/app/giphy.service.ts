import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GiphyService {


  constructor(private _http:HttpClient) { }

  dailyGifs(){
    return this._http.get("https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC&limit=15")
    .map(result => result);
    }

  // searchGif(){
  //   console.log('it works!')
  // }


}
