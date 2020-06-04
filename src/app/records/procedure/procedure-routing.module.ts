import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProcedurePage } from './procedure.page';

const routes: Routes = [
  {
    path: '',
    component: ProcedurePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProcedurePageRoutingModule {}
