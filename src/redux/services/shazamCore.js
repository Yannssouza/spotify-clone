import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: '"https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "609585967amsheefefeab12166bbp14c249jsn818972294192"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: "/charts/world" }),
  }),
});

export const { useGetTopChartsQuery } = shazamCoreApi;
