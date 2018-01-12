import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GiphyService } from './giphy.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import { GiphyComponent } from './giphy/giphy.component';


@NgModule({
  declarations: [
    AppComponent,
    GiphyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GiphyService  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
