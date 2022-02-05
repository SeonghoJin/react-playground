import {atom} from "recoil";
import {User, Users} from "../../../api/types";

export const usersAtom = atom<Users | null>({
    key: 'key-users',
    default: null
})
