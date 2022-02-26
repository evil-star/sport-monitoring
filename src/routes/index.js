import React from "react";
import {Navigate} from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";

const routes = [
  {
    name: "not-found",
    path: "*",
    component: () => <Navigate to="/leagues" />,
    layout: MainLayout,
  },
  {
    name: "leagues",
    path: "/leagues",
    component: React.lazy(() => import("../pages/Leagues/Leagues")),
    layout: MainLayout,
  },
  {
    name: "league-calendar",
    path: "/leagues/:leagueId/league-calendar",
    component: React.lazy(() => import("../pages/LeagueCalendar/LeagueCalendar")),
    layout: MainLayout,
  },
  {
    name: "teams",
    path: "/teams",
    component: React.lazy(() => import("../pages/Teams/Teams")),
    layout: MainLayout,
  },
  {
    name: "team-calendar",
    path: "/teams/:teamId/team-calendar",
    component: React.lazy(() => import("../pages/TeamCalendar/TeamCalendar")),
    layout: MainLayout,
  },
];

export default routes;
