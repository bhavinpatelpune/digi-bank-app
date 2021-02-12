import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { Router } from '@angular/router';
//import * as moment from 'moment';
@Component({
  templateUrl: 'dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  accountsummaryList: any = [];
  customerName: string;
  greetingMsg: string;
  currentHour: number;

  constructor(private appservice: AppService, private router: Router) {}

  getAccountSummary() {
    this.appservice.getAccountSummary(localStorage.getItem('id')).subscribe((data) => {
      this.accountsummaryList = data;
      this.appservice.accountSummaryServiceData = data;
    });
  }

  greetingText() {
    const date: Date = new Date();
    this.currentHour = date.getHours();
    if (this.currentHour >= 12 && this.currentHour <= 17) {
      return (this.greetingMsg = 'Good Afternoon!');
    } else if (this.currentHour <= 18) {
      return (this.greetingMsg = 'Good Evening!');
    } else {
      return (this.greetingMsg = 'Good Morning!');
    }
  }

  ngOnInit(): void {
    this.customerName = window.localStorage.getItem('customername');
    this.getAccountSummary();
    this.greetingText();
  }

  ViewStatement(_row: any) {
    this.router.navigate(['/account/details/'], { queryParams: { Accounttype: _row.Accounttype, Accountnumber: _row.Accountnumber }, queryParamsHandling: 'merge' });
  }
}
