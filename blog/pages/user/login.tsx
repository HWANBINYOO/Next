import { NextApiResponse } from "next";
import Login from "../../components/login";

export default function LoginPage(res: NextApiResponse) {
  const AccessToKenTime = 60000 * 3;  //3분
  const RefreshTokenTime = 60000 * 60 * 24 * 7; //일주일

  function setHeaderName(HeaderName : string){
    res.setHeader(HeaderName, `${HeaderName}; maxAge=${HeaderName};`);
  }
  return (
    <>
      <Login setHeaderName={setHeaderName}/>
    </>
  );
}
