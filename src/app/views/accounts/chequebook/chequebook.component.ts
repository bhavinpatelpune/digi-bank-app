import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../../../services/app.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NotificationService } from '../../../services/notification.service';

@Component({
  selector: 'app-chequebook',
  templateUrl: './chequebook.component.html',
  styleUrls: ['./chequebook.component.scss'],
})
export class ChequebookComponent implements OnInit {
  acctdetails: any = [];

  actForm: FormGroup;
  submitted: boolean;
  error: any = '';

  constructor(private appService: AppService, private router: Router, private formBuilder: FormBuilder, private notify: NotificationService) {}

  ngOnInit(): void {
    this.loadAllAccounts(localStorage.getItem('id').toString());

    this.actForm = this.formBuilder.group({
      cbAccounts: ['', Validators.required],
      chequeleave: ['', Validators.required],
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.actForm.controls;
  }

  onActSelect(paramActno: any) {}

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

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.actForm.invalid) {
      return;
    }

    this.notify.showSuccess('Your Chequebook request has been submitted successfully! , It will be delivered to your registered address.');
    this.router.navigate(['/dashboard']);
  }
}
