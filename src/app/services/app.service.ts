import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

// import { ClassesModel } from '../models/classes';
import { environment } from '../../environments/environment';
// import { Status } from '../models/status-dropdown-value';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  // Read details from env. http://localhost:3000/api/
  readonly BASE_API_URL: string = environment.node_api_url;
  // Read details from env. 1: for MONGODB // 2: for MYSQL
  readonly API_VERSION_TO_USE = environment.node_api_version_use;
  // v1 for MONGO DB
  readonly API_V1_VERSION: string = 'v1';
  // v2 for MYSQL DB
  readonly API_V2_VERSION: string = 'v2';
  // Backend API Module Name
  readonly API_CLASSES: string = 'classes';

  accountSummaryServiceData: any;
  _versionToUse: string;

  constructor(private http: HttpClient) {}

  getHttpOptions(): object {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${window.localStorage.getItem('token')}`,
      }),
    };
  }

  getHttpOptionsWithoutAuthorization(): object {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
  }

  login(paramUserName: string, paramPassword: string) {
    return this.http.get(`${this.BASE_API_URL}/customer?username=${paramUserName}&login_password=${paramPassword}`,
                            this.getHttpOptionsWithoutAuthorization())
                                .pipe(catchError(this.handleError));
  }

  logout() {
    this.clearLocalStorageData();
  }

  saveLocalStorageData(res: any) {
    window.localStorage.setItem('id', res[0].id);
    window.localStorage.setItem('customername', res[0].customername);
    window.localStorage.setItem('email', res[0].email);
    window.localStorage.setItem('status', res[0].status);
  }

  getLocalStorageData() {
    const id = window.localStorage.getItem('id');
    const customername = window.localStorage.getItem('customername');
    const email = window.localStorage.getItem('email');
    const status = window.localStorage.getItem('status');

    return {
      id: id,
      customername: customername,
      email: email,
      status: status,
    };
  }

  clearLocalStorageData() {
    window.localStorage.removeItem('id');
    window.localStorage.removeItem('customername');
    window.localStorage.removeItem('email');
    window.localStorage.removeItem('status');
  }

  getAllAccountDetails() {
    return this.http.get(`${this.BASE_API_URL}/account_details`,
                            this.getHttpOptionsWithoutAuthorization())
                                .pipe(catchError(this.handleError));
  }

  getAccountSummary(paramId: string) {
    return this.http.get(`${this.BASE_API_URL}/account_summary?id=${paramId}`,
                            this.getHttpOptionsWithoutAuthorization())
                                .pipe(catchError(this.handleError));
  }

  getAccountDetailsByActNo(paramAcctno: string) {
    return this.http.get(`${this.BASE_API_URL}/account_details?Accountnumber=${paramAcctno}`,
                            this.getHttpOptionsWithoutAuthorization())
                                .pipe(catchError(this.handleError));
  }

  getAccountTransactionsByActNo(paramAcctno: string) {
    return this.http.get(`${this.BASE_API_URL}/account_statement?Accountnumber=${paramAcctno}`,
                            this.getHttpOptionsWithoutAuthorization())
                                .pipe(catchError(this.handleError));
  }

  getValidateCustomer() {
    return this.http.get(`${this.BASE_API_URL}/account_details`,
                            this.getHttpOptionsWithoutAuthorization())
                                .pipe(catchError(this.handleError));
  }

  getBillers(paramId: string) {
    return this.http.get(`${this.BASE_API_URL}/list_of_billers?id=${paramId}`,
                            this.getHttpOptionsWithoutAuthorization())
                                .pipe(catchError(this.handleError));
  }

  // http://localhost:3000/account_statement?Accountnumber=1000000001&StatementMonth=Jan&StatementYear=2021
  getAccountStatement(pAcctno: string, pMonth: string, pYear: string) {
    return this.http.get(`${this.BASE_API_URL}/account_statement?Accountnumber=${pAcctno}&StatementMonth=${pMonth}&StatementYear=${pYear}`,
    this.getHttpOptionsWithoutAuthorization())
        .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      console.error(`Backend Server returned code: ${error.status}, ` + ` body was: ${error.error} error message: ` + error.message);
    }
    // return an observable with a user-facing error message
    if (!error.error.message) {
      return throwError('Unable to process your request, please try again later.');
    } else {
      return throwError(error.error.message);
    }
  }
}
