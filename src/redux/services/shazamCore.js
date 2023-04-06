import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set(
        'X-RapidAPI-Key',
        '609585967amsheefefeab12166bbp14c249jsn818972294192',
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: () => '/charts/track',
    }),
  }),
});

export const { useGetTopChartsQuery } = shazamCoreApi;
