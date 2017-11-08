/* ============
 * Routes File
 * ============
 *
 * The routes and redirects are defined in this file.
 */

import Home from '@/pages/Home/Index';
import Account from '@/pages/Account/Index';

export default [
  // Home
  {
    path: '/home',
    name: 'home.index',
    component: Home,

    // If the user needs to be authenticated to view this page
    meta: {
      auth: true,
      ensure: async () => {
        await import('sm/js/city-data');
        await import('sm/js/city-picker');
      },
    },
  },

  // Account
  {
    path: '/account',
    name: 'account.index',
    component: Account,

    // If the user needs to be authenticated to view this page.
    meta: {
      auth: true,
    },
  },

  // Login
  {
    path: '/login',
    name: 'login.index',
    component: () => import('@/pages/Login/Index'),

    // If the user needs to be a guest to view this page.
    meta: {
      guest: true,
    },
  },

  // Register
  {
    path: '/register',
    name: 'register.index',
    component: () => import('@/pages/Register/Index.vue'),

    // If the user needs to be a guest to view this page.
    meta: {
      guest: true,
    },
  },

  {
    path: '/',
    redirect: '/home',
  },

  {
    path: '/*',
    redirect: '/home',
  },
];
