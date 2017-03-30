import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent  {
  myValue = "lowercase";
  myDate = new Date(2017,2,30)
  values = ["Milk", "Bread", "Cheese"]
  asyncValue = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Data is here'), 2000);
  });
}
