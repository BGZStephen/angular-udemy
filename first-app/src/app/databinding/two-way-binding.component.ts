import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fa-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent {
  person = {
    name: "Stephen",
    age: 27,
  }
}
