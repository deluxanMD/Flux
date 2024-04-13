import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {API_URL} from '@env';
import {SignupParams} from './auth-api.types';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({baseUrl: API_URL}),
  endpoints: builder => ({
    signUp: builder.mutation<any, SignupParams>({
      query: body => ({
        url: '/auth/signup',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {useSignUpMutation} = authApi;
