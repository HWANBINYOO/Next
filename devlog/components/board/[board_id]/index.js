import { useRouter } from "next/router";
import Image from "next/image";
import profilenoneImg from "../../public/Img/profile.png";
import * as S from "./Styled";

export async function getStaticProps() {
  const router = useRouter();
  const board_id = router.query.board_id;
  try {
    const response = await customAxios.get(`/board/${board_id}`);
    const blogIndata = response.data;
  } catch (e) {
    console.error(e.message);
  }
  return {
    props: { blogIndata },
  };
}

const BlogIn = ({ blogIndata }) => {
  const [Blogrl, setBlogurl] = useState();
  const [DelectDisplay, setDelectDisplay] = useState(false);
  const [profileImg, setProfileImg] = useState();
  const router = useRouter();
  const board_id = router.query.board_id;
  const redirect = (url) => router.push(url);

  useEffect(() => {
    async function GetBlogImg() {
      const res = await customAxios.get(`/board_image/${board_id}`);
      setBlogurl(res.data);
      const res2 = await customAxios.get(`user_image/${blogIndata.user_id}`);
      setProfileImg(res2.data);
      const respone2 = await customAxios.get(`/user_name`);

      if (respone2.data.user_id === blogIndata.user_id) {
        setDelectDisplay(true);
      } else {
        setDelectDisplay(false);
      }
    }
    GetBlogImg();
  }, []);

  const DelectBlog = async () => {
    await customAxios.delete(`/delete/${board_id}`);
  };

  return (
    <>
      <S.BlogIndata>
        <S.BlogButtonBox>
          <S.Button
            onClick={(e) => redirect(`/boardadd`)}
            style={{ backgroundColor: "#aeddff" }}
          >
            +
          </S.Button>

          <S.Button
            onClick={DelectBlog}
            style={{
              backgroundColor: "rgb(255, 157, 149)",
              display: DelectDisplay ? "block" : "none",
            }}
          >
            x
          </S.Button>
        </S.BlogButtonBox>
        <S.Title>{blogIndata.title}</S.Title>
        <S.NameDate>
          <S.Name>
            {blogIndata.user_name} · {blogIndata.date}
          </S.Name>
        </S.NameDate>
        <S.TextBox>
          <S.Img src={Blogrl} />
          <S.desc>{blogIndata.content}</S.desc>
        </S.TextBox>
        <S.ProfileWapper
          onClick={(e) => redirect(`/profile/${blogIndata.user_id}`)}
        >
          {profileImg ? (
            <S.ProfileImg src={profileImg} />
          ) : (
            <S.ProfileImg src={profilenoneImg} />
          )}
          <S.ProfileName>{blogIndata.user_name}</S.ProfileName>
        </S.ProfileWapper>
        <Footer />
      </S.BlogIndata>
    </>
  );
};

export default BlogIn;
