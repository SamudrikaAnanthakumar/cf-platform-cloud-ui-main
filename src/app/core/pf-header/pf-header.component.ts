import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'

@Component({
  selector: 'core-pf-header',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule],
  templateUrl: './pf-header.component.html',
  styleUrls: ['./pf-header.component.scss']
})
export class PfHeaderComponent {

  @Input() sideNav: any;

  toggleSideNav() {
    this.sideNav.toggle();
  }

}
