//this is the root module for the angular application..
import { BrowserModule } from '@angular/platform-browser';//importing this module from the library mentioned.
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MaterialModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

import 'hammerjs';

import { AppComponent } from './app.component';

@NgModule({//this class has the declarator associated with it which is an NgModule..
  declarations: [
    AppComponent
  ],
  imports: [//imports property specifying those modules that needs to be imported or the modules upon which our module is dependent upon 
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,//include those modules in to the imports of the ng-module declarator 
  	MaterialModule,
  	FlexLayoutModule
  ],
  providers: [],//here comes the services that our module use 
  bootstrap: [AppComponent]
})
export class AppModule { } // module exports something that can be used by some another module
//typescript adds classes to the typical java script code
