import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { ArtPiece } from '../models/item.interface';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(public firestore: AngularFirestore) { }

  getArtList(): AngularFirestoreCollection<ArtPiece> {
    return this.firestore.collection(`artcollections`);
  }
}
