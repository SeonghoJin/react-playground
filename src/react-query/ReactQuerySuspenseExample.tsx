// @flow
import * as React from 'react';
import {QueryClient, QueryClientProvider, useQuery} from "react-query";
import {lazyApi} from "../api";
import {Loading} from "../components/atoms/Loading";


type Props = {

};

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            suspense: true,
        }
    }
})
export const ReactQuerySuspenseExample = (props: Props) => {
    return (
        <QueryClientProvider client={queryClient}>
            <React.Suspense fallback={<Loading/>}>
                <ReactQuerySuspenseExampleInner/>
            </React.Suspense>
        </QueryClientProvider>
    );
};

export const ReactQuerySuspenseExampleInner = () => {

    const {data}= useQuery('test', async () => {
        return await lazyApi("TEMP");
    });

    return (
        <div>
            {data}
            Hello!!
        </div>
    )
}
