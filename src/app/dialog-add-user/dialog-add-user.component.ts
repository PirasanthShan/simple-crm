import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MATERIAL_IMPORTS } from '../material.imports';
import { User } from '../../models/user.class';
import { CommonModule, NgIf } from '@angular/common';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';


@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  imports: [FormsModule, ...MATERIAL_IMPORTS, NgIf, CommonModule],
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})

export class DialogAddUserComponent {
  user = new User();
  birthDate: Date | null = null;
  loading = false;

  constructor(private firestore: Firestore) {}


 saveUser() {
  this.loading = true;

  setTimeout(async () => {
    try {
      this.user.birthDate = this.birthDate ? this.birthDate.getTime() : null;
      const jsonData = this.user.toJson();

      const userCollection = collection(this.firestore, 'users'); // 🔁 Firestore collection
      await addDoc(userCollection, jsonData); // 🔥 Daten speichern in Firestore

      console.log('✅ User erfolgreich in Firestore gespeichert:', jsonData);
    } catch (error) {
      console.error('❌ Fehler beim Speichern in Firestore:', error);
    } finally {
      this.loading = false;
    }
  }, 500); // Kurze Verzögerung, um Ladebalken anzuzeigen
}

}





