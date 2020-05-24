import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpParams} from '@angular/common/http';

import { DetailsPage } from './details.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [HttpParams]
})
export class DetailsPageRoutingModule {}
