import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { InputModule, RadioButtonModule, ButtonModule } from 'roleden-component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';


// Components
import { AppComponent } from './app.component';
import { SearchCocktailComponent } from './search-cocktail/search-cocktail.component';
import { CocktailInfoComponent } from './cocktail-info/cocktail-info.component';
import { CocktailCardComponent } from './cocktail-card/cocktail-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchCocktailComponent,
    CocktailInfoComponent,
    CocktailCardComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    InputModule, RadioButtonModule, ButtonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
