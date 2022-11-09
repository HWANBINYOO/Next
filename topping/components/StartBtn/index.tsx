import { NextPage } from 'next';
import styled from "@emotion/styled";
import { useState } from 'react';
import Image from "next/image";
import { useRouter } from 'next/router';

const StartBtn:NextPage = () => {
    const router = useRouter();

    const onClick = (name:string) => {
        router.push(`${name}`);
    }
    return (
        <Wapper>
            <Btn onClick={() => onClick("마라탕")}>시작하기</Btn>
        </Wapper>
    )
}

const Wapper = styled.div`
    width: 100%;
    height: 80%;
     
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Btn = styled.button`
    width: 130px;
    height: 50px;

    border-radius: 10px;
    border: none;
`;


export default StartBtn;

