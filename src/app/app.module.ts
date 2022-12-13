import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule//si se llama el httpclient en un servicio debe estar tambien llamaod el httpclienmodule si no habra errores
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
