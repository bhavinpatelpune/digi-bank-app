import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import {UserProfileComponent} from './user-profile.component';
import {UserProfileRoutingModule} from './user-profile.routing';

@NgModule({
  imports: [
    FormsModule,
    UserProfileRoutingModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ UserProfileComponent ]
})
export class UserProfileModule { }
