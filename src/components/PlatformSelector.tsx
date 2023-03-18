import { Box, Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { FaChevronDown } from 'react-icons/fa';
import usePlatforms from '../hooks/usePlatforms';

function PlatformSelector() {
  const { data, error, isLoading } = usePlatforms();

  if (error) return null;
  return (
    <Box paddingLeft={10}>
      <Menu>
        <MenuButton as={Button} rightIcon={<FaChevronDown />}>
          Platforms
        </MenuButton>
        <MenuList>
          {data.map(platform => (
            <MenuItem key={platform.id}>{platform.name}</MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
}

export default PlatformSelector;
