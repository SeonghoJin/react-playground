import {selector} from "recoil";
import {lazyApi} from "../../../api";

export const lazy = selector({
    key: 'lazy',
    get: async ({get}) => {
        return lazyApi(5);
    }
})
