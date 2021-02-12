import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CommonModule } from '@angular/common';

import { TabsModule } from 'ngx-bootstrap/tabs';
import { HttpClientModule } from '@angular/common/http';

import { BillerRoutingModule  } from './biller.routing';

import { AddBillerComponent } from './add-biller/add-biller.component';
import { ViewBillerComponent } from './view-biller/view-biller.component';
import { PayBillerComponent } from './pay-biller/pay-biller.component';

@NgModule({
  imports: [
    FormsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    TabsModule,
    HttpClientModule,
    BillerRoutingModule,
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    AddBillerComponent,
    ViewBillerComponent,
    PayBillerComponent
  ]
})
export class BillerModule { }
