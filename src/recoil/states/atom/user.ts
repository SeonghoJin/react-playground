import {atom} from "recoil";
import { User } from "../../../api/types";

export const userAtom = atom<User | null>({
    key: 'key-user',
    default: null
})
