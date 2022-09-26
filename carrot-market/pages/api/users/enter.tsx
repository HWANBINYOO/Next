import twilio from "twilio";
import { NextApiRequest, NextApiResponse } from "next";
import withHandler, {ResponseType} from "@libs/server/withHandler";
import client from "@libs/server/client"

const twilioClient = twilio(process.env.TWILIO_SID , process.env.TWILIO_TOKEN);

async function handler(req: NextApiRequest, res: NextApiResponse<ResponseType>) {
  const { phone, email } = req.body;
  const user = phone ? { phone: +phone } : email ? { email } : null;
  if(!user) return res.status(400).json({ok: false}); // 유저가 없다면
  const payload = Math.floor(100000 + Math.random() * 900000) + "";
  const token = await client.token.create({
    data: {
      payload,
      user: {
        connectOrCreate: {
          where: {
            ...user,
          },
          create: {
            name: "Anonymous",
            ...user,
          },
        },
      },
    },
  });
  if(phone){    // 유저가 phone 번호를 보냈다면
    // const message = await twilioClient.messages.create({
    //     messagingServiceSid: process.env.TWILIO_MSID,
    //     to: process.env.MY_PHONE!,
    //     body: `Your login token is ${payload}.`,
    //   });
    //   console.log(message);
  }
  if (email) {
    // const mailOptions = {
    // from: process.env.MAIL_ID,
    // to: email,
    // subject: "Nomad Carrot Authentication Email",
    // text: `Authentication Code : ${payload}`,
    // };
    // const result = await smtpTransport.sendMail(
    // mailOptions,
    // (error, responses) => {
    // if (error) {
    // console.log(error);
    // return null;
    // } else {
    // console.log(responses);
    // return null;
    // }
    // }
    // );
    // smtpTransport.close();
    // console.log(result);
    }
  return res.json({
    ok: true,
  });
}

export default withHandler("POST", handler);