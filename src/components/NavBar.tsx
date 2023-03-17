import { HStack, Image, Text } from '@chakra-ui/react';
import Logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';

function NavBar() {
  return (
    <HStack justifyContent='space-between'>
      <Image src={Logo} boxSize='60px' marginLeft={-2} />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
