import { Component } from '@angular/core';
import { HighlightDirective } from './highlight.directive';

@Component({
  selector: 'dir-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private items = [
    {firstName: "Stephen", lastName: "Wright"},
    {firstName: "Lydia", lastName: "Wright"},
    {firstName: "Isaac", lastName: "Wright"},
    {firstName: "Reuben", lastName: "Wright"},
    {firstName: "Wendy", lastName: "Girling"}
     ];
  private value = 20;
  private switch = true;
  onSwitch() {
    this.switch = !this.switch;
  }
}
