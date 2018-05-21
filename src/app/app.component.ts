///file supports root component that forms part of our angular application 
import { Component } from '@angular/core';//importing the component class from the angular core library.
//when we import component we have to define it as a decorator here.. 
@Component({//this is a decorator here that it internally takes an javascript object as an paramter here 
  selector: 'app-root',
  templateUrl: './app.component.html',//name of the template file for this particular component
  styleUrls: ['./app.component.scss']
})
export class AppComponent {//here we are applying component to the class because it is nothing but a js or ts class. 
  title = 'app';//here by using export we can import this component in to my app module
  // title = "hello angular cli how you are workin"; 
}//this component class is appended with an decorator here 

