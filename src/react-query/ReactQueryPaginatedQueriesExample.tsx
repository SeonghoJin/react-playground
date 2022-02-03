// @flow
import * as React from 'react';
import {useState} from "react";
import {lazyApi} from "../api";
import {useQuery} from "react-query";

type Props = {

};
export const ReactQueryPaginatedQueriesExample = (props: Props) => {

    const [page, setPage] = useState(0);

    const {data, isLoading, isPreviousData, isFetching, error, isError} = useQuery(['projects', page], async () => await lazyApi(1), {
        keepPreviousData: true
    })

    return (
        <div>
            {isLoading && (
                <div>Loading...</div>
            )}
            <div>{data}</div>
            <div>CurrentPage : {page + 1}</div>
            <button onClick={() => {
                setPage(old => Math.max(old + 1, 0));
            }}>Next</button>
        </div>
    );
};
