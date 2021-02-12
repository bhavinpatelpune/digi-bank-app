import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private toastr: ToastrService) {}

  showSuccess(message: string) {
    this.toastr.success(message, 'Success!', {
      timeOut: 3000,
      closeButton: false,
      enableHtml: true,
      // toastClass: 'alert alert-success',
      // positionClass: 'toast-top-right',
    });
  }

  showError(message: string) {
    this.toastr.error(message, 'Error?', {
      timeOut: 3000,
      closeButton: false,
      enableHtml: true,
      // toastClass: 'alert alert-danger',
      // positionClass: 'toast-top-right',
    });
  }

  showInfo(message: string) {
    this.toastr.info(message, 'Info!', {
      timeOut: 3000,
      closeButton: false,
      enableHtml: true,
      // toastClass: 'alert alert-info',
      // positionClass: 'toast-top-right',
    });
  }

  showWarning(message: string) {
    this.toastr.warning(message, 'Warning!', {
      timeOut: 3000,
      closeButton: false,
      enableHtml: true,
      // toastClass: 'alert alert-warning',
      // positionClass: 'toast-top-right',
    });
  }

  showHTMLMessage(message: string, title: string) {
    this.toastr.success(message, title, {
      enableHtml: true,
    });
  }

  showSuccessWithTimeout(message: string, title: string, timespan: any) {
    this.toastr.success(message, title, {
      timeOut: timespan,
    });
  }
}
