import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { FirestoreDocument } from './firestore-document';

export class Inventory extends FirestoreDocument {
  name: string;
  brand?: string;
  additionalInfo: string;
  quantity: number;
  bundleInfo: Array<Bundle> = [];
}

export class Bundle {
  price: number;
  quantity: number;
}
