import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  loadChildren: './shared/shared.module#SharedModule'
}, {
  path: 'admin',
  loadChildren: './admin/admin.module#AdminModule'
}, {
  path: 'pos',
  loadChildren: './pos/pos.module#PosModule'
}, {
  path: '**',
  redirectTo: ''
// }, {
//   path: 'admin/**',
//   redirectTo: '/pos'
// }, {
//   path: 'pos/**',
//   redirectTo: '/admin'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
