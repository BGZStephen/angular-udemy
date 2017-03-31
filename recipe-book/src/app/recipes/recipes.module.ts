import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { ReactiveFormsModule } from "@angular/forms"
import { RecipesComponent, RecipeStartComponent, RecipeItemComponent, RecipeListComponent, RecipeEditComponent, RecipeDetailComponent } from "./index"
import { recipesRouting } from "./recipes.routes"

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
    recipesRouting,
  ],
})

export class RecipesModule {

}
