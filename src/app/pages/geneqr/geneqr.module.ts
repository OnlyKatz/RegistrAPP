import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeneqrPageRoutingModule } from './geneqr-routing.module';

import { GeneqrPage } from './geneqr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeneqrPageRoutingModule
  ],
  declarations: [GeneqrPage]
})
export class GeneqrPageModule {}
