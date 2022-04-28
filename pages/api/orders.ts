import { MongoClient, ObjectId } from "mongodb";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<unknown>
) {
  const client = await MongoClient.connect(
    "mongodb+srv://feeduraddiction:Vjq1Gfhjkm2qwerty@cluster0.8swm7.mongodb.net/yourtime-cosmetics?retryWrites=true&w=majority"
  );

  const db = client.db();

  const { order, user } = req.body;

  const ordersCollection = db.collection("orders");
  const usersCollection = db.collection("users");
  
  const insertedOrder = await ordersCollection.insertOne(order);
  const removedCart = await usersCollection.updateOne(
    { _id: new ObjectId(user.id) },
    { $set: { "metadata.cart": [] } }
  );

  res.status(200).json(removedCart);

  client.close();
}
