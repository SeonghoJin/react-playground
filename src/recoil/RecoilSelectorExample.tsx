// @flow
import * as React from 'react';
import {useEffect} from "react";
import {useUser} from "./states/hooks/useUser";
import { useUsers } from './states/hooks/useUsers';
import {getAllUser} from "../api";
import {useUserUpperIdThreeValue} from "./states/hooks/useUserUpperIdThreeValue";

type Props = {

};
export const RecoilSelectorExample = (props: Props) => {
    const [users, setUsers] = useUsers();

    useEffect(() => {
        (async () => {
            setUsers(await getAllUser());
        })()
    }, [setUsers])

    return (
        <RecoilSelectorExampleInner/>
    );
};

export const RecoilSelectorExampleInner = (props: Props) => {

    const myUser = useUserUpperIdThreeValue();

    return (
        <div>
            {myUser?.map(({id}) => id)}
        </div>
    );
};
