import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inventory } from '../model/inventory';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  inventory: Observable<Inventory[]>;
  private inventoryCollection: AngularFirestoreCollection<Inventory>;

  constructor(private db: AngularFirestore) {
    this.inventoryCollection = db.collection('inventory');
    this.inventory = this.inventoryCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
            const data = a.payload.doc.data() as Inventory;
            const id = a.payload.doc.id;
            return { id, ...data };
        });
      })
    );
  }

  getInventory(): Observable<Inventory[]> {
    return this.inventory;
  }

  updateInvetoryQuantity(inventoryId: string, quantityVariation: number): Promise<void> {
    const inventoryRef = this.db.firestore.collection('inventory').doc(`inventory/${inventoryId}`);

    return this.db.firestore.runTransaction((transaction) => {
      return transaction.get(inventoryRef).then((inventoryDoc) => {
        if (!inventoryDoc.exists) {
          throw new Error('Inventory is missing!');
        }

        const invetoryDetails = inventoryDoc.data();
        const newQuatinty = invetoryDetails.quantity + quantityVariation;

        if (newQuatinty < 0) {
          const requestedQuantity = quantityVariation * (-1);
          // tslint:disable-next-line:max-line-length
          throw new Error(`Insufficient quantity of ${invetoryDetails.name}: Remaing(${invetoryDetails.quantity}), Requested(${requestedQuantity})`);
        }

        transaction.update(inventoryRef, { quantity: newQuatinty });
      });
    }).then(() => {
        console.log('Transaction successful');
    }).catch((error) => {
        console.log('Transaction failed: ', error);
    });
  }

  newInventory(inventory: Inventory) {
    this.inventoryCollection.add(inventory);
  }
}
