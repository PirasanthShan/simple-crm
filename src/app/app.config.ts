import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAnalytics, provideAnalytics, ScreenTrackingService } from '@angular/fire/analytics';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideFirebaseApp(() => initializeApp({
      projectId: 'simple-crm-4ea49',
      appId: '1:751870300749:web:b24d41f1c049683e7a4204',
      storageBucket: 'simple-crm-4ea49.appspot.com', // ✅ korrigiert
      apiKey: 'AIzaSyB4MrG7gJJiTihf_c24hyJTabXa1h92T9k',
      authDomain: 'simple-crm-4ea49.firebaseapp.com',
      messagingSenderId: '751870300749',
      measurementId: 'G-0J3SX7SXBE'
    })),
    provideAnalytics(() => getAnalytics()),
    ScreenTrackingService,
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    provideStorage(() => getStorage())
  ]
};
