import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { InventoryService } from '../services/inventory.service';
import { Inventory } from '../model/inventory';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-inventory-dialog',
  templateUrl: './inventory-dialog.component.html',
  styleUrls: ['./inventory-dialog.component.scss']
})
export class InventoryDialogComponent implements OnInit {
  inventoryDialogForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<InventoryDialogComponent>,
    public fb: FormBuilder,
    public snackBar: MatSnackBar,
    private inventoryService: InventoryService,
    @Inject(MAT_DIALOG_DATA) public data?: DialogData) {}

  ngOnInit() {
    this.inventoryDialogForm = this.fb.group({
      name: new FormControl(null, Validators.required),
      brand: new FormControl(null),
      quantity: new FormControl(0, Validators.required),
      additionalInfo: new FormControl(null),
      bundleInfo: new FormArray([
        this.createBundleInfoForm()
      ])
    });
  }

  get bundleInfo(): FormArray {
    return this.inventoryDialogForm.get('bundleInfo') as FormArray;
  }

  private createBundleInfoForm(quantityDefault: number = 1, priceDefault: number = 0): FormGroup {
    return this.fb.group({
      price: new FormControl(priceDefault, Validators.min(0.25)),
      quantity: new FormControl(quantityDefault, Validators.min(1))
    });
  }

  addBundle() {
    let highestQuantity = 0;

    this.bundleInfo.controls.forEach((bundle: FormGroup) => {
      highestQuantity = Math.max(bundle.get('quantity').value, highestQuantity);
    });

    this.bundleInfo.push(this.createBundleInfoForm(highestQuantity + 1));
  }

  removeBundle(index: number) {
    this.bundleInfo.controls.splice(index, 1);
  }

  cancel() {
    this.dialogRef.close();
  }

  closeAndReturnInventory() {
    if (this.inventoryDialogForm.invalid) {
      this.snackBar.open('Oops! You have missing information for the inventory', 'Close', {
        duration: 3000
      });
    } else {
      this.dialogRef.close(this.inventoryDialogForm.value);
      this.inventoryService.newInventory(this.inventoryDialogForm.value as Inventory);
    }
  }
}
