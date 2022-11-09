import { NextPage } from 'next';
import styled from "@emotion/styled";
import { useState } from 'react';
import Image from "next/image";

const Home:NextPage = () => {

    const onClick = () => {
        
    }
    return (
        <Wapper>
            <HomeWapper>
                <ToppingsWapper>
                    <Topping>{"a"}</Topping>
                </ToppingsWapper>
                <ToppingImg>
                    <Image src={''} alt={''}></Image>
                </ToppingImg>
            </HomeWapper>
            <Btn onClick={onClick}>추천</Btn>
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

const HomeWapper = styled.div`
    width: 50%;
    height: 300px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;

const ToppingsWapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Topping = styled.span`
    font-size: 15px;
`;

const ToppingImg = styled.div`
    width: 200px;
    height: 200px;
`;

const Btn = styled.button`
    width: 130px;
    height: 50px;

    border-radius: 10px;
    border: none;
`;

export default Home;

