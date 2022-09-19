import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Items } from '../types';

export const itemsApi = createApi({
  reducerPath: 'items',
  baseQuery: fetchBaseQuery(),
  endpoints: (builder) => ({
    getItems: builder.query<Items, void>({
      query: () => 'api/v1/items',
    }),
  }),
});

export const { useGetItemsQuery } = itemsApi;
