// @flow
import * as React from 'react';
import {useQuery} from "react-query";
import axios from "axios";
import {getAllFriendFromUserId, getAllUser, getFriendFromUserId, getUser} from "../api";
import userEvent from "@testing-library/user-event";
import {useEffect} from "react";
import {showBoolean} from "../util";

type Props = {

};
export const ReactQueryExample = (props: Props) => {
    const {isLoading, data, error, isError, isLoadingError, isSuccess} = useQuery('user', async () => await getAllUser());
    return (
        <div>
            isLoading = {showBoolean(isLoading)}
            <br/>
            data = {data && data.map(({id, name})=> <div key={id}>{name}</div>)}
            <br/>
            error = {error}
            <br/>
            isError = {showBoolean(isError)}
            <br/>
            isLoadingError = {showBoolean(isLoadingError)}
            <br/>
            isSuccess = {showBoolean(isSuccess)}
        </div>
    );
};
