import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../../../services/app.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { AccountModel } from '../acctModel';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css'],
})
export class AccountDetailsComponent implements OnInit, AfterViewInit {
  acctdetails: any = [];
  sub: any;

  Customername: string;
  Accountnumber: string;
  SingleJoint: string;
  Accounttype: string;
  Accountstatus: string;
  Currency: string;
  Chqeuebook: string;
  Overdraft: string;
  Standingorder: string;
  avail_balance: string;

  actForm: FormGroup;
  submitted: boolean;
  error = '';
  showTable: boolean;

  // Transaction Date	Value Date	Reference	Description	Debit	Credit	Balance
  displayedColumns: string[] = ['txn_date', 'REFERENCE', 'PDESC', 'DEBIT', 'CREDIT', 'open_bal', 'close_bal'];
  // dataSource: MatTableDataSource<AccountModel>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  dataSource = new MatTableDataSource();
  actStmtData: AccountModel;
  actStmtList: AccountModel[];

  constructor(private appService: AppService, private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) {
    // Assign the data to the data source for the table to render
    this.actStmtData = {} as AccountModel;
  }

  ngAfterViewInit() {
    // Initializing Datatable pagination
    this.dataSource.paginator = this.paginator;
    // Initializing Datatable sort
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.showTable = false;
    this.loadAllAccounts(localStorage.getItem('id').toString());

    this.actForm = this.formBuilder.group({
      cbAccounts: ['', Validators.required],
    });

    this.route.queryParamMap.subscribe((params) => {
      this.sub = { ...params.keys, ...params };
      // console.log(this.sub);
      // console.log(this.sub.params.Accounttype);
      // console.log(this.sub.params.Accountnumber);
    });
    if (this.sub.params.Accounttype != null && this.sub.params.Accountnumber != null) {
      // console.log('throu query param');
      this.showTable = true;
      this.loadAccountDetailsByActNo(this.sub.params.Accountnumber);
      this.actForm.controls['cbAccounts'].setValue(this.sub.params.Accountnumber);
      this.loadAccountTransactions(this.sub.params.Accountnumber);
    } else {
      // console.log('without query param - ' + this.acctdetails);
      this.actForm.controls['cbAccounts'].setValue(this.acctdetails.Accountnumber);
      this.loadAccountDetailsByActNo(this.acctdetails[0].Accountnumber);
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toUpperCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onActSelect(paramActno: any) {
    this.showTable = true;
    this.loadAccountDetailsByActNo(paramActno);
    this.loadAccountTransactions(paramActno);
  }

  loadAllAccounts(paramId: string) {
    this.appService.getAccountSummary(paramId).subscribe(
      (data: any[]) => {
        this.acctdetails = data;
      },
      (err) => {
        console.error('There was an error while retrieving data!' + err);
      }
    );
  }

  loadAccountTransactions(paramAcctno: string) {
    this.appService.getAccountTransactionsByActNo(paramAcctno).subscribe(
      (data: any[]) => {
        this.actStmtList = data;
        this.dataSource.data = data;
      },
      (err) => {
        console.error('There was an error while retrieving data!' + err);
      }
    );
  }

  loadAccountDetailsByActNo(paramAcctno: string) {
    this.appService.getAccountDetailsByActNo(paramAcctno).subscribe(
      (data: any[]) => {
        this.Customername = data[0].Customername;
        this.Accountnumber = data[0].Accountnumber;
        this.SingleJoint = data[0].SingleJoint;
        this.Accounttype = data[0].Accounttype;
        this.Accountstatus = data[0].Accountstatus;
        this.Currency = data[0].Currency;
        this.Chqeuebook = data[0].Chqeuebook;
        this.Overdraft = data[0].Overdraft;
        this.Standingorder = data[0].Standingorder;
        this.avail_balance = data[0].avail_balance;
      },
      (err) => {
        console.error('There was an error while retrieving data!' + err);
      }
    );
  }
}
