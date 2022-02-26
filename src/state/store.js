import {configureStore} from "@reduxjs/toolkit";
import {leaguesApi} from "../api/leaguesApi";
import {teamsApi} from "../api/teamsApi";

const store = configureStore({
  reducer: {
    [leaguesApi.reducerPath]: leaguesApi.reducer,
    [teamsApi.reducerPath]: teamsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(leaguesApi.middleware, teamsApi.middleware),
});

export default store;
