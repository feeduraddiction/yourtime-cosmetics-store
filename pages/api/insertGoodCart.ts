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
  const { username, good } = req.body;

  const client = await MongoClient.connect(
    "mongodb+srv://feeduraddiction:Vjq1Gfhjkm2qwerty@cluster0.8swm7.mongodb.net/yourtime-cosmetics?retryWrites=true&w=majority"
  );

  const db = client.db();

  const usersCollection = db.collection("users");
  const isGoodExists = await usersCollection.findOne({
    "metadata.cart.id": good.id,
  });
  console.log("exists?: " + JSON.stringify(isGoodExists));

  if (isGoodExists) {
    const user = await usersCollection.updateOne(
      { username, "metadata.cart.id": good.id },
      { $inc: { "metadata.cart.$.quantity": 1 } }
    );
    res.status(200).json(user);
  } else {
    const user = await usersCollection.updateOne(
        { username },
        { $push: { "metadata.cart": good } }
      );
  }
  
  client.close();
}
