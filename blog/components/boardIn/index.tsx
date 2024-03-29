import { useRouter } from "next/router";
import Image from "next/image";
import profilenoneImg from "../../public/Img/profile.png";
import * as S from "./styled";
import { useEffect, useState } from "react";
import { PostIdType } from "../../types";
import whiteImg from "../../public/Img/white.png"
import useSWR from 'swr';
import {Comment} from '../index'
import CustomAxios from "../../utils/lib/CustomAxios";

const BoardIn = () => {
  const router = useRouter();
  const redirect = (url: string) => router.push(url);
  const { data:boardIndata , mutate } = useSWR<PostIdType>(`/post/${router.query.postid}`);
  const [Boardrl, setBoardurl] = useState(boardIndata?.imageUrl);
  const [DelectDisplay, setDelectDisplay] = useState(false);
  const [profileImg, setProfileImg] = useState("");  
  const [commentValue , setCommentValue] = useState("");
  // const {data:user} = useSWR<userType>(`/user/${boardIndata?.userId}`);

  useEffect(() => {
      if (boardIndata?.isMine) {
        setDelectDisplay(true);
      } else {
        setDelectDisplay(false);
      }
    console.log(boardIndata);
  }, [boardIndata]);

  const handleClick = async() => {
    if(!commentValue) return console.log("글을 작성하셈");
    try{
      const res = await CustomAxios.post(`/comment/${router.query.postid}`,{comment:commentValue})
      mutate()
      setCommentValue("")
      console.log(res);
    }catch(e){
      console.log(e);
    }
  }

  const DelectBoard = async () => {
    try{
    await CustomAxios.delete(`/post/${boardIndata?.postId}`);
    redirect('/post')
    }catch(e){console.log(e)}
  };

  return (
    <S.BoardInWapper>
      <S.BoardButtonBox>
        <S.Button
          onClick={() => redirect(`/boardadd`)}
          style={{ backgroundColor: "#aeddff" }}
        >
          +
        </S.Button>

        <S.Button
          onClick={DelectBoard}
          style={{
            backgroundColor: "rgb(255, 157, 149)",
            display: DelectDisplay ? "block" : "none",
          }}
        >
          x
        </S.Button>
      </S.BoardButtonBox>
      <S.Title>{boardIndata?.title}</S.Title>
      <S.NameDate>
        <S.Name>
          {/* {boardIndata?.user_name} · {boardIndata?.date} */}
          "유저이름 · 날짜"
        </S.Name>
      </S.NameDate>
      <S.TextBox>
        {
          Boardrl ?
          (<Image src={Boardrl ?? whiteImg} width={200} height={550} objectFit={"cover"} alt="boardIn 이미지" />)
          : (<Image src={whiteImg} width={200}  height={150} alt="로딩 이미지" />)
        }
      <S.desc>{boardIndata?.content}</S.desc>
      </S.TextBox>
      <S.ProfileWapper>
        {
          profileImg ?
          <Image
          src={profileImg ?? profilenoneImg}
          width={150}
          height={150}
          objectFit="cover"
          alt="profile 이미지"
        /> :
        <Image
        src={profilenoneImg}
        width={150}
        height={150}
        objectFit="cover"
        alt="profile 이미지"
        />
      }
        <S.ProfileName>{"유저이름"}</S.ProfileName>
      </S.ProfileWapper>
      <S.CommentCreateWapper>
        <S.CommentInput onChange={(e) => setCommentValue(e.target.value)} value={commentValue} onKeyDown={(e) => {
						if (e.key === 'Enter')
            handleClick()
					}}/>
        <S.CreateBtn onClick={handleClick}>댓글작성</S.CreateBtn>
      </S.CommentCreateWapper>

      <S.CommentsWapper>
        {boardIndata?.comments ? (
          boardIndata?.comments.map((item,index) => (
            <Comment key={index} name={item.user.name} contant={item.comment} isMine={item.isMine} commentId={item.id} />
        ))
        ) : (
          <p>loadding...</p>
        )}
      </S.CommentsWapper>
    </S.BoardInWapper>
  );
};

export default BoardIn;