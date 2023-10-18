
import Dashboard from "views/Dashboard.js";

const dashboardRoutes = [
  {
    upgrade: true,
    name: "Evano",
    icon: "nc-icon nc-alien-33",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin"
  },
  {
    name: "Product",
    icon: "nc-icon nc-circle-09",
   
  },
  {
    name: "Customers",
    icon: "nc-icon nc-notes",

  },
  {
    name: "Income",
    icon: "nc-icon nc-paper-2",
 
  },
  {
    name: "Promote",
    icon: "nc-icon nc-atom",
  },
  {
    name: "Help",
    icon: "nc-icon nc-pin-3",
  },

];


export default dashboardRoutes;
