import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PosMainComponent } from './pos-main/pos-main.component';

const routes: Routes = [{
  path: '',
  component: PosMainComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PosRoutingModule { }
