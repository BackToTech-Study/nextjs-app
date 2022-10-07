import {FC} from 'react';
import Navbar from '../navbar';
import {Stack, Box} from '@chakra-ui/react';

export type LayoutProps = {
    children: React.ReactNode;
};

const Layout: FC<LayoutProps> = 
({children, ...props}) => {
    return <>
        <Navbar />
        <Stack {...props}>
            {children}
        </Stack>
    </>
}

export default Layout;
