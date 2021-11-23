import React from "react";
import { getProviders, signIn } from "next-auth/client";
import { FaGoogle } from "react-icons/fa";
import Rive from "rive-react";
import { useSession } from "next-auth/client";
import { useRouter } from "next/router";
function Signin({ providers }) {
  const [session, loading] = useSession();
  const router = useRouter();
  if (session) {
    router.push("/account");
  }
  return (
    <div className="flex justify-between items-center h-screen p-0 flex-wrap">
      <div className="w-full lg:w-6/12 h-full sign-in-page flex justify-between items-center">
        <Rive src="https://inscape.mo.cloudinary.net/rives/space.riv" autoPlay />
      </div>
      <div className="w-full lg:w-6/12 bg-affair-100 h-screen max-h-screen flex justify-center items-center">
        {Object.values(providers).map((provider) => {
          if (provider.name === "Google")
            return (
              <button
                key={provider.name}
                className="w-60 pointer flex items-center justify-center "
                onClick={() => signIn(provider.id)}
              >
                <FaGoogle className="mx-2" />{" "}
                <span>Sign in with {provider.name}</span>
              </button>
            );
        })}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}

export default Signin;
