// @flow
import * as React from 'react';
import {useRecoilValue} from "recoil";
import {userUpperIdThree} from "../selectors/userUpperIdThree";

type Props = {

};
export const useUserUpperIdThreeValue = () => {
    return useRecoilValue(userUpperIdThree);
};
