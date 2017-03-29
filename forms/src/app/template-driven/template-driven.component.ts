import { Component } from '@angular/core';
import { NgForm} from "@angular/forms"

@Component({
  moduleId: module.id,
  selector: 'template-driven',
  templateUrl: 'template-driven.component.html',
  styles: [`
    input.ng-valid {
      border: 1px solid green;
    }
  `],
})
export class TemplateDrivenComponent {
  user = {
    username: '',
    email: '',
    password: '',
    gender: ''
  }

  genders = [
    'male',
    'female',
  ]

  onSubmit(form: NgForm) {
    console.log(form.value)
  }
}
