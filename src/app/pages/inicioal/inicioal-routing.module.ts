import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioalPage } from './inicioal.page';

const routes: Routes = [
  {
    path: '',
    component: InicioalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioalPageRoutingModule {}
