import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const teamsApi = createApi({
    reducerPath: "teamsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.football-data.org/v2/",
        prepareHeaders: (headers) => {
            headers.set(
                "X-Auth-Token",
                process.env.REACT_APP_FOOTBALL_DATA_TOKEN
            );
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTeams: builder.query({
            query: () => "teams",
        }),
        getTeam: builder.query({
            query: ({ id }) => `teams/${id}`,
        }),
        getTeamMatches: builder.query({
            query: ({ id, dateFrom, dateTo }) => {
                const params = {};
                if (dateFrom && dateTo) {
                    params.dateFrom = dateFrom;
                    params.dateTo = dateTo;
                }
                return {
                    url: `teams/${id}/matches`,
                    params,
                };
            },
        }),
    }),
});

export const { useGetTeamsQuery, useGetTeamQuery, useGetTeamMatchesQuery } =
    teamsApi;
