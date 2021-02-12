import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../../../services/app.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NotificationService } from '../../../services/notification.service';

@Component({
  selector: 'app-self-account',
  templateUrl: './self-account.component.html',
  styleUrls: ['./self-account.component.scss'],
})
export class SelfAccountComponent implements OnInit {
  acctdetails: any = [];
  accttrans: any = [];

  actForm: FormGroup;
  submitted: boolean;
  error = '';
  loading = false;
  showInputForm = false;
  showReviewForm = false;

  constructor(private appService: AppService, private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder, private notify: NotificationService) {}

  ngOnInit(): void {
    this.enableDisableForm('INPUT');
    this.loadAllAccounts(localStorage.getItem('id').toString());

    this.actForm = this.formBuilder.group({
      cbFromAccount: ['', Validators.required],
      cbToAccount: ['', Validators.required],
      txtTransdate: ['', Validators.required],
      cbCurrency: ['', Validators.required],
      txtAmount: ['', Validators.required],
      txtRemarks: ['', Validators.required],
      // txtPassword: ['', Validators.required],
    });
  }

  enableDisableForm(paramForm: string) {
    if (paramForm === 'INPUT') {
      this.showInputForm = true;
      this.showReviewForm = false;
      // this.actForm.controls['cbFromAccount'].enable();
      // this.actForm.controls['cbToAccount'].enable();
      // this.actForm.controls['txtTransdate'].enable();
      // this.actForm.controls['cbCurrency'].enable();
      // this.actForm.controls['txtAmount'].enable();
      // this.actForm.controls['cbFromAccount'].enable();
      // this.actForm.controls['txtRemarks'].enable();
      // this.actForm.enable();
    } else if (paramForm === 'REVIEW') {
      this.showInputForm = false;
      this.showReviewForm = true;
      // this.actForm.controls['cbFromAccount'].disable();
      // this.actForm.controls['cbToAccount'].disable();
      // this.actForm.controls['txtTransdate'].disable();
      // this.actForm.controls['cbCurrency'].disable();
      // this.actForm.controls['txtAmount'].disable();
      // this.actForm.controls['cbFromAccount'].disable();
      // this.actForm.controls['txtRemarks'].disable();
    }
  }

  back() {
    this.enableDisableForm('INPUT');
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.actForm.controls;
  }

  onFromActSelect(paramFromActno: any) {
    if (this.f.cbFromAccount.value === this.f.cbToAccount.value) {
      this.notify.showWarning('From and To account can not be same!');
      this.error = 'From and To account can not be same!';
    } else {
      this.error = '';
    }
  }

  onToActSelect(paramToActno: any) {
    if (this.f.cbFromAccount.value === this.f.cbToAccount.value) {
      this.notify.showWarning('From and To account can not be same!');
      this.error = 'From and To account can not be same!';
    } else {
      this.error = '';
    }
  }

  onCCYSelect(paramToActno: any) {}

  onAmountChange(value: number) {
    // Transfer amount can be min 1 and max 1,000,000 in currency of account
    if (value > 1000000 || value < 1) {
      this.notify.showWarning('Transfer amount can be min 1 and max 1,000,000');
      this.error = 'Transfer amount can be min 1 and max 1,000,000';
    } else {
      this.error = '';
    }
  }

  loadAllAccounts(paramId: string) {
    this.appService.getAccountSummary(paramId).subscribe(
      (data: any[]) => {
        this.acctdetails = data;
        // console.log('this.acctdetails - ' + JSON.stringify(this.acctdetails));
      },
      (err) => {
        console.error('There was an error while retrieving data!' + err);
      }
    );
  }

  btnOnSubmit() {
    this.onAmountChange(this.f.txtAmount.value);

    this.submitted = true;

    // stop here if form is invalid
    if (this.actForm.invalid) {
      return;
    }

    this.loading = true;

    this.enableDisableForm('REVIEW');

    this.notify.showSuccess('Trn.Ref.No: ' + Math.floor(Math.random() * 9 + 1000000) + ' Transaction has been submited successfully!');
    this.router.navigate(['/dashboard']);
  }

  btnCancel() {
    this.notify.showInfo('Transaction has been cancelled!');
    this.router.navigate(['/dashboard']);
  }

  btnContinue() {
    this.onAmountChange(this.f.txtAmount.value);

    this.submitted = true;

    // stop here if form is invalid
    if (this.actForm.invalid) {
      return;
    }

    this.enableDisableForm('REVIEW');
  }
}
