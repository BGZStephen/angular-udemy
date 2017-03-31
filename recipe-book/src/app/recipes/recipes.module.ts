import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { ReactiveFormsModule } from "@angular/forms"
import { RecipesComponent, RecipeStartComponent, RecipeItemComponent, RecipeListComponent, RecipeEditComponent, RecipeDetailComponent } from "./index"
import { routing } from "../app.routes"

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeStartComponent,
    RecipeItemComponent,
    RecipeListComponent,
    RecipeEditComponent,
    RecipeDetailComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    routing,
  ],
})

export class RecipesModule {

}
