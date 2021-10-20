import { lazy } from "react";
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const PageComingSoon = lazy(() => import("../pages/PageComingSoon"));
const FilmMusic = lazy(() => import("../pages/FilmMusic"));

const routes = [
  {
    path: "/about",
    component: About,
  },
  {
    path: "/works",
    component: PageComingSoon,
  },
  {
    path: "/film-music",
    component: FilmMusic,
  },
  {
    path: "/scores",
    component: PageComingSoon,
  },
  {
    path: "/contact",
    component: PageComingSoon,
  },
  {
    path: "/",
    component: Home,
  },
];

export default routes;
