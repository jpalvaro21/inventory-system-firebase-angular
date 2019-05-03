import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Inventory } from 'src/app/core/model/inventory';

@Component({
  selector: 'app-pos-main',
  templateUrl: './pos-main.component.html',
  styleUrls: ['./pos-main.component.sass']
})
export class PosMainComponent implements OnInit {
  inventory: Observable<Inventory[]>;

  constructor(private db: AngularFirestore) {
    this.inventory = db.collection('inventory').snapshotChanges().pipe(
      map(actions => {
      return actions.map(a => {
          const data = a.payload.doc.data() as Inventory;
          const id = a.payload.doc.id;
          return { id, ...data };
      });
      })
    );
  }

  ngOnInit() {
  }

  add(item: Inventory) {
    item.quantity++;
    const itemDoc = this.db.doc<Inventory>(`inventory/${item.id}`);

    itemDoc.update(item);
  }

  remove(item: Inventory) {
    if (item.quantity - 1 >= 0) {
      item.quantity--;
      const itemDoc = this.db.doc<Inventory>(`inventory/${item.id}`);
      itemDoc.update(item);
    }
  }

}
