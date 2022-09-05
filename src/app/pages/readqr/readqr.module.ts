import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReadqrPageRoutingModule } from './readqr-routing.module';

import { ReadqrPage } from './readqr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReadqrPageRoutingModule
  ],
  declarations: [ReadqrPage]
})
export class ReadqrPageModule {}
