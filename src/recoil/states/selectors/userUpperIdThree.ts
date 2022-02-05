import {selector} from "recoil";
import { Users } from "../../../api/types";
import {usersAtom} from "../atom/users";

export const userUpperIdThree = selector<Users | undefined>({
    key: 'key-user-upper-id-three',
    get: ({get}) => {
        const users = get(usersAtom);
        return users?.filter(({id}) => id <= 3);
    }
})
