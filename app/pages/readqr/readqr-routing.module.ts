import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReadqrPage } from './readqr.page';

const routes: Routes = [
  {
    path: '',
    component: ReadqrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReadqrPageRoutingModule {}
