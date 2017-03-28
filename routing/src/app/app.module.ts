import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { UserComponent } from "./user/user.component";
import { HomeComponent } from "./home-component.component";
import { UserEditComponent } from "./user/user-edit.component";
import { UserDetailComponent } from "./user/user-detail.component";
import { routing } from "./app.routing";

@NgModule({
    declarations: [
        AppComponent,
        UserComponent,
        UserDetailComponent,
        UserEditComponent,
        HomeComponent
    ],
    imports: [BrowserModule, routing],
    bootstrap: [AppComponent],
    providers: []
})
export class AppModule {}
