import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeneqrPage } from './geneqr.page';

const routes: Routes = [
  {
    path: '',
    component: GeneqrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeneqrPageRoutingModule {}
