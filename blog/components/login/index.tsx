import * as S from "./styled";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { emailState, passwordState } from '../../utils/recoil/state';
import useLogin from "../../utils/lib/useLogin";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import axios from "axios";
export default function Login() {
  // const [InputEmail, setInputEmail] = useState("");         //Eamil input value
  // const [InputPassWord, setInputPassWord] = useState("");   //password ipnut value
  const [cookies, setCookie] = useCookies(["Blog_accessToken", "Blog_refreshToken"]);

  const router = useRouter();
  const AccessToKenTime = 60000 * 3;  //3분
  const RefreshTokenTime = 60000 * 60 * 24 * 7; //일주일

  const [email,setEmail] = useRecoilState(emailState);
  const [password,setPassword] = useRecoilState<string>(passwordState);

  const onLogin = async () => {
    try {
      const { data } = await axios.post(
        `http://10.120.74.59:8081/user/login`,
        {
          email: email,
          password: password,
        }
      );
      const Blog_accessToken = data.accessToken;
      const Blog_refreshToken = data.refreshToken;
      axios.defaults.headers.common["Blog_accessToken"] = `${Blog_accessToken}`;
      axios.defaults.headers.common["Blog_refreshToken"] = `${Blog_refreshToken}`;

      setCookie("Blog_accessToken", Blog_accessToken, {
          path: "/Blog_accessToken",
          secure: true,
          sameSite: "none",
          maxAge : AccessToKenTime,
        });
        setCookie("Blog_refreshToken", Blog_refreshToken, {
          path: "/Blog_refreshToken",
          secure: true,
          sameSite: "none",
          maxAge : RefreshTokenTime,
        });

      // ctx.res.setHeader("Blog_accessToken", `${Blog_accessToken}; maxAge=${AccessToKenTime};`);
      // ctx.res.setHeader("Blog_refreshToken", `${Blog_refreshToken}; maxAge=${RefreshTokenTime};`);

      router.push("/board");
    } catch (e: any) {
      console.error(e.message);
    }
  };

  return (
    <S.LoginWapper>
      <Link href="/user/login">
        <S.LoginTitle>로그인</S.LoginTitle>
      </Link>
      <S.InputsWapper>
        <S.LoginInput>
          <p>Email</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email을 입력하세요"
          />
        </S.LoginInput>
        <S.LoginInput>
          <p>PassWord</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="PassWord을 입력하세요"
          />
        </S.LoginInput>
      </S.InputsWapper>
      <S.LoginButton onClick={onLogin}>Login</S.LoginButton>
      <Link href="/user/resister">
        <p>회원가입하거가기</p>
      </Link>
    </S.LoginWapper>
  );
}
