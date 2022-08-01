import CustomAxois from "./CustomAxois";
import { GetServerSidePropsContext } from "next";

const Cookie = async (ctx: GetServerSidePropsContext) => {
  let accessToken = ctx.req.cookies["accessToken"];
  const refreshToken = ctx.req.cookies["refreshToken"];
  let cookies: string[] | undefined;

  if (!accessToken) {
    const res = await CustomAxois.post(
      "/auth/refresh/web",
      {},
      { headers: { cookie: `refreshToken=${refreshToken};` } }
    );

    cookies = res.headers["set-cookie"];
    accessToken = res.data.accessToken;
  } else {
    await CustomAxois.get("/auth/check", {
      headers: { cookie: `accessToken=${accessToken};` },
    });
  }

  return { cookies, accessToken };
};

export default Cookie;