import styled from "@emotion/styled";


export const HeaderWapper = styled.div`
    width: 100%;
    height: 15%;

    padding: 20px 10%;
    display: flex;
    justify-content: space-between;
    border: 1px solid black;
`;

export const Nav = styled.nav`
    width: 45%;

    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    border: 1px solid black;
`;



export const LinkWapper = styled.div`
    font-size: 30px;
`;

export const Title = styled.div`
    font-size: 70px;
`;

export const SignsWapper = styled.nav`
    width: 30%;

    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    gap: 30px;

    border: 1px solid black;
`;


export const SignInBtn = styled.button`
width: 70px;
height: 25px;
    background-color: white;
    border: 1px solid gray;
    border-radius: 5px;
    outline: none;
`;