import { MongoClient, ObjectId } from "mongodb";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<unknown>
) {
  const { username, term, goodID } = req.body;

  const client = await MongoClient.connect(
    "mongodb+srv://feeduraddiction:Vjq1Gfhjkm2qwerty@cluster0.8swm7.mongodb.net/yourtime-cosmetics?retryWrites=true&w=majority"
  );

  const db = client.db();

  const order = req.body;

  const ordersCollection = db.collection("orders");
  

  const insertedOrder = await ordersCollection.insertOne({order});


  res.status(200).json('hi');

  client.close();
}
