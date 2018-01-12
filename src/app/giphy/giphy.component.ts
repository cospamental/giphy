import { Component, OnInit } from '@angular/core';
import { GiphyService } from '../giphy.service';

@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.css']
})
export class GiphyComponent implements OnInit {
urls = []
  constructor(private _giphy:GiphyService) { }

  ngOnInit() {
    this._giphy.dailyGifs()
     .subscribe(res => {
       this.urls = res['data'].map(res => res.images.fixed_height.url)
       //console.log(res)
     })
  }



}
