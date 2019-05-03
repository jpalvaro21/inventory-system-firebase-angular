import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { FirestoreDocument } from './firestore-document';

export class Inventory extends FirestoreDocument {
  name: string;
  brand?: string;
  additionalInfo: string;
  price: number;
  quantity: number;
}
