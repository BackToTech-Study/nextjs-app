import { Box, Flex, useColorModeValue, Button, useColorMode, Stack, Menu, MenuButton, Avatar, MenuList, MenuDivider, MenuItem, Center } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const Navbar = () => {
    const {colorMode, toggleColorMode } = useColorMode();
    const session = true; 

    return <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <Box>NextJSApp</Box>
            <Flex>
                <Stack direction={"row"} spacing={7}>
                    <Button onClick = {toggleColorMode}>
                        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                    </Button>
                    {!session ? <Button>Sign In</Button> :
                        <Menu>
                            <MenuButton>
                                <Avatar size={"sm"} />
                            </MenuButton>
                            <MenuList>
                                <Center>
                                    <Avatar size={"2xl"} />
                                </Center>
                                <Center>
                                    <p>User Name</p>
                                </Center>
                                <MenuDivider />
                                <MenuItem>Sign Out</MenuItem>
                            </MenuList>
                        </Menu>}
                </Stack>
            </Flex>
        </Flex>
    </Box>;
}

export default Navbar;