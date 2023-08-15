import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Store } from '@ngrx/store';
import { selectNavigation } from '../sidebar/state/navigation.selectors';

import { AppRoute } from '../sidebar/interfaces/app-route';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  currentPath$ = this.store.select<AppRoute>(selectNavigation);

  constructor(
    private store: Store
  ) {}
}
