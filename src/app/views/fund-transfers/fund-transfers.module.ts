import { NgModule } from '@angular/core';

import { FundTransfersRoutingModule } from './fund-transfers.routing';

import { SelfAccountComponent } from './self-account/self-account.component';
import { LocalBankAccountComponent } from './local-bank-account/local-bank-account.component';
import { ForeignBankAccountComponent } from './foreign-bank-account/foreign-bank-account.component';
import { AddBeneficiaryComponent } from './add-beneficiary/add-beneficiary.component';
import { ViewBeneficiaryComponent } from './view-beneficiary/view-beneficiary.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FundTransfersRoutingModule,
    TooltipModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    SelfAccountComponent,
    LocalBankAccountComponent,
    ForeignBankAccountComponent,
    AddBeneficiaryComponent,
    ViewBeneficiaryComponent
  ]
})
export class FundTransfersModule { }
