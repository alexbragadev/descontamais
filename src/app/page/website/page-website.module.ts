import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    MatSlideToggleModule
  ],
  exports: [
    HomeComponent
  ]
})
export class PageWebsiteModule { }
