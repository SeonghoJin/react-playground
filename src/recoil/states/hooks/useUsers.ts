// @flow
import * as React from 'react';
import {useRecoilState, useRecoilValue} from "recoil";
import {usersAtom} from "../atom/users";

export const useUsers = () => {
    return useRecoilState(usersAtom);
};
