import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes } from "@angular/router";
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { ShoppingListService } from "./shopping-list/shopping-list.service";
import { RecipeService } from "./recipes/recipe.service";
import { routing } from "./app.routes";
import { CoreModule } from "./core.module"

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    CoreModule,
  ],
  providers: [RecipeService, ShoppingListService],
  bootstrap: [AppComponent],
})
export class AppModule { }
