import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SlideBodyComponent } from './slide-body/slide-body.component';
import { ContentBodyComponent } from './content-body/content-body.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContentBody2Component } from './content-body2/content-body2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SlideBodyComponent,
    ContentBodyComponent,
    ContentBody2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
