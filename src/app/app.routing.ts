import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404',
    },
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500',
    },
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page',
    },
  },

  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home',
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'account',
        loadChildren: () => import('./views/accounts/account.module').then((m) => m.AccountModule),
      },
      {
        path: 'fund-transfer',
        loadChildren: () => import('./views/fund-transfers/fund-transfers.module').then((m) => m.FundTransfersModule),
      },
      {
        path: 'biller',
        loadChildren: () => import('./views/biller/biller.module').then((m) => m.BillerModule),
      },
      {
        path: 'user-profile',
        loadChildren: () => import('./views/user-profile/user-profile.module').then((m) => m.UserProfileModule),
      },
    ],
  },
  { path: '**', component: P404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
