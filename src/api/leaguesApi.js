import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const leaguesApi = createApi({
  reducerPath: "leaguesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.football-data.org/v2/",
    prepareHeaders: (headers) => {
      headers.set("X-Auth-Token", process.env.REACT_APP_FOOTBALL_DATA_TOKEN);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getLeagues: builder.query({
      query: () => "competitions",
    }),
    getLeagueMatches: builder.query({
      query: ({id, dateFrom, dateTo}) => {
        const params = {};
        if (dateFrom && dateTo) {
          params.dateFrom = dateFrom;
          params.dateTo = dateTo;
        }
        return {
          url: `competitions/${id}/matches`,
          params,
        };
      },
    }),
  }),
});

export const {useGetLeaguesQuery, useGetLeagueMatchesQuery} = leaguesApi;
