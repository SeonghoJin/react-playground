// @flow
import * as React from 'react';
import {ErrorBoundary} from "react-error-boundary";
import {useRecoilValue} from "recoil";
import { error } from './states/selectors/error';
import {ErrorFallback} from "../components/atoms/ErrorFallback";
import {ErrorInfo, useMemo} from "react";
import {Loading} from "../components/atoms/Loading";

type Props = {

};
export const RecoilErrorBoundaryExample = (props: Props) => {
    return (
        <ErrorBoundary fallbackRender={ErrorFallback}>
            <RecoilErrorBoundaryExampleInner/>
        </ErrorBoundary>
    );
};

export const RecoilErrorBoundaryExampleInner = () => {

    useRecoilValue(error);

    return (
        <div>
            Hello!!
        </div>
    );
}
