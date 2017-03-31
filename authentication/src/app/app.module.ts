import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SignupComponent } from "./unprotected/signup.component"
import { SigninComponent } from "./unprotected/signin.component"
import { ProtectedComponent } from "./protected/protected.component"
import { HeaderComponent } from "./shared/header.component"
import { routing } from "./app.routes";
import { AppComponent } from './app.component';
import { AuthService } from "./shared/auth.service"

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    ProtectedComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
