import { Component, OnDestroy } from '@angular/core';
import { Router } from "@angular/router";
import { Subscription } from "rxjs/Rx";

@Component({
  moduleId: module.id,
  selector: 'app-home-component',
  template: `
    <h1>
      Home Component!
    </h1>
    <hr>
    {{param}}
  `,
  styles: []
})
export class HomeComponent {

}
