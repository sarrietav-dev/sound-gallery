import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Audio } from '../../models/Audio';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AudioStorageService {
  constructor(private db: AngularFirestore) {}

  getAudios(): Observable<Audio[]> {
    return this.db.collection<Audio>('audios').valueChanges();
  }
}
