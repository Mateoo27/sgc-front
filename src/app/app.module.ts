import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from "./app.component";
import { ListaCobrosComponent } from "./lista-cobros/lista-cobros.component";
import { HttpClientModule } from "@angular/common/http";
import { RegistrarCobroComponent } from "./registrar-cobro/registrar-cobro.component";
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    ListaCobrosComponent,
    RegistrarCobroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {}

