import {atom} from "recoil";

const emailState = atom<string>({
    key: 'emailState',
    default : '',
})

const passwordState = atom<string>({
    key: 'emailState',
    default : '',
})
export {emailState,passwordState};