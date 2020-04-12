import { lazy } from "react";
import { HOME, MOVIE_DETAILS } from "./pathURL";

const config = [
  {
    exact: true,
    path: HOME,
    component: lazy(() => import(/* webpackChunkName: "movieList" */ "../containers/MovieList"))
  },
  {
    path: MOVIE_DETAILS,
    component: lazy(() => import(/* webpackChunkName: "movieDetails" */"../containers/MovieDetails"))
  }
];

export default config;