import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { AppComponent } from 'src/app/app.component';
import { SearchComponent } from './components/search/search.component';
import { UserAccountComponent } from './components/user-account/user-account.component';

@NgModule({
  declarations: [
    MenuComponent,
    SearchComponent,
    UserAccountComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class WebSiteSharedModule { }
