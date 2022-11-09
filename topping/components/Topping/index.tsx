import styled from "@emotion/styled";

const Topping = ({data} : {data:string}) => {

    return (
        <ToppingWapper>{data}</ToppingWapper>
    )
}

const ToppingWapper = styled.div`
    width: 300px;
    height: 70px;

    border: 1px solid black;
    font-size: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius:10px;
    background-color: #ff8780;
    color: white;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;


export default Topping;

