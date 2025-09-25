import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatToolbar, MatToolbarRow } from '@angular/material/toolbar';   
import { MatSidenavModule, MatDrawer } from '@angular/material/sidenav';
import { MatIcon } from '@angular/material/icon'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, 
            RouterOutlet, 
            MatToolbar, 
            MatToolbarRow, 
            MatSidenavModule,
            MatIcon,
            MatDrawer
           ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] 
})
export class AppComponent {
  title = 'simple-crm';
}
