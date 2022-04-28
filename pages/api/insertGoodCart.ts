import { MongoClient } from "mongodb";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<unknown>
) {
  const { username, good, term } = req.body;

  const client = await MongoClient.connect(
    "mongodb+srv://feeduraddiction:Vjq1Gfhjkm2qwerty@cluster0.8swm7.mongodb.net/yourtime-cosmetics?retryWrites=true&w=majority"
  );

  const db = client.db();
  const usersCollection = db.collection("users");

  const isGoodExists = await usersCollection.findOne({
    username,
    "metadata.cart.id": good.id,
  });

  if (isGoodExists) {
    const user = await usersCollection.updateOne(
      { username, "metadata.cart.id": good.id },
      { $inc: { "metadata.cart.$.quantity": term } }
    );
    res.status(200).json(user);
  } else {
    const user = await usersCollection.updateOne(
      { username },
      { $push: { "metadata.cart": good } }
    );
    res.status(200).json(user);
  }

  client.close();
}
