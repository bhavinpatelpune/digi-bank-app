import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelfAccountComponent } from './self-account/self-account.component';
import { LocalBankAccountComponent } from './local-bank-account/local-bank-account.component';
import { ForeignBankAccountComponent } from './foreign-bank-account/foreign-bank-account.component';
import { AddBeneficiaryComponent } from './add-beneficiary/add-beneficiary.component';
import { ViewBeneficiaryComponent } from './view-beneficiary/view-beneficiary.component';
import { FundTransfersComponent } from './fund-transfer.component';

const routes: Routes = [
  {
    path: '',
    component: FundTransfersComponent,
  },
  {
    path: 'self-account',
    component: SelfAccountComponent,
    data: {
      title: 'To self account',
    },
  },
  {
    path: 'local-bank',
    component: LocalBankAccountComponent,
    data: {
      title: 'To local bank',
    },
  },
  {
    path: 'foreign-bank',
    component: ForeignBankAccountComponent,
    data: {
      title: 'To foreign bank',
    },
  },
  {
    path: 'add-bene',
    component: AddBeneficiaryComponent,
    data: {
      title: 'Add beneficiary',
    },
  },
  {
    path: 'view-bene',
    component: ViewBeneficiaryComponent,
    data: {
      title: 'View beneficiaries',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FundTransfersRoutingModule {}
