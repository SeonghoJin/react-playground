// @flow
import * as React from 'react';
import {useRecoilState} from "recoil";
import {testEffectAtom} from "./states/atom/test-effect-atom";

export const RecoilEffectExample = () => {

    const [effect, setEffect] = useRecoilState(testEffectAtom);
    console.log(effect)
    return (
        <div>

        </div>
    );
};
