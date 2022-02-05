import {selector} from "recoil";

export const error = selector({
    key: 'key-error',
    get:async () => {
        throw new Error("selector errors");
    }
})
