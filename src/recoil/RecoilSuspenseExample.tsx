// @flow
import * as React from 'react';
import {useRecoilValue} from "recoil";
import {lazy} from "./states/selectors/lazy";
import {Loading} from "../components/atoms/Loading";

type Props = {

};
export const RecoilSuspenseExample = (props: Props) => {
    return (
        <React.Suspense fallback={<Loading/>}>
            <RecoilSuspenseExampleInner/>
        </React.Suspense>
    );
};

export const RecoilSuspenseExampleInner = () => {
    const item = useRecoilValue(lazy);
    return (
        <div>
            {item ?? 0}
        </div>
    );
}
