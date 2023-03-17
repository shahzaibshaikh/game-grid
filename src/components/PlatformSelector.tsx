import { Box, Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { FaChevronDown } from 'react-icons/fa';

function PlatformSelector() {
  return (
    <Box paddingLeft={10}>
      <Menu>
        <MenuButton as={Button} rightIcon={<FaChevronDown />}>
          Actions
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
}

export default PlatformSelector;
