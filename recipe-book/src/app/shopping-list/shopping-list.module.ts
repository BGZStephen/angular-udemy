import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ShoppingListComponent, ShoppingListAddComponent } from './index';
import { ShoppingListService } from "./shopping-list.service";
import { shoppingListRouting } from "./shopping-list.routes"

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingListAddComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    shoppingListRouting
  ],
})
export class ShoppingListModule {

}
