import { Button, HStack, Image, List, ListItem, Text } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';
import GenreListSkeleton from './GenreListSkeleton';

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

function GenreList({ onSelectGenre }: Props) {
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
            <Button variant='link' onClick={() => onSelectGenre(genre)}>
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenreList;
