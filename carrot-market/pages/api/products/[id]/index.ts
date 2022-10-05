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
    const {query: {id}, session:{user}} = req;
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
                },
            },
        },
    });
    const terms = product?.name.split(" ").map(word => ({
        name: {
            contains: word,
        },
    })); 
    const relatedProducts = await client.product.findMany({
        where: {
            OR: terms,  // 하나 이상의 조건이 true를 반환해야 합니다.
            AND: {      // 모든 조건이 true를 반환해야 합니다.
                id: {
                    not: product?.id,
                },
            },
        },
    });
    const isLiked = Boolean(
        await client.fav.findFirst({
            where: {
                productId: product?.id,
                userId: user?.id,
            },
            select: {
                id:true,
            },
        })
    );
    res.json({ok:true, product, isLiked , relatedProducts});
}

export default withApiSession(
    withHandler({
        methods: ["GET"],
        handler,
    })
);