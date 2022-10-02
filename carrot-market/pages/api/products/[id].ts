import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";

// get user profile
// 모든 api는 실제 백엔드 없이 개별적으로 동작하기 때문에
// 각 api 마다 type과 withIronSessionApiRoute config를 매번 설정해줘야함
// 쿠키에 세션이 userId가 저장되어 있기 때문에 Id에 해당하는 user정보를 가져올 수 있음


async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
    const { id } = req.query;
    const product = await client.product.findUnique({
        where: {
            id: Number(id),
        },
        include: {
            user: {
                select: {      //user id,name만 받아오기
                    id:true,
                    name: true,
                    avatar: true,
                }
            }
        },
    });
    console.log(product);
    res.json({ok:true, product});
    
}

export default withApiSession(
    withHandler({
        methods: ["GET"],
        handler,
    })
);