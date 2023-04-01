import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { WebSiteSharedModule } from 'src/app/shared/website/web-site-shared.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    WebSiteSharedModule
  ],
  exports: [
    HomeComponent
  ]
})
export class PageWebsiteModule { }
