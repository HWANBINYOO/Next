import {atom} from "recoil";

const MenuValueAtom = atom<string>({
    key: 'MenuValueAtom',
    default : '',
})


export { MenuValueAtom };

