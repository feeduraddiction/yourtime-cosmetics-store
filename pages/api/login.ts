import { MongoClient } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  username: string;
  password: string;
  isAdmin: boolean;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { username, password } = req.body;

  const client = await MongoClient.connect(
    "mongodb+srv://feeduraddiction:Vjq1Gfhjkm2qwerty@cluster0.8swm7.mongodb.net/yourtime-cosmetics?retryWrites=true&w=majority"
  );

  const db = client.db();
  const usersCollection = db.collection("users");
  const recievedUser = await usersCollection.findOne({ username, password });
  const user = {
    username: recievedUser?.username,
    password: recievedUser?.password,
    isAdmin: recievedUser?.isAdmin,
  };
  console.log(user);
  client.close();
  res.status(200).json(user);
}
