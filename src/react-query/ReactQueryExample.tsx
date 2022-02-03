// @flow
import * as React from "react";
import {useInfiniteQuery, useQueries, useQuery} from "react-query";
import axios from "axios";
import {
  getAllFriendFromUserId,
  getAllUser,
  getFriendFromUserId,
  getUser,
} from "../api";
import userEvent from "@testing-library/user-event";
import {useCallback, useEffect} from "react";
import { showBoolean } from "../util";

type Props = {};

export const ReactQueryExample = (props: Props) => {
  const { isLoading, status,  data, error, isError, isLoadingError, isSuccess } =
    useQuery("users", async () => await getAllUser(), {
        staleTime: 1000,
        refetchOnMount: true,
        refetchOnReconnect: true,
        refetchOnWindowFocus: true,
        cacheTime: 5000,
        retry: 5,
        retryDelay: failureCount => {
            // exponential backoff delay
            return 2 ** failureCount * 1000;

            // linear delay
            // return failureCount * 1000;

            // jitter delay + exponential backoff delay
            // return Math.random() * 1000 + 2 ** failureCount * 1000;

            return 1;
        }
    });

  function useDependQuery(userId: number) {
      return useQuery(['user', userId], async () =>{
          await getUser(userId);
      })
  }


  useQueries([1,2,3,4,5].map((userId) => ({
      queryFn: async () => await getUser((userId)),
      queryKey: ['user', userId]
  })))

   const friendQueryResults = useQuery(
       ['friend', data?.[0].id], async () => await getUser(data?.[0].id as number),
       {
           enabled : !!data?.[0].id
       }
   )

  if(isLoading) {
      return <span>Loading...</span>
  }


  return (
    <div>
      isLoading = {showBoolean(isLoading)}
      <br />
      data = {data && data.map(({ id, name }) => <div key={id}>{name}</div>)}
      <br />
      error = {error}
      <br />
      isError = {showBoolean(isError)}
      <br />
      isLoadingError = {showBoolean(isLoadingError)}
      <br />
      isSuccess = {showBoolean(isSuccess)}
    </div>
  );
};
