import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../../../services/app.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { AccountStatementModel } from '../acctStmtModel';
import { NotificationService } from '../../../services/notification.service';

@Component({
  selector: 'app-account-statement',
  templateUrl: './account-statement.component.html',
  styleUrls: ['./account-statement.component.scss'],
})
export class AccountStatementComponent implements OnInit, AfterViewInit {
  acctdetails: any = [];
  sub: any;

  actForm: FormGroup;
  submitted: boolean;
  error = '';
  showTable: boolean;

  // Transaction Date	Value Date	Reference	Description	Debit	Credit	Balance
  displayedColumns: string[] = ['txn_date', 'REFERENCE', 'PDESC', 'DEBIT', 'CREDIT', 'open_bal', 'close_bal'];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  dataSource = new MatTableDataSource();
  actStmtData: AccountStatementModel;
  actStmtList: AccountStatementModel[];

  constructor(private appService: AppService, private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder, private notify: NotificationService) {
    // Assign the data to the data source for the table to render
    this.actStmtData = {} as AccountStatementModel;
  }

  ngAfterViewInit() {
    // Initializing Datatable pagination
    this.dataSource.paginator = this.paginator;
    // Initializing Datatable sort
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.loadAllAccounts(localStorage.getItem('id').toString());

    this.actForm = this.formBuilder.group({
      cbAccounts: ['', Validators.required],
      cbMonth: ['', Validators.required],
      cbYear: ['', Validators.required],
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toUpperCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.actForm.controls;
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

  filterAccountStmt(pAcctno: string, pMonth: string, pYear: string) {
    this.appService.getAccountStatement(pAcctno, pMonth, pYear).subscribe(
      (data: any[]) => {
        this.actStmtList = data;
        this.dataSource.data = this.actStmtList;
      },
      (err) => {
        console.error('There was an error while retrieving data!' + err);
      }
    );
  }

  btnViewTrans() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.actForm.invalid) {
      return;
    }

    this.filterAccountStmt(this.f.cbAccounts.value, this.f.cbMonth.value, this.f.cbYear.value);
  }

  btnDownloadTrans() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.actForm.invalid) {
      return;
    }
  }
}
