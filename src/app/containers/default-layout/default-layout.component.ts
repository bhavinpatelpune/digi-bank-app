import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../../services/app.service';
import { NotificationService } from '../../services/notification.service';
import { navItems } from '../../_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;

  constructor(private appservice: AppService, private router: Router, private notify: NotificationService) {}

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  logout() {
    this.appservice.clearLocalStorageData();
    this.router.navigate(['/login']);
    this.notify.showSuccess('You have been logged out successfully!');
  }
}
