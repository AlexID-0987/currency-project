import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeaderEComponent } from './header-e/header-e.component';
import { ConverterComponent } from './converter/converter.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ConverterApiCurrencyComponent } from './converter-api-currency/converter-api-currency.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderEComponent,
    ConverterComponent,
    ConverterApiCurrencyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
