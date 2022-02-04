// @flow
import * as React from 'react';
import {useMemo} from "react";
import {QueryClient, QueryClientProvider, QueryErrorResetBoundary, useQueryClient} from "react-query";
import {ErrorBoundary} from "react-error-boundary";
import {ErrorFallback} from "../components/atoms/ErrorFallback";

type Props = {

};

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            useErrorBoundary: true
        }
    }
})


export const ReactQueryErrorBoundaryExample = (props: Props) => {
    return (
        <QueryClientProvider client={queryClient}>
            <QueryErrorResetBoundary>
                {({ reset }) => (
                    <ErrorBoundary
                        onReset={reset}
                        fallbackRender={ErrorFallback}
                    >
                        <ReactQueryErrorBoundaryExampleInner/>
                    </ErrorBoundary>
                )}
            </QueryErrorResetBoundary>
        </QueryClientProvider>
    );
};

export const ReactQueryErrorBoundaryExampleInner = (props: Props) => {

    const object = useMemo(() => ({
        test: 'Test'
    }), [])

    // try 1
    throw new Error("This is My Custom Error");

    return (
        <div>
            //try 2
            {object}
            Hello!!
        </div>
    );
};
