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
            case "마라탕" : setToppingData(MarathonData); setRandomList(MarathonData); break;
            case "라면" : setToppingData(RamenData); setRandomList(RamenData);  break;
            case "떡볶이" : setToppingData(TteokbokkiData); setRandomList(TteokbokkiData); break;
        }
        setMenuValue(router);
    },[router]);

    const onClick = () => {
        setRandomList(toppingData.sort(() => Math.random() - 0.5).slice(1, (Number(sliceValue) +1)))
    }
    
    return (
        <Wapper>
            <HomeWapper>
                <ToppingImg>
                    {/* <Image src={`/image/${router}.jpg`} alt={'이미지'} width={400} height={350}/> */}
                    <h1 style={{fontSize: "70px"}}> 마라탕</h1>
                </ToppingImg>
                <ToppingsWapper>
                    { radomList ? (radomList?.map((i, index) =>  <Topping key={index} data={i} />) ) : (toppingData?.map((i, index) =>  <Topping key={index} data={i} />) ) }
                </ToppingsWapper>
            </HomeWapper>
            <BtnsWapper>
                <input type="range" min="1" max="5" onChange={(e) => setSliceValue(e.target.value)} value={sliceValue} />
                <Btn onClick={onClick}>{sliceValue}개추천</Btn>
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
    background-color: white;
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
    width: 600px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content:space-between;

    input[type="range"] {
    overflow: hidden;
    height: 30px;
    -webkit-appearance: none;
    margin: 10px 0;
    width: 250px;
    background: transparent;
}
input[type="range"]:focus {
	outline: none;
}
input[type="range"]::-webkit-slider-runnable-track {
    width: 100%;
    height: 100%;
    cursor: pointer;
    border-radius: 5px;
    border: 2px solid #ffc3bb;
}
input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 30px;
    height: 30px;
    background: #ff6464;
    box-shadow: 1px 1px 7px #ffc3bb;
    cursor: pointer;
    box-shadow: -100vw 0 0 100vw #ffc3bb;
}
`;

const Btn = styled.button`
    width: 250px;
    height: 50px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    font-size: 25px;
    background-color: #ff6464;
    color: white;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    transition: all 0.3s ease-in-out;

    :hover{
        box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    }
`;

export default Home;