import styled from "@emotion/styled";

export const BlogItem = styled.div`
  width: 300px;
  height: 440px;
  display: flex;
  flex-direction: column;
  border: 1px gray solid;
  margin: 2rem 2rem;
  border-radius: 5px;
  justify-content: space-between;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  cursor: pointer;
  transition: all ease 0.25s 0s;

  &:hover {
    transform: scale(1.03);
  }
`;

export const TextBox = styled.div`
  width: 90%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 1rem;
  text-align: center;
`;

export const Title = styled.span`
  width: 100%;
  height: 30px;
  font-size: 1.3rem;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
  //글자수가많으면 ...으로 처리한다
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const desc = styled.div`
  width: 100%;
  font-size: 0.8rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const ItemBottom = styled.div`
  width: 100%;
  height: 4vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: gray;
`;

export const BottomLeft = styled.div`
  display: flex;
  gap: 10px;
`;

export const MemberImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MemberId = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
`;

export const date = styled.div`
  color: gray;
`;
