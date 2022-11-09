import { NextPage } from 'next';
import styled from "@emotion/styled";
import Link from 'next/link';

const Header:NextPage = () => {
    
    return (
        <Wapper>
            <Logo>뭐 넣지?</Logo>
            <Nav>
                <Link  href="마라탕">마라탕</Link>
                <Link href="떡볶이">떡볶이</Link>
                <Link href="라면">라면</Link>
            </Nav>
            {/* <EmptyBox /> */}
        </Wapper>
    )
}

const Wapper = styled.div`
    width: 100%;
    height: 150px;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ff6464;
    padding: 0 100px;
`;

const Logo = styled.div`
    font-size: 55px;
    color: white;
`;

const Nav = styled.nav`
    width: 300px;
    display: flex;
    justify-content: space-between;

    /* border: 1px solid black; */
    font-size: 30px;

    a{
        color: white;
    }
`;

const EmptyBox = styled.div`
`;

export default Header;

