import { useRouter } from "next/router";
import Image from "next/image";
import profilenoneImg from "../../public/Img/profile.png";
import * as S from "./Styled";

export async function getStaticProps() {
  const router = useRouter();
  const board_id = router.query.board_id;
  try {
    const response = await customAxios.get(`/board/${board_id}`);
    const boardIndata = response.data;
  } catch (e) {
    console.error(e.message);
  }
  return {
    props: { boardIndata },
  };
}

const BoardIn = ({ boardIndata }) => {
  const [Boardrl, setBoardurl] = useState();
  const [DelectDisplay, setDelectDisplay] = useState(false);
  const [profileImg, setProfileImg] = useState();
  const router = useRouter();
  const board_id = router.query.board_id;
  const redirect = (url) => router.push(url);

  useEffect(() => {
    async function GetBoardImg() {
      const res = await customAxios.get(`/board_image/${board_id}`);
      setBoardurl(res.data);
      const res2 = await customAxios.get(`user_image/${boardIndata.user_id}`);
      setProfileImg(res2.data);
      const respone2 = await customAxios.get(`/user_name`);

      if (respone2.data.user_id === boardIndata.user_id) {
        setDelectDisplay(true);
      } else {
        setDelectDisplay(false);
      }
    }
    GetBoardImg();
  }, []);

  const DelectBoard = async () => {
    await customAxios.delete(`/delete/${board_id}`);
  };

  return (
    <S.BoardInWapper>
      <S.BoardButtonBox>
        <S.Button
          onClick={(e) => redirect(`/boardadd`)}
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
      <S.Title>{boardIndata.title}</S.Title>
      <S.NameDate>
        <S.Name>
          {boardIndata.user_name} · {boardIndata.date}
        </S.Name>
      </S.NameDate>
      <S.TextBox>
        <Image src={Boardrl} width={`40%`} />
        <S.desc>{boardIndata.content}</S.desc>
      </S.TextBox>
      <S.ProfileWapper
        onClick={(e) => redirect(`/profile/${boardIndata.user_id}`)}
      >
        {profileImg ? (
          <S.ProfileImg src={profileImg} />
        ) : (
          <S.ProfileImg src={profilenoneImg} />
        )}
        <S.ProfileName>{boardIndata.user_name}</S.ProfileName>
      </S.ProfileWapper>
      <Footer />
    </S.BoardInWapper>
  );
};

export default BoardIn;
