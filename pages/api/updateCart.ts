import { MongoClient, ObjectId } from "mongodb";

import type { NextApiRequest, NextApiResponse } from "next";

// type Data = {
//   //   id?: string;
//   //   username?: string;
//   //   email?: string;
//   //   isAdmin?: boolean;
//   //   error?: string;
//   //   metada?: {};
// };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<unknown>
) {
  const { username, term, goodID } = req.body;

  const client = await MongoClient.connect(
    "mongodb+srv://feeduraddiction:Vjq1Gfhjkm2qwerty@cluster0.8swm7.mongodb.net/yourtime-cosmetics?retryWrites=true&w=majority"
  );

  const db = client.db();

  const usersCollection = db.collection("users");

  const user = await usersCollection.updateOne(
    { username, "metadata.cart.id": goodID },
    { $inc: { "metadata.cart.$.quantity": term } }
  );

  res.status(200).json(user);

  client.close();
}