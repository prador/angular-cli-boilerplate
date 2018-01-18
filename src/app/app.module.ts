import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { routedComponents }   from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { pipe } from 'rxjs/util/pipe';
import 'rxjs/Rx';
@NgModule({
  declarations: [
    AppComponent,
    routedComponents,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}