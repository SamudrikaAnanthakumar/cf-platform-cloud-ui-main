import { CommonModule } from '@angular/common';
import { PfHeaderComponent } from '../pf-header/pf-header.component';
import { PfFooterComponent } from '../pf-footer/pf-footer.component';
import { PfSideMenuComponent } from '../pf-side-menu/pf-side-menu.component';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';

export const imports = [CommonModule, RouterOutlet, PfHeaderComponent, PfFooterComponent, PfSideMenuComponent, MatSidenavModule];