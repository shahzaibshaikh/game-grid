import { Box, Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { FaChevronDown } from 'react-icons/fa';

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  selectedOrder: string;
}

function SortSelector({ onSelectSortOrder, selectedOrder }: Props) {
  const sortOrders = [
    { value: '', label: 'Relevance' },
    { value: '-added', label: 'Date added' },
    { value: 'name', label: 'Name' },
    { value: '-released', label: 'Release date' },
    { value: '-metacritic', label: 'Popularity' },
    { value: '-rating', label: 'Average rating' }
  ];

  const currentSortOrder = sortOrders.find(order => order.value === selectedOrder);

  return (
    <Box paddingLeft={10}>
      <Menu>
        <MenuButton as={Button} rightIcon={<FaChevronDown />}>
          Order by: {currentSortOrder?.label || 'Relevance'}
        </MenuButton>
        <MenuList>
          {sortOrders.map(order => (
            <MenuItem
              onClick={() => onSelectSortOrder(order.value)}
              key={order.value}
              value={order.value}
            >
              {order.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
}

export default SortSelector;
