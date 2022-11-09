import { NextPage } from 'next';
import styled from "@emotion/styled";
import Link from 'next/link';
import { useRecoilState} from 'recoil';
import { MenuValueAtom } from '../../recoil/state';

const Header:NextPage = () => {
    const  [ menuValue,] = useRecoilState(MenuValueAtom);
    
    return (
        <Wapper>
            <Logo>뭐 넣지?</Logo>
            <Nav>
                <Link  href="마라탕" style={{borderBottom: menuValue === "마라탕" ? "5px solid white" : "none"}}>마라탕</Link>
                <Link href="떡볶이" style={{borderBottom: menuValue === "떡볶이" ? "5px solid white" : "none"}}>떡볶이</Link>
                <Link href="라면" style={{borderBottom: menuValue === "라면" ? "5px solid white" : "none"}}>라면</Link>
            </Nav>
        </Wapper>
    )
}

const Wapper = styled.div`
    width: 100%;
    height: 130px;
    
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
    font-size: 30px;

    a{
        color: white;
    }
`;

export default Header;

