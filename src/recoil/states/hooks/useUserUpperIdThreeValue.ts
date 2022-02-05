// @flow
import * as React from 'react';
import {useRecoilValue} from "recoil";
import {userUpperIdThree} from "../molecule/userUpperIdThree";

type Props = {

};
export const useUserUpperIdThreeValue = () => {
    return useRecoilValue(userUpperIdThree);
};
