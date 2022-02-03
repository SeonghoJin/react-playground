// @flow
import * as React from 'react';
import {Route, Routes } from 'react-router-dom';
import { ReactQueryExample } from './ReactQueryExample';
import {QueryClient, QueryClientProvider} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";
import {ReactQueryPaginatedQueriesExample} from "./ReactQueryPaginatedQueriesExample";

const queryClient = new QueryClient();

type Props = {

};
export const ReactQueryRouter = (props: Props) => {

    return (
        <QueryClientProvider client={queryClient}>
            <Routes>
                <Route path={"/1"} element={<ReactQueryExample/>}></Route>
                <Route path={"/2"} element={<ReactQueryPaginatedQueriesExample/>}></Route>
            </Routes>
            <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>
    );
};
