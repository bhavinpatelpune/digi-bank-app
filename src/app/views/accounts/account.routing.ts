import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountDetailsComponent } from './account-details/account-details.component';
import { AccountStatementComponent } from './account-statement/account-statement.component';
import { AccountSummaryComponent } from './account-summary/account-summary.component';
import { ChequebookComponent } from './chequebook/chequebook.component';

import { AccountComponent } from './account.component';

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
  },
  {
    path: 'details',
    component: AccountDetailsComponent,
    data: {
      title: 'Account details',
    },
  },
  {
    path: 'details/:id',
    component: AccountDetailsComponent,
    data: {
      title: 'Account details',
    },
  },
  {
    path: 'statement',
    component: AccountStatementComponent,
    data: {
      title: 'Account statement',
    },
  },
  {
    path: 'summary',
    component: AccountSummaryComponent,
    data: {
      title: 'Account summary',
    },
  },
  {
    path: 'chequebook',
    component: ChequebookComponent,
    data: {
      title: 'Chequebook',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
