import { Component, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Rx";

@Component({
  moduleId: module.id,
  selector: 'app-user-component',
  template: `
      <h1>User Component</h1>
    `,
})
export class UserComponent {

}
