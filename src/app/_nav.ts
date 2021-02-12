import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
  },
  {
    name: 'Accounts',
    url: '/accounts',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Detail',
        url: 'account/details',
        icon: 'icon-pie-chart',
      },
      {
        name: 'Statement',
        url: 'account/statement',
        icon: 'icon-pie-chart',
      },
      {
        name: 'Request Chequebook',
        url: 'account/chequebook',
        icon: 'icon-star',
      },
    ],
  },
  {
    name: 'Fund Transfers',
    url: '/fund-transfers',
    icon: 'icon-cursor',
    children: [
      {
        name: 'To self account',
        url: 'fund-transfer/self-account',
        icon: 'icon-action-undo',
      },
      {
        name: 'To another local bank',
        url: 'fund-transfer/local-bank',
        icon: 'icon-action-redo',
      },
      {
        name: 'To foreign bank',
        url: 'fund-transfer/foreign-bank',
        icon: 'icon-globe',
      },
      {
        name: 'Add Beneficiary',
        url: 'fund-transfer/add-bene',
        icon: 'icon-pencil',
      },
      {
        name: 'View Beneficiaries',
        url: 'fund-transfer/view-bene',
        icon: 'icon-list',
      },
    ],
  },

  {
    name: 'Bill Payments',
    url: '/bill-pay',
    icon: 'icon-globe',
    children: [
      {
        name: 'Bill Pay',
        url: 'biller/bill-pay',
        icon: 'icon-paypal',
      },
      {
        name: 'Add Biller',
        url: 'biller/add-biller',
        icon: 'icon-pencil',
      },
      {
        name: 'View Biller',
        url: 'biller/view-biller',
        icon: 'icon-list',
      },
    ],
  },

  {
    name: 'My profile',
    url: '/user-profile',
    icon: 'icon-user',
  },
];
