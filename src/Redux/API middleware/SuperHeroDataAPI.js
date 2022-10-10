import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

// createApi
export const SuperHeroDataAPI = createApi({
  reducerPath: 'superHeroAPI',

  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3010/api' }),
  tagTypes: ['superHero'],

  endpoints: builder => ({
    getSuperHero: builder.query({
      query: ({ page, per_page }) =>
        `/super_heroes?page=${page}&per_page=${per_page}`,
      providesTags: ['superHero'],
      keepUnusedDataFor: 0,
    }),
    getSuperHeroById: builder.query({
      query: id => `/super_heroes/${id}`,
    }),
    postSuperHero: builder.mutation({
      query: data => ({
        url: '/super_heroes',
        method: 'POST',
        body: data,
      }),
    }),
    putSuperHero: builder.mutation({
      query: ({ id, data }) => ({
        url: `/super_heroes/${id}`,
        method: 'PUT',
        body: data,
      }),
    }),
    deleteSuperHero: builder.mutation({
      query: id => ({
        url: `/super_heroes/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['superHero'],
    }),
  }),
});

export const {
  useGetSuperHeroQuery,
  useGetSuperHeroByIdQuery,
  usePutSuperHeroMutation,
  usePostSuperHeroMutation,
  useDeleteSuperHeroMutation,
} = SuperHeroDataAPI;
