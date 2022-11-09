import { NextPage } from 'next';
import styled from "@emotion/styled";
import { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';

const Header:NextPage = () => {
    
    return (
        <Wapper>
            <Logo>뭐 넣지?</Logo>
            <Nav>
                <Link href={`${"떡볶이"}`}>
                    <a>떡볶이</a>
                </Link>
                <Link href={`${"마라탕"}`}>
                    <a>마라탕</a>
                </Link>
                <Link href={`${"라면"}`}>
                    <a>라면</a>
                </Link>
            </Nav>
            <EmptyBox />
        </Wapper>
    )
}

const Wapper = styled.div`
    width: 100%;
    height: 200px;
     
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Logo = styled.div`
    font-size: 15px;
`;

const Nav = styled.nav`
    width: 200px;
    display: flex;
    justify-content: space-between;
`;

const EmptyBox = styled.div`
`;

export default Header;

