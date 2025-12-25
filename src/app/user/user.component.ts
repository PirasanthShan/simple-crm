import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy } from '@angular/core';
import { MATERIAL_IMPORTS } from '../material.imports';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from '../../models/user.class';

import { Firestore, collection, collectionData, addDoc } from '@angular/fire/firestore';
import { Subject, firstValueFrom } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { RouterLink, RouterLinkActive } from "@angular/router";

type UserDoc = User & { id: string };

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, ...MATERIAL_IMPORTS, RouterLink, RouterLinkActive],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnDestroy {
  user = new User();
  allUsers: UserDoc[] = [];

  private dialog = inject(MatDialog);
  private firestore = inject(Firestore);
  private destroy$ = new Subject<void>();

  ngOnInit(): void {
  const usersRef = collection(this.firestore, 'users');

  collectionData(usersRef, { idField: 'id' })
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next: (users) => {
        this.allUsers = users as UserDoc[];
        console.log('Received changes from DB', this.allUsers);
      },
      error: (err) => {
        console.error('Firestore read blocked (rules/auth/project/appcheck):', err);
      },
    });
}


  async openDialog() {
    const ref = this.dialog.open(DialogAddUserComponent);
    const result = await firstValueFrom(ref.afterClosed());
    if (!result) return;

    const usersRef = collection(this.firestore, 'users');
    await addDoc(usersRef, result);
    console.log('User added:', result);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
