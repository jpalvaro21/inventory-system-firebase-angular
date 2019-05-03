import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ModeComponent } from './mode/mode.component';

@NgModule({
  declarations: [
    ModeComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
  ],
  exports: []
})
export class SharedModule { }
