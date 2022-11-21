import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioalPageRoutingModule } from './inicioal-routing.module';

import { InicioalPage } from './inicioal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioalPageRoutingModule
  ],
  declarations: [InicioalPage]
})
export class InicioalPageModule {}
