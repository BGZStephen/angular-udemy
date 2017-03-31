import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes } from "@angular/router";
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { RecipesComponent, RecipeListComponent, RecipeItemComponent, RecipeDetailComponent, RecipeService } from "./recipes";
import { DropdownDirective } from './dropdown.directive';
import { ShoppingListService } from "./shopping-list/shopping-list.service";
import { routing } from "./app.routes";
import { RecipeStartComponent } from './recipes/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { ShoppingListModule } from "./shopping-list/shopping-list.module"

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    ReactiveFormsModule,
    ShoppingListModule
  ],
  providers: [RecipeService, ShoppingListService],
  bootstrap: [AppComponent],
})
export class AppModule { }
