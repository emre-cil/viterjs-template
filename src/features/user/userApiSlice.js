import { apiSlice } from '../../app/api/apiSlice';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/auth',
        method: 'POST',
        body: { ...credentials },
      }),
    }),
  }),
});
// get users from /users endpoint with inject apiSlice

// get users from /users endpoint with inject apiSlice
export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.mutation({
      query: () => ({
        url: '/users',
        method: 'GET',
      }),
    }),
  }),
});

export const logOutApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    logOutHandle: builder.mutation({
      query: () => ({
        url: '/logout',
        method: 'GET',
        withCredentials: true,
      }),
    }),
  }),
});

export const { useGetUserMutation } = usersApiSlice;

export const { useLoginMutation } = authApiSlice;

export const { useLogOutHandleMutation } = logOutApiSlice;
