import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-icon.component.html',
  styleUrls: ['./nav-icon.component.scss']
})
export class NavIconComponent {
  @Input() id: string = '';
}
