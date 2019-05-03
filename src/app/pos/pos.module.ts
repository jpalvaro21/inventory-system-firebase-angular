import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PosRoutingModule } from './pos-routing.module';
import { PosMainComponent } from './pos-main/pos-main.component';

@NgModule({
  declarations: [
    PosMainComponent
  ],
  imports: [
    CommonModule,
    PosRoutingModule
  ],
  entryComponents: [
    PosMainComponent
  ]
})
export class PosModule { }
