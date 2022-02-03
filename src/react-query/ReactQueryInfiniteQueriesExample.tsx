// @flow
import * as React from 'react';
import {useInfiniteQuery} from "react-query";
import {lazyApi} from "../api";

type Props = {

};
export const ReactQueryInfiniteQueriesExample = (props: Props) => {
    const {
        data,
        error,
        fetchNextPage,
        fetchPreviousPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
        status,
    } = useInfiniteQuery('projects', async ({pageParam = 0}) => {
        return await lazyApi(pageParam);
    }, {
        getNextPageParam: ((lastPage, allPages) => lastPage + 1)
    })

    return status === 'loading' ? (
        <p>Loading...</p>
    ) : status === 'error' ? (
        <p>Error: {(error as Error).message}</p>
    ) : (
        <>
            {data && data.pages.map((group, i) => (
                <div key={i}>{group}</div>
            ))}
            <div>
                <button
                    onClick={() => fetchNextPage()}
                    disabled={!hasNextPage || isFetchingNextPage}
                >
                    {isFetchingNextPage
                        ? 'Loading more...'
                        : hasNextPage
                            ? 'Load More'
                            : 'Nothing more to load'}
                </button>
            </div>
            <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
        </>
    )};
