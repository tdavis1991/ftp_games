import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const ftpDb = createApi({
  reducerPath: 'ftpDb',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://free-to-play-games-database.p.rapidapi.com/api',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', '8a5c072e31mshe08f9e5109737dcp18f987jsn00be8a004651');

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllGames: builder.query({ query: () => '/games' }),
    getSortedGames: builder.query({ query: ({ platform, category, sort_by }) => `/games?platform=${platform}&category=${category}&sort-by=${sort_by}` }),
    getGameDetails: builder.query({ query: ({ id }) => `/game?id=${id}` }),
  }),
});

console.log('API KEY', import.meta.env.API_KEY)
export const {
  useGetAllGamesQuery,
  useGetGameDetailsQuery,
  useGetSortedGamesQuery,
} = ftpDb;