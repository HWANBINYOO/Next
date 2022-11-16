import { NextPage } from 'next';
import styled from "@emotion/styled";

const Header:NextPage = () => {

    return (
        <Wapper>
            <HeaderTitle>
                Face Analyzer
            </HeaderTitle>
        </Wapper>
    )
}

const Wapper = styled.div`
    width: 100%;
    height: 100px;
    background-color:#222831;
     
    display: flex;
    justify-content: center;
    align-items: center;
`;

const HeaderTitle = styled.p`
    font-size: 40px;
    color: white;
`;

export default Header;

