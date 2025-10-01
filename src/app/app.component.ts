import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLinkActive, RouterModule, RouterLink } from '@angular/router';

import { MatToolbar, MatToolbarRow } from '@angular/material/toolbar';   
import { MatSidenavModule, MatDrawer } from '@angular/material/sidenav';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon'
import { MatDialogModule } from '@angular/material/dialog';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
    RouterOutlet,
    MatToolbar,
    MatToolbarRow,
    MatSidenavModule,
    MatIcon,
    MatDrawer, 
    RouterLinkActive,
    RouterModule,
    RouterLink,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    MatDialogModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] 
})
export class AppComponent {
  title = 'simple-crm';
}
