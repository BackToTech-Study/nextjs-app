import type { GetServerSideProps, NextPage } from "next";
import { BuiltInProviderType } from "next-auth/providers";
import {
  ClientSafeProvider,
  getProviders,
  LiteralUnion,
  useSession,
} from "next-auth/react";
import SignInModal from "../components/SignInModal";

export interface IndexProps {
  providers: Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  >;
}

const Home: NextPage<IndexProps> = ({ providers }) => {
  const { data: session } = useSession();

  return (
    <>
      <SignInModal providers={providers} />
      {!session ? <>You must Log In</> : <>You are logged in</>}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const providers = await getProviders();

  return {
    props: { providers },
  };
};
export default Home;
