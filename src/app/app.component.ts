import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './common-components/sidebar/sidebar.component';
import { HeaderComponent } from './common-components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, SidebarComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'unspend';
}
