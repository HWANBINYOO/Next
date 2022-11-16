import {atom} from "recoil";
import { celebrityProps, FaceProps } from "../types/analyzer";

const celebrityListAtom = atom<celebrityProps>({
    key: 'celebrityList',
    default : {celebrity : {
        confidence:0,
        value:"0",
    },}
})

const faceListAtom = atom<FaceProps>({
    key: 'faceList',
    default : {
        age : {
            confidence : 0,
            value: "",
        },
        emotion : {
            confidence:0,
            value: "",
        },
        gender : {
            confidence:0,
            value: "",
        },
        landmark:"",
        pose : "",
        roi:"",
    }
})

const imgBase64Atom = atom<string>({
    key: 'imgBase64',
    default : "",
})


export { celebrityListAtom , faceListAtom , imgBase64Atom };

