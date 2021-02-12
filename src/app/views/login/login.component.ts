import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { AppService } from '../../services/app.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html',
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  error = '';

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private appservice: AppService, private notify: NotificationService) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;

    this.appservice.login(this.f.username.value, this.f.password.value).subscribe(
      (data) => {
        if (Object.keys(data).length > 0) {
          if (this.f.username.value !== data[0].username) {
            this.loading = false;
            this.notify.showWarning(`Invalid username?`);
            this.error = 'Invalid username?';
          } else if (this.f.password.value !== data[0].login_password) {
            this.loading = false;
            this.notify.showWarning(`Invalid login password?`);
            this.error = 'Invalid login password?';
          }

          if (this.f.username.value === data[0].username && this.f.password.value === data[0].login_password) {
            if ('Active' !== data[0].status) {
              this.loading = false;
              this.notify.showInfo(`Your account has been In-active, Please contact to bank administrator!`);
              this.error = 'Your account has been in-active, Please contact to bank administrator!';
            } else {
              this.loading = true;
              this.notify.showSuccess(`Welcome back , ${data[0].customername}`);
              this.appservice.saveLocalStorageData(data);
              this.router.navigate(['/dashboard']);
            }
          }
        } else {
          this.loading = false;
          this.notify.showError('Invalid username or password?');
          this.error = 'Invalid username or password?';
        }
      },
      (error) => {
        this.loading = false;
        this.notify.showError('There is some error in processing your request, Try again later? or Please contact to Bank admin!');
        this.error = 'There is some error in processing your request, Try again later? or Please contact to Bank admin!';
      }
    );
  }
}
