import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar'; // Ajout du module MatToolbarModule
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    MatTabsModule,
    MatToolbarModule, // Ajout du module MatToolbarModule
    BrowserAnimationsModule, // Ajout du module BrowserAnimationsModule
    MatGridListModule,
    MatMenuModule,
    MatCardModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    MatTabsModule,
    MatToolbarModule, // Ajout du module MatToolbarModule
    BrowserAnimationsModule, // Ajout du module BrowserAnimationsModule
    MatGridListModule,
    MatMenuModule,
    MatCardModule
  ]
})
export class SharedModule { }
