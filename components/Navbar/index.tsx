import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useContext } from "react";
import { ShowSignInContext } from "../context/globalcontext";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { data: session } = useSession();
  const { showSignIn, setShowSignIn } = useContext(ShowSignInContext);

  const handleSignInClick = () => {
    setShowSignIn(!showSignIn);
  };

  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box>NextJSApp</Box>
        <Flex>
          <Stack direction={"row"} spacing={7}>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
            {!session ? (
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  handleSignInClick();
                }}
              >
                SignIn
              </Button>
            ) : (
              <Menu>
                <MenuButton rounded={"full"} cursor={"pointer"} minW={0}>
                  <Avatar size={"sm"} src={session.user?.image || ""} />
                </MenuButton>
                <MenuList>
                  <Center>
                    <Avatar size={"2xl"} src={session.user?.image || ""} />
                  </Center>
                  <Center>
                    <p>{session.user?.name}</p>
                  </Center>
                  <MenuDivider />
                  <MenuItem
                    onClick={(e) => {
                      e.preventDefault();
                      signOut();
                    }}
                  >
                    LogOut
                  </MenuItem>
                </MenuList>
              </Menu>
            )}
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
