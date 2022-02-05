import {atom} from "recoil";

export const testEffectAtom = atom<number | null>({
    key: 'key-test-effect-atom',
    default: null,
    effects: [
        () => {
            alert("Hello")
            return () => {
                alert("Clean Up");
            }
        }
    ]
})
