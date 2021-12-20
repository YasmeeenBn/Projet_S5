// import Dashboard from "layouts/dashboard";
import Hespress from "layouts/admin/hespress";
import NYtimes from "layouts/admin/newyorktimes";
import Export from "layouts/admin/export";
import FormVariable from "layouts/admin/formVariable";
// import BlogSearch from "layouts/BlogSearch/BlogSearch";
// import RTL from "layouts/rtl";
// import Notifications from "layouts/notifications";
// import Profile from "layouts/profile";
// import SignIn from "layouts/authentication/sign-in";
// import SignUp from "layouts/authentication/sign-up";
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Hespress",
    key: "homepage",
    icon: <Icon fontSize="small">Homepage</Icon>,
    route: "/",
    component: <Hespress />,
  },
  // {
  //   type: "collapse",
  //   name: "Hespress",
  //   key: "hespress",
  //   icon: <Icon fontSize="small">table_view</Icon>,
  //   route: "/hespress",
  //   component: <Hespress />,
  // },
  {
    type: "collapse",
    name: "New York Times",
    key: "New York Times",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/newyorktimes",
    component: <NYtimes />,
  },

  {
    type: "collapse",
    name: "Export",
    key: "export",
    icon: <Icon fontSize="small">download</Icon>,
    route: "/export",
    component: <Export />,
  },
  {
    type: "collapse",
    name: "Form Variables",
    key: "form Variable",
    icon: <Icon fontSize="small">add</Icon>,
    route: "/form_variable",
    component: <FormVariable />,
  },
  // {
  //   type: "collapse",
  //   name: "Notifications",
  //   key: "notifications",
  //   icon: <Icon fontSize="small">notifications</Icon>,
  //   route: "/notifications",
  //   component: <Notifications />,
  // },
  // {
  //   type: "collapse",
  //   name: "Profile",
  //   key: "profile",
  //   icon: <Icon fontSize="small">person</Icon>,
  //   route: "/profile",
  //   component: <Profile />,
  // },
  // {
  //   type: "collapse",
  //   name: "Sign In",
  //   key: "sign-in",
  //   icon: <Icon fontSize="small">login</Icon>,
  //   route: "/authentication/sign-in",
  //   component: <SignIn />,
  // },
  // {
  //   type: "collapse",
  //   name: "Sign Up",
  //   key: "sign-up",
  //   icon: <Icon fontSize="small">assignment</Icon>,
  //   route: "/authentication/sign-up",
  //   component: <SignUp />,
  // },
];

export default routes;
