import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddBillerComponent } from './add-biller/add-biller.component';
import { ViewBillerComponent } from './view-biller/view-biller.component';
import { PayBillerComponent } from './pay-biller/pay-biller.component';

import { BillerComponent } from './biller.component';

const routes: Routes = [
  {
    path: '',
    component: BillerComponent,
  },
  {
    path: 'add-biller',
    component: AddBillerComponent,
    data: {
      title: 'Add biller',
    },
  },
  {
    path: 'view-biller',
    component: ViewBillerComponent,
    data: {
      title: 'View biller',
    },
  },
  {
    path: 'bill-pay',
    component: PayBillerComponent,
    data: {
      title: 'Pay biller',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BillerRoutingModule {}
