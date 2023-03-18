import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { BsSearch } from 'react-icons/bs';

interface Props {
  onSearch: (searchText: string) => void;
}

function SearchInput({ onSearch }: Props) {
  const [searchValue, setSearchValue] = useState('');

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        onSearch(searchValue);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          value={searchValue}
          borderRadius={20}
          placeholder='Search games'
          variant='filled'
          onChange={event => setSearchValue(event.target.value)}
        />
      </InputGroup>
    </form>
  );
}

export default SearchInput;
