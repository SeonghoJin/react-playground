// @flow
import * as React from 'react';
import {useRecoilState} from "recoil";
import {userAtom} from "../atom/user";

type Props = {

};
export const useUser = () => {
    return useRecoilState(userAtom)
};
