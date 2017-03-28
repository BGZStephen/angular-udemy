import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { Observable } from "rxjs/Rx";

@Component({
    moduleId: module.id,
    selector: 'app-user-edit',
    template: `
        <h3>User Edit</h3>
        <button (click)="done = true">Done</button>
        <button class="btn btn-alert" (click)="onNavigate()">Go Home</button>
    `
})
export class UserEditComponent {

}
