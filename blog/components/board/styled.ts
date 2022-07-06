import styled from "styled-components";

export const BlogWapper = styled.div`
  width: 100vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 12px; /* 스크롤바의 너비 */
  }

  &::-webkit-scrollbar-thumb {
    height: 20%; /* 스크롤바의 길이 */
    background: #9cdbdf; /* 스크롤바의 색상 */

    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: #cafaff; /*스크롤바 뒷 배경 색상*/
  }
`;

export const BlogButtonBox = styled.div`
  width: max-content;
  height: max-content;
  position: fixed;
  right: 10vw;
  top: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10%;
  z-index: 100;
  gap: 1px;
  transition: all ease 0.25s 0s;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  a {
    text-decoration: none;
    color: black;
  }

  &:hover {
    background-color: #d3d3d3;
  }
`;

export const Button = styled.button`
  z-index: -10;
  width: 4rem;
  height: 1.3rem;
  background-color: ${(props) => props.color};
  outline: none;
  border-radius: 10px;
  border: none;
  font-size: 0.3rem;
`;

export const BLogWarpper = styled.div`
  margin: 0 auto;
  width: 80%;
  height: 2000px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const loadingWapper = styled.div`
  width: 10vw;
  height: 90%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;
