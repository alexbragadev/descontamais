import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WebSiteSharedModule } from './shared/website/web-site-shared.module';
import { PageWebsiteModule } from './page/website/page-website.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PageWebsiteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
