import Routes from "./Routes";
import { Home, Components, ButtonPage } from "pages";

export default Routes;

export const routesList = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/components",
    component: Components,
    exact: true,
  },
  {
    path: "/components/button",
    component: ButtonPage,
    exact: true,
  },
];
