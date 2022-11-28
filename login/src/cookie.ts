import { NextApiRequest } from "next";

const Cookie = async (res: NextApiRequest) => {
  let accessToken;
  // let accessToken = res.headers['Blog_accessToken']
  // const refreshToken = ctx.req.cookies["Blog_refreshToken"] ;
  let cookies: string[] | undefined;
  
  return { cookies, accessToken };
};

export default Cookie;