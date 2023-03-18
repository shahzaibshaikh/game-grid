import { Box, Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { FaChevronDown } from 'react-icons/fa';
import { Platform } from '../hooks/useGames';
import usePlatforms from '../hooks/usePlatforms';

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform;
}

function PlatformSelector({ onSelectPlatform, selectedPlatform }: Props) {
  const { data, error, isLoading } = usePlatforms();

  if (error) return null;
  return (
    <Box paddingLeft={10}>
      <Menu>
        <MenuButton as={Button} rightIcon={<FaChevronDown />}>
          {selectedPlatform?.name || 'Platforms'}
        </MenuButton>
        <MenuList>
          {data.map(platform => (
            <MenuItem key={platform.id} onClick={() => onSelectPlatform(platform)}>
              {platform.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
}

export default PlatformSelector;
