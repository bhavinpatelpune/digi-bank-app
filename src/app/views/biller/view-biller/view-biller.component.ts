import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../../../services/app.service';

@Component({
  selector: 'app-view-biller',
  templateUrl: './view-biller.component.html',
  styleUrls: ['./view-biller.component.scss']
})
export class ViewBillerComponent implements OnInit {

  billerList : any = [];

  constructor(private appservice: AppService, private router: Router) {}

  getBillers() {
    this.appservice.getBillers(localStorage.getItem('id')).subscribe((data) => {
      this.billerList = data;
    });
  }
  ngOnInit(): void {
    this.getBillers();
  }

}
