//this is the root module for the angular application..
import { BrowserModule } from '@angular/platform-browser';//importing this module from the library mentioned.
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/';

import { AppComponent } from './app.component';

@NgModule({//this class has the declarator associated with it which is an NgModule..
  declarations: [
    AppComponent
  ],
  imports: [//imports property specifying those modules that needs to be imported or the modules upon which our module is dependent upon 
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],//here comes the services that our module use 
  bootstrap: [AppComponent]
})
export class AppModule { } // module exports something that can be used by some another module
//typescript adds classes to the typical java script code
