import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ShoppingListComponent, ShoppingListAddComponent } from './index';
import { ShoppingListService } from "./shopping-list.service";

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingListAddComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
})
export class ShoppingListModule {

}
