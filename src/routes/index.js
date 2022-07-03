import { lazy } from "react";
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
// const PageComingSoon = lazy(() => import("../pages/PageComingSoon"));
const Media = lazy(() => import("../pages/Media"));
const CJ = lazy(() => import("../pages/CJ"));
const Contact = lazy(() => import("../pages/Contact"));
const Works = lazy(() => import("../pages/Works"));
const Scores = lazy(() => import("../pages/Scores"));
const ScorePreview = lazy(() => import("../pages/ScorePreview"));

const routes = [
  {
    path: "/about",
    component: About,
  },
  {
    path: "/works",
    component: Works,
  },
  {
    path: "/media",
    component: Media,
  },
  {
    path: "/cj",
    component: CJ,
  },
  {
    path: "/scores",
    component: Scores,
    // component: PageComingSoon,
  },
  {
    path: "/scores/:id",
    component: ScorePreview,
    // component: PageComingSoon,
  },
  {
    path: "/contact",
    component: Contact,
  },
  {
    path: "/",
    component: Home,
  },
];

export default routes;
