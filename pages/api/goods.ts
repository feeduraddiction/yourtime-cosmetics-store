import { MongoClient } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  brand: string;
  id: string;
  name: string;
  price: number;
  image: string;
  type: string;
}[];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const client = await MongoClient.connect(
    "mongodb+srv://feeduraddiction:Vjq1Gfhjkm2qwerty@cluster0.8swm7.mongodb.net/yourtime-cosmetics?retryWrites=true&w=majority"
  );

  const db = client.db();

  const goodsCollection = db.collection("yourtime");

  const recievedGoods = await goodsCollection.find().toArray();

  const goods = recievedGoods.map((good) => {
    return {
      brand: good.brand,
      name: good.name,
      id: good._id.toString(),
      image: good.image,
      price: good.price,
      type: good.type,
    };
  });
  res.status(200).json(goods);
}
