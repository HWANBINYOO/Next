import CustomAxois from "./CustomAxois";
import { GetServerSidePropsContext } from "next";

const Cookie = async (ctx: GetServerSidePropsContext) => {
  let accessToken = ctx.req.cookies["Blog_accessToken"] ;
  const refreshToken = ctx.req.cookies["Blog_refreshToken"];
  let cookies: string[] | undefined;

  
  return { cookies, accessToken };
};

export default Cookie;