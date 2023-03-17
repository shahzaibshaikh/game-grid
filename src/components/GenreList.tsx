import { HStack, Image, List, ListItem, Text } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';
import GenreListSkeleton from './GenreListSkeleton';

function GenreList() {
  const { data, isLoading } = useGenres();
  return (
    <List>
      {isLoading && <GenreListSkeleton />}
      {data.map(genre => (
        <ListItem key={genre.id} paddingY='6px'>
          <HStack>
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              boxSize='32px'
              borderRadius={8}
            />
            <Text>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenreList;
