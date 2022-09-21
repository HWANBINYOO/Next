import { NextApiRequest, NextApiResponse } from "next";
import client from "../../../libs/client/client";
import withHandler from "../../../libs/server/withHandler";


async function handler(req:NextApiRequest, res:NextApiResponse){
    console.log(req.body);
    return res.status(200).end();
} 

export default withHandler("POST", handler);