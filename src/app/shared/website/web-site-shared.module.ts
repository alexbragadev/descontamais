import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { AppComponent } from 'src/app/app.component';
import { SearchComponent } from './components/search/search.component';
import { UserAccountComponent } from './components/user-account/user-account.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    MenuComponent,
    SearchComponent,
    UserAccountComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  exports: [
    MenuComponent,
    SearchComponent,
    UserAccountComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class WebSiteSharedModule { }
