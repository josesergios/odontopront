import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProcedurePageRoutingModule } from './procedure-routing.module';

import { ProcedurePage } from './procedure.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProcedurePageRoutingModule
  ],
  declarations: [ProcedurePage]
})
export class ProcedurePageModule {}
