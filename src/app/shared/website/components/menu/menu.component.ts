import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDrawer, MatDrawerMode, MatSidenav, MatSidenavContainer } from '@angular/material/sidenav';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  modeValue: MatDrawerMode = 'over';

  ngOnInit() {
  }

}
