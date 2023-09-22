import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PfLayoutComponent } from './core/pf-layout/pf-layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PfLayoutComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cf-platform-cloud';
}
