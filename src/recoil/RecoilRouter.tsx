// @flow
import * as React from 'react';
import {Route, Routes} from 'react-router-dom';
import {RecoilExample} from "./RecoilExample";
import {RecoilRoot} from "recoil";
import {RecoilSelectorExample} from "./RecoilSelectorExample";
import {RecoilSuspenseExample} from "./RecoilSuspenseExample";

type Props = {

};
export const RecoilRouter = (props: Props) => {
    return (
        <RecoilRoot>
            <Routes>
                <Route path={"/1"} element={<RecoilExample/>}></Route>
                <Route path={"/2"} element={<RecoilSelectorExample/>}></Route>
                <Route path={"/3"} element={<RecoilSuspenseExample/>}></Route>
            </Routes>
        </RecoilRoot>
    );
};
