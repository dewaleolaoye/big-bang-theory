import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const choiceApi = createApi({
  reducerPath: "choiceApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://codechallenge.boohma.com",
    prepareHeaders: (headers, _) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getChoices: builder.query({
      query: () => `choices`,
      transformResponse: (response) => response,
    }),

    getRandomChoice: builder.query({
      query: () => `choice`,
      transformResponse: (response) => response,
    }),

    playRound: builder.mutation({
      query: ({ choice_id }) => ({
        url: `/play`,
        method: "POST",
        body: {
          player: choice_id,
        },
        // params: choice_id,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetChoicesQuery,
  useGetRandomChoiceQuery,
  usePlayRoundMutation,
} = choiceApi;
