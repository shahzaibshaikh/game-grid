import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Text,
  Wrap,
  WrapItem
} from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';
import GenreListSkeleton from './GenreListSkeleton';

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

function GenreList({ onSelectGenre, selectedGenre }: Props) {
  const { data, isLoading } = useGenres();
  return (
    <List>
      {isLoading && <GenreListSkeleton />}
      {data.map(genre => (
        <ListItem key={genre.id} paddingY='6px'>
          <HStack justifyContent='flex-start'>
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              boxSize='32px'
              borderRadius={8}
            />
            <Wrap justifyContent='flex-start'>
              <WrapItem>
                <Button
                  justifySelf='flex-start'
                  whiteSpace='normal'
                  color={genre.id === selectedGenre?.id ? '#31a7cd' : ''}
                  variant='link'
                  onClick={() => onSelectGenre(genre)}
                >
                  {genre.name}
                </Button>
              </WrapItem>
            </Wrap>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenreList;
