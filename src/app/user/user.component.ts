import { Component, inject } from '@angular/core';
import { MATERIAL_IMPORTS } from '../material.imports';          
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from '../../models/user.class';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MATERIAL_IMPORTS],                                 
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']                             
})
export class UserComponent {
  
  user = new User();
  
  
  private dialog = inject(MatDialog);                             

  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }
}
