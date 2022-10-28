import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { NextPage } from "next";
import { useContext } from "react";
import SignIn, { SignInProps } from "../../pages/auth/signin";
import { ShowSignInContext } from "../context/globalcontext";

const SignInModal: NextPage<SignInProps> = ({ providers }) => {
  const { showSignIn, setShowSignIn } = useContext(ShowSignInContext);

  const handleShow = () => {
    setShowSignIn(!showSignIn);
  };

  return (
    <>
      <Modal isOpen={showSignIn} onClose={handleShow}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sign In with Provider</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <SignIn providers={providers} />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme={"blue"}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SignInModal;
