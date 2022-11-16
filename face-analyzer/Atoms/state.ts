import {atom} from "recoil";
import { celebrityProps, FaceProps } from "../types/analyzer";

const celebrityListAtom = atom<celebrityProps[]>({
    key: 'celebrityList',
    default : [],
})

const faceListAtom = atom<FaceProps[]>({
    key: 'faceList',
    default : [],
})

const imgBase64Atom = atom<string>({
    key: 'imgBase64',
    default : "",
})


export { celebrityListAtom , faceListAtom , imgBase64Atom };

