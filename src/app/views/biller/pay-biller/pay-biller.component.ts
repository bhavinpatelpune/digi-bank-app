import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../../../services/app.service';

@Component({
  selector: 'app-pay-biller',
  templateUrl: './pay-biller.component.html',
  styleUrls: ['./pay-biller.component.scss']
})
export class PayBillerComponent implements OnInit {

  actForm: FormGroup;
  billerList : any = [];

  constructor(private appservice: AppService, private router: Router, private formBuilder: FormBuilder) {}

  getBillers() {
    this.appservice.getBillers(localStorage.getItem('id')).subscribe((data) => {
      this.billerList = data;
    });
  }
  ngOnInit(): void {
    this.getBillers();
    this.actForm = this.formBuilder.group({
      cbBillers: ['', Validators.required],
    });
  }

}
