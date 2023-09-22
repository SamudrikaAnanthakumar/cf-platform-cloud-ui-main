import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'core-pf-side-menu',
  standalone: true,
  imports: [CommonModule, RouterModule, MatListModule, MatIconModule],
  templateUrl: './pf-side-menu.component.html',
  styleUrls: ['./pf-side-menu.component.scss']
})
export class PfSideMenuComponent {

  @Input() sideNav: any;

  onSelectMatListItem = () => {
    this.sideNav?.close();
  }

}
