import { MongoClient } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";
import CryptoJS from "crypto-js";

type Data = {};

declare var process: {
  env: {
    PASS_SEC: string;
  };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { username, email, password } = req.body;

  const client = await MongoClient.connect(
    "mongodb+srv://feeduraddiction:Vjq1Gfhjkm2qwerty@cluster0.8swm7.mongodb.net/yourtime-cosmetics?retryWrites=true&w=majority"
  );

  console.log();

  const db = client.db();
  const usersCollection = db.collection("users");
  const result = await usersCollection.insertOne({
    username,
    password: CryptoJS.AES.encrypt(
      password,
      process.env.PASS_SEC,
      ).toString(),
    email,
    isAdmin: false,
  });

  client.close();
  res.status(200);
}
