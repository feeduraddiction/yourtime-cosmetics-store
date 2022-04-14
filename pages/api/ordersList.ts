import { MongoClient } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<unknown>
) {
  const { user } = req.body;
  const client = await MongoClient.connect(
    "mongodb+srv://feeduraddiction:Vjq1Gfhjkm2qwerty@cluster0.8swm7.mongodb.net/yourtime-cosmetics?retryWrites=true&w=majority"
  );

  const db = client.db();
  const ordersCollection = db.collection("orders");
  const result = await ordersCollection
    .find({ "order.userID": user.id })
    .toArray();
  const data = result.map((item) => {
    return {
      order: {
        id: item._id.toString(),
        orderInfo: item.order,
      },
    };
  });
  res.status(200).json(data);
  client.close();
}
