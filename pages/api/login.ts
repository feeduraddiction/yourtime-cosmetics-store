import CryptoJS from "crypto-js";
import { MongoClient } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  username?: string;
  email?: string;
  isAdmin?: boolean;
  error?: string;
  metada?: {}
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
  const { username, password } = req.body;

  const client = await MongoClient.connect(
    "mongodb+srv://feeduraddiction:Vjq1Gfhjkm2qwerty@cluster0.8swm7.mongodb.net/yourtime-cosmetics?retryWrites=true&w=majority"
  );

  const db = client.db();
  const usersCollection = db.collection("users");

  try {
    const recievedUser = await usersCollection.findOne({
      username,
    });

    console.log("user " + recievedUser);

    if (recievedUser === null) {
      res.status(401).json({ error: "Wrong credentials!" });
      console.log('out of fnc');
      return;
    }

    const hashedPassword = CryptoJS.AES.decrypt(
      recievedUser?.password,
      process.env.PASS_SEC
    );
    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    if (originalPassword !== password) {
      res.status(401).json({ error: "Wrong credentials!" });
      return;
    }

    const user = {
      username: recievedUser?.username,
      email: recievedUser?.email,
      isAdmin: recievedUser?.isAdmin,
      metadata: recievedUser?.metadata,
    };
    client.close();
    console.log(user);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: "Error occured" + error });
  }
}
