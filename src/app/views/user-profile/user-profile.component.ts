import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  userName: string;
  constructor() { }

  ngOnInit(): void {
    this.userName = localStorage.getItem('customername');
  }

}
