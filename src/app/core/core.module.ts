import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatInputModule,
  MatDialogModule,
  MatFormFieldModule,
  MatDividerModule,
  MatSnackBarModule
} from '@angular/material';

import { ShellComponent } from './shell/shell.component';
import { InventoryDialogComponent } from './inventory-dialog/inventory-dialog.component';

@NgModule({
  declarations: [
    ShellComponent,
    InventoryDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatDividerModule,
    MatInputModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSnackBarModule,

    ReactiveFormsModule
  ],
  exports: [
    ShellComponent
  ],
  entryComponents: [
    InventoryDialogComponent
  ]
})
export class CoreModule { }
