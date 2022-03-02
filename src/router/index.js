import { createRouter, createWebHistory } from "vue-router";
import SideMenu from "../layouts/side-menu/Main.vue";
import DashboardOverview from "../views/dashboard/Main.vue";
import StaffIndex from "../views/staff/Index.vue";
import DepartmentIndex from "../views/department/Index.vue";
import Settings from "../views/setting/Index.vue";
import ExpenseList from "../views/expense/list/Main.vue";
import ExpenseCreate from "../views/expense/create/Main.vue";
import ExpenseRequests from "../views/expense/requests/Main.vue";

import Budget from "../views/budget/Main.vue";
import BudgetHead from "../views/budget/budget-head.vue";
import BudgetApprovalRequest from "../views/budget/approval-request.vue";

import Auth from "../views/login/Main.vue";
import Login from "../views/login/login.vue";
import twoFAPassword from "../views/login/2fa-password.vue";
import forgotPassword from "../views/forgot-password/Main.vue";
import resetPassword from "../views/forgot-password/reset-password.vue";

import ErrorPage from "../views/error-page/Main.vue";

const routes = [
  {
    path: "/",
    component: SideMenu,
    children: [
      {
        path: "/",
        name: "dashboard",
        component: DashboardOverview,
      },

      /**
       * Staff Routes
       */
      {
        path: "/staff/list",
        name: "staff-list",
        component: StaffIndex,
      },
      {
        path: "/staff/departments",
        name: "staff-departments",
        component: DepartmentIndex,
      },

      /**
       * Budget Routes
       */
      {
        path: "/budgets/list",
        name: "budget-list",
        component: Budget,
      },
      {
        path: "/budgets/approvals",
        name: "budget-approval-requests",
        component: BudgetApprovalRequest,
      },
      {
        path: "/budgets/categories",
        name: "budget-categories",
        component: BudgetHead,
      },

      /**
       * Expense Routes
       */
      {
        path: "/expense/create",
        name: "create-expense",
        component: ExpenseCreate,
      },
      {
        path: "/expense/list",
        name: "expense-list",
        component: ExpenseList,
      },
      {
        path: "/expense/approvals",
        name: "expense-approval-requests",
        component: ExpenseRequests,
      },

      /**
       * Settings Routes
       */
      {
        path: "/settings",
        name: "setting-index",
        component: Settings,
      },

      /**
       * Report Routes
       */
      {
        path: "/reports/response-time",
        name: "response-time",
        component: DashboardOverview,
      },
      {
        path: "/reports/activity-log",
        name: "activity-log",
        component: DashboardOverview,
      },
    ],
  },

  {
    path: "/login",
    component: Auth,
    children: [
      {
        path: "/login",
        name: "login",
        component: Login,

      },
      {
        path: "/forgot-password",
        name: "forgot-password",
        component: forgotPassword,
      },
      {
        path: "/reset-password",
        name: "reset-password",
        component: resetPassword,
      },
      {
        path: "/2fa-password",
        name: "2fa-password",
        component: twoFAPassword,
      }
    ],

  },
  {
    path: "/error-page",
    name: "error-page",
    component: ErrorPage,
  },
  {
    path: "/:pathMatch(.*)*",
    component: ErrorPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 };
  },
});

export default router;
