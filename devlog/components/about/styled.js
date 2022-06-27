import styled from "@emotion/styled";

export const AboutWapper = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  overflow-y: scroll;
  overflow-x: hidden;
  gap: 30px;

  &::-webkit-scrollbar {
    width: 12px; /* 스크롤바의 너비 */
  }

  &::-webkit-scrollbar-thumb {
    height: 20%; /* 스크롤바의 길이 */
    background: #c8abc5; /* 스크롤바의 색상 */

    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: #e4d4e2; /*스크롤바 뒷 배경 색상*/
  }
`;

export const IntrudeceWapper = styled.div`
  width: 100%;
  height: max-content;
  margin-top: 50px;
  display: flex;
  justify-content: center;
`;

export const About = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  overflow-y: scroll;
  overflow-x: hidden;
  gap: 30px;

  &::-webkit-scrollbar {
    width: 12px; /* 스크롤바의 너비 */
  }

  &::-webkit-scrollbar-thumb {
    height: 20%; /* 스크롤바의 길이 */
    background: #c8abc5; /* 스크롤바의 색상 */

    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: #e4d4e2; /*스크롤바 뒷 배경 색상*/
  }
`;

export const Intrudece = styled.div`
  width: 40%;
  height: 600px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: flex-end;
  text-align: center;
  font-size: 1.3rem;

  p {
    text-decoration: none;
    font-size: 2rem;
    font-weight: bold;
  }

  img {
    width: 40%;
    height: 400px;
    object-fit: cover;
    border-radius: 10px;
  }
`;

export const AboutContents = styled.div`
  width: 90vw;
  padding: 3rem 5vw;
  height: 2500px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 50px;
  justify-content: space-around;
`;

export const AboutContent = styled.div`
  width: 600px;
  height: 200px;
  display: flex;
  justify-content: space-between;
`;

export const decs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  width: 200px;
  margin: auto 0;

  p {
    font-size: 1.3rem;
  }
`;
