import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MATERIAL_IMPORTS } from '../material.imports';
import { User } from '../../models/user.class';

@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  imports: [FormsModule,MATERIAL_IMPORTS],
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent {
  user = new User();
  birthDate: Date | null = null;
  
  saveUser(){
    this.user.birthDate = this.birthDate ? this.birthDate.getTime() : null
    console.log('Current user', this.user )
  }

}
