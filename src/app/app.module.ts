import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { SharedModule } from './shared/shared.module'; // Ajout du module ShareModule

import { AppComponent } from './app.component';
import { HeaderComponent } from './base/header/header.component';
import { FooterComponent } from './base/footer/footer.component';
import { FirstboxComponent } from './firstbox/firstbox.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FirstboxComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    SharedModule,
    MatMenuModule // Ajout du module ShareModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
