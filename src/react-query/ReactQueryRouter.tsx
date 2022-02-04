// @flow
import * as React from 'react';
import {Route, Routes } from 'react-router-dom';
import { ReactQueryExample } from './ReactQueryExample';
import {QueryClient, QueryClientProvider} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";
import {ReactQueryPaginatedQueriesExample} from "./ReactQueryPaginatedQueriesExample";
import {ReactQueryInfiniteQueriesExample} from "./ReactQueryInfiniteQueriesExample";
import {ReactQuerySuspenseExample} from "./ReactQuerySuspenseExample";
import {ReactQueryErrorBoundaryExample} from "./ReactQueryErrorBoundaryExample";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            suspense: true
        }
    }
});

type Props = {

};
export const ReactQueryRouter = (props: Props) => {

    return (
        <QueryClientProvider client={queryClient}>
                <Routes>
                    <Route path={"/1"} element={<ReactQueryExample/>}></Route>
                    <Route path={"/2"} element={<ReactQueryPaginatedQueriesExample/>}></Route>
                    <Route path={"/3"} element={<ReactQueryInfiniteQueriesExample/>}></Route>
                    <Route path={"/4"} element={<ReactQuerySuspenseExample/>}></Route>
                    <Route path={"/5"} element={<ReactQueryErrorBoundaryExample/>}></Route>
                </Routes>
            <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>
    );
};
