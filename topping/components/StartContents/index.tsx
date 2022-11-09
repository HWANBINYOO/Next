import { NextPage } from 'next';
import styled from "@emotion/styled";
import { useState } from 'react';
import { useRouter } from 'next/router';

const StartContents:NextPage = () => {
    const router = useRouter();
    const [ModalState , setModalState] = useState(false);

    const onClick = (name:string) => {
        router.push(`${name}`);
    }
    return (
        <Wapper>
            <IBtn onClick={() => setModalState(ModalState ? false : true )}>i
                <Modal style={{display: ModalState ? "block" : "none"}}>
                    마라탕 , 떡볶이 , 라면 토핑과 재료를 <br/>
                    랜덤으로 추천해주는 사이트입니다
                </Modal>
            </IBtn>
            <Title>뭐 넣지?</Title>
            <Btn onClick={() => onClick("마라탕")}>시작하기</Btn>

        </Wapper>
    )
}

const Wapper = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #ff6464;

     
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;

    padding-bottom: 100px;
    gap: 130px;
`;

const Btn = styled.button`
    width: 250px;
    height: 70px;

    cursor: pointer;
    color: white;
    margin-right: 20px;
    font-size: 30px;
    border-radius: 10px;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transition: all 0.15s ease-in-out;
    background-color: #ff6464;

    :hover{
        color: black;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    }
`;

const Title = styled.span`
    color: white;
    font-size: 110px;
`;

const IBtn = styled.div`
    position: relative;
    bottom: 7%;
    left: 43%;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background-color: white;
    color: gray;
    font-size: 25px;

    display: flex;
    justify-content: center;
    align-items: flex-end;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const Modal = styled.div`
    width: 450px;
    height: 120px;
    background-color: white;
    padding: 50% 20px;
    border-radius: 10px;
    position: absolute;
    right: 0px;
    top: 50px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;


export default StartContents;

