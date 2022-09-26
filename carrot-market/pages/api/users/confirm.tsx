import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { token } = req.body; // req.body에 token을 담아 보냈다.
  const foundToken = await client.token.findUnique({
    where: {
      payload: token,
    },
  });
  if (!foundToken) return res.status(404).end();  // 토큰이 없으면 404
  req.session.user = {                            // 토큰이 있으면
    id: foundToken.userId,
  };
  await req.session.save(); // session 저장
  await client.token.deleteMany({ // token의 userId와 같은 userId를 가진 token을 전부 삭제
    where: {
      userId: foundToken.userId,
    },
  });
}

export default withApiSession(withHandler("POST", handler));