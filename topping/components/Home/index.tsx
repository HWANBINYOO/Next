import { NextPage } from 'next';
import styled from "@emotion/styled";
import { useEffect, useState } from 'react';
import Image from "next/image";
import { MenuProps } from '../../types';
import {MarathonData , RamenData , TteokbokkiData } from "../../meta"

const Home = ({router} : {router:string}) => {
    const [toppingData , setToppingData ] = useState<MenuProps[]>();

    useEffect(() => {
        switch(router) {
            case "마라탕" : setToppingData(MarathonData); break;
            case "라면" : setToppingData(RamenData); break;
            case "떡볶이" : setToppingData(TteokbokkiData); break;
        }
    },[router])
    console.log(toppingData);

    const onClick = () => {
        
    }
    return (
        <Wapper>
            <HomeWapper>
                <ToppingsWapper>
                    { toppingData?.map((i, index) =>  <Topping key={index}>{i.menu}</Topping> ) }
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

