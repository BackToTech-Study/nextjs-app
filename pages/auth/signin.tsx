import { ClientSafeProvider, LiteralUnion, signIn } from "next-auth/react";
import { BuiltInProviderType } from "next-auth/providers";
import { NextPage } from "next";
import { Box, Button, VStack } from "@chakra-ui/react";

export interface SignInProps {
  providers: Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  >;
}

const SignIn: NextPage<SignInProps> = ({ providers }) => {
  return (
    <VStack>
      {Object.values(providers).map((provider) => (
        <Box key={provider.name}>
          <Button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </Button>
        </Box>
      ))}
    </VStack>
  );
};

export default SignIn;
