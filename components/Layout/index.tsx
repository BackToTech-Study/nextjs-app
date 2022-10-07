import { Stack } from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import Navbar from "../Navbar";

export type LayoutProps = {
  children?: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children, ...props }) => {
  return (
    <>
      <Navbar />
      <Stack {...props}>{children}</Stack>
    </>
  );
};

export default Layout;
