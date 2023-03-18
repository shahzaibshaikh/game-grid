import { Grid, GridItem, Show } from '@chakra-ui/react';
import { useState } from 'react';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import NavBar from './components/NavBar';
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './hooks/useGames';
import { Genre } from './hooks/useGenres';

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px'
      }}
    >
      <GridItem area='nav' paddingX={10} paddingTop={3}>
        <NavBar />
      </GridItem>
      <Show above='lg'>
        <GridItem area='aside' paddingLeft={10} marginTop={8}>
          <GenreList
            selectedGenre={selectedGenre}
            onSelectGenre={genre => setSelectedGenre(genre)}
          />
        </GridItem>
      </Show>

      <GridItem area='main' paddingTop={10}>
        <PlatformSelector
          selectedPlatform={selectedPlatform}
          onSelectPlatform={platform => setSelectedPlatform(platform)}
        />
        <GameGrid selectedGenre={selectedGenre} selectedPlatform={selectedPlatform} />
      </GridItem>
    </Grid>
  );
}

export default App;
