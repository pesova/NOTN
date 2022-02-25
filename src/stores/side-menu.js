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
            pageName: "staff-departments",
            title: "Departments",
          },
          {
            icon: "",
            pageName: "staff-list",
            title: "Staff List",
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
            title: "List",
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
            pageName: "expense-list",
            title: "List",
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
            pageName: "activity-log",
            title: "Activity Log",
          }
        ],
      },
      {
        icon: "SettingsIcon",
        pageName: "settings",
        title: "Settings",
        subMenu: [
          {
            icon: "",
            pageName: "profile",
            title: "Profile",
          },
          {
            icon: "",
            pageName: "preference",
            title: "Preference",
          },
          {
            icon: "",
            pageName: "security",
            title: "Security",
          },
          {
            icon: "",
            pageName: "roles",
            title: "Roles",
          },
          {
            icon: "",
            pageName: "workflows",
            title: "Workflows",
          }
        ],
      },
    ],
  }),
});
