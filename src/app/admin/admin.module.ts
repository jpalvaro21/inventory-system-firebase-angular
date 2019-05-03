import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminMainComponent } from './admin-main/admin-main.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CoreModule } from '../core/core.module';
import { MatSnackBarModule } from '@angular/material';

@NgModule({
  declarations: [
    AdminMainComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CoreModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule
  ],
  entryComponents: [
    AdminMainComponent
  ]
})
export class AdminModule { }
