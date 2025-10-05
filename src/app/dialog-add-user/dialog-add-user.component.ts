import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MATERIAL_IMPORTS } from '../material.imports';

@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  imports: [FormsModule,MATERIAL_IMPORTS],
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent {}
