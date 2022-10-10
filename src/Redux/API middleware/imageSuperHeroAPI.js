import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

// createApi
export const imageSuperHeroDataAPI = createApi({
  reducerPath: 'superHeroAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3010/api/files/',
  }),
  tagTypes: ['superHeroImage'],
  endpoints: builder => ({
    patchSuperHeroImage: builder.mutation({
      query: ({ data, nickname }) => {
        const formData = new FormData(data);
        return {
          url: `/images/${nickname}`,
          method: 'PATCH',
          body: formData,
        };
      },

      invalidatesTags: ['superHeroImage'],
    }),
    deleteSuperHeroImage: builder.mutation({
      query: ({ nickname, imagePath }) => ({
        url: `/images/delete/${nickname}/${imagePath}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['superHeroImage'],
    }),
  }),
});

export const {
  usePatchSuperHeroImageMutation,
  useDeleteSuperHeroImageMutation,
} = imageSuperHeroDataAPI;
