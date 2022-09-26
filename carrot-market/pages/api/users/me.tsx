import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";

// get user profile
// 모든 api는 실제 백엔드 없이 개별적으로 동작하기 때문에
// 각 api 마다 type과 withIronSessionApiRoute config를 매번 설정해줘야함
// 쿠키에 세션이 userId가 저장되어 있기 때문에 Id에 해당하는 user정보를 가져올 수 있음

declare module "iron-session" {
  interface IronSessionData {
    user?: {
      id:number;
    }
  }
}

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  console.log(req.session.user);
  const profile = await client.user.findUnique({
    where : {id:req.session.user?.id},
});
  res.json({
    ok: true,
    profile,
  });
}

export default withIronSessionApiRoute(withHandler("GET", handler), {
  cookieName: "carrotsession",
  password:
    "9845904809485098594385093840598df;slkgjfdl;gkfsdjg;ldfksjgdsflgjdfklgjdflgjflkgjdgd",
});