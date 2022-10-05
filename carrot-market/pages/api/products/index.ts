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

    if(req.method === "GET"){
        const products = await client.product.findMany({
            include: {
                _count: {
                    select: {
                        Favs: true,
                    }
                }
            }
        })
        res.json({
            ok: true,
            products,
        });
    }
    if(req.method === "POST"){
        //   const { name , price , description } = req.body;
        //   const { user } = req.session; //  === 아래코드
        const {
            body: { name, price, description},
            session: {user},
        } = req;
         const product = await client.product.create({
                data: {
                    name,
                    price: +price,
                    description,
                    image: "xx",
                    user: {
                        connect: {
                            id:user?.id,
                        },
                    },
                },
          });
          res.json({
            ok: true,
            product ,
          });
    }
}

export default withApiSession(
    withHandler({
        methods: ["GET" , "POST"],
        handler,
    })
);