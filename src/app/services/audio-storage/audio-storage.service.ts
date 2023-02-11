import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Audio } from '../../models/Audio';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AudioStorageService {
  constructor(
    private storage: AngularFireStorage,
    private db: AngularFirestore
  ) {}

  getAudioUrl(): Observable<string> {
    return this.storage.ref('Que te quites.mp3').getDownloadURL();
  }

  getAudios(): Observable<Audio[]> {
    return this.db.collection<Audio>('audios').valueChanges();
  }
}
