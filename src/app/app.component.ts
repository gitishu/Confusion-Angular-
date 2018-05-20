///file supports root component that forms part of our angular application 
import { Component } from '@angular/core';//importing the component class from the angular core library.

@Component({//this is a decorator here that it internally takes an javascript object as an paramter here 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  // title = "hello angular cli how you are workin"; 
}//this component class is appended with an decorator here 

