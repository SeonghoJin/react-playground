// @flow
import * as React from 'react';
import {useUser} from "./states/hooks/useUser";
import {useEffect} from "react";
import {getUser} from "../api";

type Props = {

};
export const RecoilExample = (props: Props) => {
    const [user, setUser] = useUser();

    useEffect(() => {
        (async () => {
            const user = await getUser(1)
            setUser(user);
        })()
    }, [setUser])

    return (
        <div>
            <RecoilExampleInner/>
        </div>
    );
};

export const RecoilExampleInner = () => {
    const [user, setUser] = useUser();
    return (
        <div>
            {user?.id}
            {user?.name}
        </div>
    );
}
