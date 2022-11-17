import { NextPage } from 'next';
import styled from "@emotion/styled";
import { useRouter } from 'next/router';
import { useResetRecoilState , useRecoilState} from 'recoil';
import { imgBase64Atom , celebrityListAtom , faceListAtom } from '../../Atoms/state';

const Header:NextPage = () => {
    const router = useRouter();
    const [, setImgBase64] = useRecoilState(imgBase64Atom);
    const resetcelebrityList = useResetRecoilState(celebrityListAtom);
    const resetFaceList = useResetRecoilState(faceListAtom);
    const onClick = () => {
        setImgBase64("")
        resetcelebrityList
        resetFaceList
        router.push('/')
    }
    return (
        <Wapper>
            <HeaderTitle onClick={onClick}>
                Face Analyzer
            </HeaderTitle>
        </Wapper>
    )
}

const Wapper = styled.div`
    width: 100%;
    height: 140px;
    background-color:#222831;
     
    display: flex;
    justify-content: center;
    align-items: center;
`;

const HeaderTitle = styled.p`
    font-size: 50px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    
    @media (max-width: 768px) {
        font-size: 30px;
    }
`;

export default Header;

