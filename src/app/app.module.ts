//this is the root module for the angular application..
import { BrowserModule } from '@angular/platform-browser';//importing this module from the library mentioned.
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MaterialModule} from '@angular/material'; 
import {FlexLayoutModule} from '@angular/flex-layout'; 
// flexlayout versions ke saath suppot nhi kar rha nad agar ise theek kiya to baaki errors bhut aa rhe hai
//latest version 6 me angular/cdk-bidi module find nhi kar pa rha tha islie versions hi maine 2.0.0-beta.12
// Package                           Version
// -----------------------------------------------------------
// @angular-devkit/architect         0.6.3
// @angular-devkit/build-angular     0.6.3
// @angular-devkit/build-optimizer   0.6.3
// @angular-devkit/core              0.6.3
// @angular-devkit/schematics        0.6.3
// @angular/cdk                      2.0.0-beta.8
// @angular/cli                      6.0.3
// @angular/flex-layout              2.0.0-beta.10
// @angular/material                 2.0.0-beta.8
// @ngtools/webpack                  6.0.3
// @schematics/angular               0.6.3
// @schematics/update                0.6.3
// rxjs                              6.1.0
// typescript                        2.7.2
// webpack                           4.8.3




import 'hammerjs';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { DishService } from './services/dish.service';

@NgModule({//this class has the declarator associated with it which is an NgModule..
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent
  ],
  imports: [//imports property specifying those modules that needs to be imported or the modules upon which our module is dependent upon 
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,//include those modules in to the imports of the ng-module declarator 
  	MaterialModule,
  	FlexLayoutModule
  ],
  providers: [ DishService ],//here comes the services that our module use 
  bootstrap: [AppComponent]
})
export class AppModule { } // module exports something that can be used by some another module
//typescript adds classes to the typical java script code
