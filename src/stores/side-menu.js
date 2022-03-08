import { defineStore } from "pinia";

export const useSideMenuStore = defineStore("sideMenu", {
  state: () => ({
    menu: [
      {
        icon: "HomeIcon",
        pageName: "dashboard",
        title: "Dashboard"
      },
      {
        icon: "UsersIcon",
        pageName: "staff",
        title: "Staff",
        subMenu: [
          {
            icon: "",
            pageName: "staff-list",
            title: "All Staff",
          },
          {
            icon: "",
            pageName: "staff-departments",
            title: "Departments",
          }
        ],
      },
      {
        icon: "TargetIcon",
        pageName: "budget",
        title: "Budget",
        subMenu: [
          {
            icon: "",
            pageName: "budget-list",
            title: "List Budgets",
          },
          {
            icon: "",
            pageName: "budget-approval-requests",
            title: "Approval Requests",
          },
          {
            icon: "",
            pageName: "budget-categories",
            title: "Budget Categories",
          }
        ],
      },
      {
        icon: "FileMinusIcon",
        pageName: "expense",
        title: "Expense",
        subMenu: [
          {
            icon: "",
            pageName: "create-expense",
            title: "Create Expense",
          },
          {
            icon: "",
            pageName: "expense-list",
            title: "List Expenses",
          },
          {
            icon: "",
            pageName: "expense-approval-requests",
            title: "Approval Requests",
          }
        ],
      },
      'divider',
      {
        icon: "BookOpenIcon",
        pageName: "reports",
        title: "Reports",
        subMenu: [
          {
            icon: "",
            pageName: "response-time",
            title: "Response TIme",
          },
          {
            icon: "",
            pageName: "expense-report",
            title: "Expense Activity",
          },
          {
            icon: "",
            pageName: "activity-log",
            title: "Activity Log",
          }
        ],
      },
      {
        icon: "SettingsIcon",
        pageName: "setting-index",
        title: "Settings"
      },
    ],
  }),
});
