import { MongoClient } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";
import CryptoJS from "crypto-js";

type Data = {
  username: string,
  email: string,
  isAdmin: boolean,
  metadata: {},
};

declare var process: {
  env: {
    PASS_SEC: string;
  };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { username, email, password, metadata } = req.body;

  const client = await MongoClient.connect(
    "mongodb+srv://feeduraddiction:Vjq1Gfhjkm2qwerty@cluster0.8swm7.mongodb.net/yourtime-cosmetics?retryWrites=true&w=majority"
  );

  const db = client.db();
  const usersCollection = db.collection("users");
  const result = await usersCollection.insertOne({
    username,
    password: CryptoJS.AES.encrypt(password, process.env.PASS_SEC).toString(),
    email,
    isAdmin: false,
    metadata,
  });
  
  const userToSend = {
    username,
    email,
    isAdmin: false,
    metadata,
  };

  res.status(200).json(userToSend);
  client.close();
}
