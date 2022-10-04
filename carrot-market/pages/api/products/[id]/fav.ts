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
    const {
        query: {id},
        session: {user},
    } = req;
    const alreadyExists = await client.fav.findFirst({
        where: {
            productId: Number(id),
            userId: user?.id,
        },
    });
    if(alreadyExists){
        await client.fav.delete({
            where: {
                id: alreadyExists.id,
            },
        });
    } else {
        await client.fav.create({
            data: {
                user:{
                    connect: {
                        id: user?.id,
                    },
                },
                product: {
                    connect: {
                        id: Number(id),
                    },
                },
            },
        });
    }
    res.json({ok:true});
}

export default withApiSession(
    withHandler({
        methods: ["POST"],
        handler,
    })
);