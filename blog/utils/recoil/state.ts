import {atom} from "recoil";

const AuthorizationAtom = atom<string>({
    key: 'AuthorizationAtom',
    default : '',
})

const RefreshTokenAtom = atom<string>({
    key: 'RefreshTokenAtom',
    default : '',
})

export {AuthorizationAtom,RefreshTokenAtom};