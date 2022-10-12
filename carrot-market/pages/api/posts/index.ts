import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
if(req.method === "POST"){
    const {
        body: { question , latitude , longitude },
        session: {user},
    } = req;
    const post =  await client.post.create({
        data: {
            question,
            latitude,
            longitude,
            user:{
                connect: {
                    id:user?.id,
                },
            },
        },
    });
    res.json({
        ok: true,
        post,
      });
}
if(req.method === "GET"){
    const { query: {latitude, longitude},
    } = req;
    if (!latitude || !longitude) return res.status(400).json({ ok: false });
    
    const parsedLatitudeParsed = parseFloat(latitude.toString());
    const parsedLongitude = parseFloat(longitude.toString());
    const posts = await client.post.findMany({
        include: {
            user: {
                select: {
                    id:true,
                    name:true,
                    avatar:true,
                },
            },
            _count:{
                select: {
                    wondering:true,
                    answers:true,
                },
            },
        },
        where: {
            latitude: {
                gte: parsedLongitude  - 0.01,
                lte: parsedLongitude + 0.01,
            },
            longitude: {
                gte: parsedLongitude - 0.01,
                lte: parsedLongitude + 0.01,
            },
        },
    });
    res.json({
        ok:true,
        posts,
    });
}


}

export default withApiSession(
    withHandler({
        methods: ["GET" , "POST"],
        handler,
    })
);