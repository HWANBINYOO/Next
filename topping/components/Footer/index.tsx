import { NextPage } from 'next';
import styled from "@emotion/styled";
import Link from 'next/link';

const Footer:NextPage = () => {
    
    return (
        <Wapper></Wapper>
    )
}

const Wapper = styled.div`
    width: 100%;
    height: 20px;
    position: fixed;
    bottom: 0;
    background-color: black;
`;

export default Footer;