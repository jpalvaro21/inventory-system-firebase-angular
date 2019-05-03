import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { InventoryDialogComponent } from 'src/app/core/inventory-dialog/inventory-dialog.component';
import { take } from 'rxjs/operators';
import { InventoryService } from 'src/app/core/services/inventory.service';
import { Observable } from 'rxjs';
import { Inventory } from 'src/app/core/model/inventory';

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.scss']
})
export class AdminMainComponent implements OnInit {
  inventory: Observable<Inventory[]>;

  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private inventoryService: InventoryService
  ) { }

  ngOnInit() {
    this.inventory = this.inventoryService.getInventory();
  }

  addInventory() {
    const dialogRef = this.dialog.open(InventoryDialogComponent, {
      hasBackdrop: true,
      disableClose: true
      // width: '250px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().pipe(take(1)).subscribe(result => {
      if (result) {
        this.snackBar.open(
          `Succesfully added ${result.name}`,
          'Close',
          { duration: 3000 }
        );
      }
    });
  }
}
