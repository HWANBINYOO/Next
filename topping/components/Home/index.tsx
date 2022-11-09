import styled from "@emotion/styled";
import { useEffect, useState } from 'react';
import Image from "next/image";
import {MarathonData , RamenData , TteokbokkiData } from "../../meta"
import Topping from '../Topping';
import { useSetRecoilState } from 'recoil';
import { MenuValueAtom } from '../../recoil/state';

const Home = ({router} : {router:string}) => {
    const  setMenuValue = useSetRecoilState(MenuValueAtom);
    const [toppingData , setToppingData ] = useState<string[]>(MarathonData);
    const [sliceValue , setSliceValue] = useState("3");
    const [radomList , setRandomList ] = useState<string[]>();
    useEffect(() => {
        switch(router) {
            case "마라탕" : setToppingData(MarathonData); break;
            case "라면" : setToppingData(RamenData); break;
            case "떡볶이" : setToppingData(TteokbokkiData); break;
        }
        setMenuValue(router);
    },[router])
    console.log(toppingData);


    const onClick = () => {
        setRandomList(toppingData.sort(() =>   Math.random() - 0.5).slice(1, (Number(sliceValue) +1)))
    }
    // console.log(radomList);
    

   

    
    return (
        <Wapper>
            <HomeWapper>
                <ToppingsWapper>
                    { radomList ? (radomList?.map((i, index) =>  <Topping key={index} data={i} />) ) : (toppingData?.map((i, index) =>  <Topping key={index} data={i} />) ) }
                </ToppingsWapper>
                <ToppingImg>
                    <Image src={`/image/${router}.jpg`} alt={'이미지'} width={400} height={350}/>
                </ToppingImg>
            </HomeWapper>
            <BtnsWapper>
                <input type="range" min="1" max="5" onChange={(e) => setSliceValue(e.target.value)} value={sliceValue} />
                <span>{sliceValue}</span>
                <Btn onClick={onClick}>추천</Btn>
            </BtnsWapper>
        </Wapper>
    )
}

const Wapper = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const HomeWapper = styled.div`
    width: 100%;
    height: 700px;
    padding: 30px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ToppingsWapper = styled.div`
    width: 90%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
`;

const ToppingImg = styled.div`
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const BtnsWapper = styled.div`
    width: 400px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content:space-between;
`;

const Btn = styled.button`
    width: 130px;
    height: 50px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
`;

export default Home;