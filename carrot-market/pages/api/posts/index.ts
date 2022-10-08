import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
const {
    body: { question},
    session: {user},
} = req;
const post =  await client.post.create({
    data: {
        question,
        user:{
            connect: {
                id:user?.id,
            },
        },
    },
});
const isWondering = Boolean(
    await client.wondering.findFirst({
        where: {
            postId:Number(id),
            userId: user?.id,
        },
        select: {
            id: true,
        },
    })
)
  res.json({
    ok: true,
    post,
    isWondering,
  });
}

export default withApiSession(
    withHandler({
        methods: ["POST"],
        handler,
    })
);