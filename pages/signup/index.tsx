import SignUpPage from "@components/SignUpPage";
import { NextPage } from "next";
import Head from "next/head";

const SignUp: NextPage = () => {
  return (
    <>
      <Head>
        <title>YOURtime - Sign Up</title>
        <meta name="Sign Up" content="Sign Up page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SignUpPage />
    </>
  );
};

export default SignUp;
