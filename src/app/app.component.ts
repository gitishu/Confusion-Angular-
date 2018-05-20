///file supports root component that forms part of our angular application 
import { Component } from '@angular/core';//importing the compoennet class from the angular core library.

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
}
