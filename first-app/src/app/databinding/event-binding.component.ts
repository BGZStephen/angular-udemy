import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'fa-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {
  @Output() clicked = new EventEmitter<string>();
  onClicked() {
    this.clicked.emit("It worked!");
  }
}
