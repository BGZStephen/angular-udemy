import { Component } from '@angular/core';
import { LifecycleComponent } from "./lifecycle.component"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  delete = false;
  test = "staring value";
  boundValue: 1000;  
}
