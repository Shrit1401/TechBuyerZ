import React from "react";
import {
  getProviders,
  signIn as signInProvider,
  useSession,
} from "next-auth/react";
import Navbar from "@/resuable/Navbar";
import Footer from "@/resuable/Footer";
import { useRouter } from "next/router";

const signIn = ({ providers }) => {
  const { data: session } = useSession();
  const router = useRouter();

  if (session) {
    router.push("/");
  }

  return (
    <div className="">
      <Navbar />
      <div className="sign-in">
        <h1>Login In Or Register Account </h1>

        {Object.values(providers).map((provider) => (
          <a
            href="#"
            className="btn"
            onClick={() => signInProvider(provider.id)}
          >
            Sign in with {provider.name}
          </a>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}

export default signIn;
