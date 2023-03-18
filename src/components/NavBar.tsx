import { HStack, Image, Text } from '@chakra-ui/react';
import Logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

interface Props {
  onSearch: (searchText: string) => void;
}

function NavBar({ onSearch }: Props) {
  return (
    <HStack justifyContent='space-between'>
      <Image src={Logo} boxSize='60px' marginLeft={-2} />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
