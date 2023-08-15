import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Store } from '@ngrx/store';

import { NavigationActions } from './state/navigation.actions';

import { AppRoute } from './interfaces/app-route';
import { routesConfig } from './routes-config';

import { NavIconComponent } from './nav-icon/nav-icon.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, NgFor, RouterLink, RouterLinkActive, NavIconComponent],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  routes: AppRoute[] = routesConfig;
  
  constructor(
    private store: Store
  ) {}

  onSetCurrentPath(pathId: string) {
    this.store.dispatch(NavigationActions.setPath({ pathId }));
  }
}
