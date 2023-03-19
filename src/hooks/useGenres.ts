import useData from './useData';

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const genreData = {
  count: 19,
  next: null,
  previous: null,
  results: [
    {
      id: 4,
      name: 'Action',
      slug: 'action',
      games_count: 178281,
      image_background:
        'https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg',
      games: [
        {
          id: 3498,
          slug: 'grand-theft-auto-v',
          name: 'Grand Theft Auto V',
          added: 19058
        },
        {
          id: 3328,
          slug: 'the-witcher-3-wild-hunt',
          name: 'The Witcher 3: Wild Hunt',
          added: 18205
        },
        {
          id: 5286,
          slug: 'tomb-raider',
          name: 'Tomb Raider (2013)',
          added: 15027
        },
        {
          id: 4291,
          slug: 'counter-strike-global-offensive',
          name: 'Counter-Strike: Global Offensive',
          added: 14837
        },
        {
          id: 12020,
          slug: 'left-4-dead-2',
          name: 'Left 4 Dead 2',
          added: 14545
        },
        {
          id: 5679,
          slug: 'the-elder-scrolls-v-skyrim',
          name: 'The Elder Scrolls V: Skyrim',
          added: 14445
        }
      ]
    },
    {
      id: 51,
      name: 'Indie',
      slug: 'indie',
      games_count: 51360,
      image_background:
        'https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg',
      games: [
        {
          id: 1030,
          slug: 'limbo',
          name: 'Limbo',
          added: 12312
        },
        {
          id: 3272,
          slug: 'rocket-league',
          name: 'Rocket League',
          added: 11217
        },
        {
          id: 422,
          slug: 'terraria',
          name: 'Terraria',
          added: 11018
        },
        {
          id: 9767,
          slug: 'hollow-knight',
          name: 'Hollow Knight',
          added: 9582
        },
        {
          id: 3612,
          slug: 'hotline-miami',
          name: 'Hotline Miami',
          added: 9398
        },
        {
          id: 3790,
          slug: 'outlast',
          name: 'Outlast',
          added: 9333
        }
      ]
    },
    {
      id: 3,
      name: 'Adventure',
      slug: 'adventure',
      games_count: 137146,
      image_background:
        'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
      games: [
        {
          id: 3498,
          slug: 'grand-theft-auto-v',
          name: 'Grand Theft Auto V',
          added: 19058
        },
        {
          id: 3328,
          slug: 'the-witcher-3-wild-hunt',
          name: 'The Witcher 3: Wild Hunt',
          added: 18205
        },
        {
          id: 5286,
          slug: 'tomb-raider',
          name: 'Tomb Raider (2013)',
          added: 15027
        },
        {
          id: 13536,
          slug: 'portal',
          name: 'Portal',
          added: 14567
        },
        {
          id: 28,
          slug: 'red-dead-redemption-2',
          name: 'Red Dead Redemption 2',
          added: 13797
        },
        {
          id: 3439,
          slug: 'life-is-strange-episode-1-2',
          name: 'Life is Strange',
          added: 13776
        }
      ]
    },
    {
      id: 5,
      name: 'RPG',
      slug: 'role-playing-games-rpg',
      games_count: 53928,
      image_background:
        'https://media.rawg.io/media/games/e6d/e6de699bd788497f4b52e2f41f9698f2.jpg',
      games: [
        {
          id: 3328,
          slug: 'the-witcher-3-wild-hunt',
          name: 'The Witcher 3: Wild Hunt',
          added: 18205
        },
        {
          id: 5679,
          slug: 'the-elder-scrolls-v-skyrim',
          name: 'The Elder Scrolls V: Skyrim',
          added: 14445
        },
        {
          id: 802,
          slug: 'borderlands-2',
          name: 'Borderlands 2',
          added: 13767
        },
        {
          id: 58175,
          slug: 'god-of-war-2',
          name: 'God of War (2018)',
          added: 12115
        },
        {
          id: 3070,
          slug: 'fallout-4',
          name: 'Fallout 4',
          added: 12105
        },
        {
          id: 278,
          slug: 'horizon-zero-dawn',
          name: 'Horizon Zero Dawn',
          added: 11555
        }
      ]
    },
    {
      id: 10,
      name: 'Strategy',
      slug: 'strategy',
      games_count: 53693,
      image_background:
        'https://media.rawg.io/media/games/e44/e445335e611b4ccf03af71fffcbd30a4.jpg',
      games: [
        {
          id: 13633,
          slug: 'civilization-v',
          name: "Sid Meier's Civilization V",
          added: 8514
        },
        {
          id: 10243,
          slug: 'company-of-heroes-2',
          name: 'Company of Heroes 2',
          added: 8402
        },
        {
          id: 13910,
          slug: 'xcom-enemy-unknown',
          name: 'XCOM: Enemy Unknown',
          added: 7585
        },
        {
          id: 5525,
          slug: 'brutal-legend',
          name: 'Brutal Legend',
          added: 7517
        },
        {
          id: 10065,
          slug: 'cities-skylines',
          name: 'Cities: Skylines',
          added: 7333
        },
        {
          id: 11147,
          slug: 'ark-survival-of-the-fittest',
          name: 'ARK: Survival Of The Fittest',
          added: 6997
        }
      ]
    },
    {
      id: 2,
      name: 'Shooter',
      slug: 'shooter',
      games_count: 63111,
      image_background:
        'https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg',
      games: [
        {
          id: 4200,
          slug: 'portal-2',
          name: 'Portal 2',
          added: 17151
        },
        {
          id: 4291,
          slug: 'counter-strike-global-offensive',
          name: 'Counter-Strike: Global Offensive',
          added: 14837
        },
        {
          id: 12020,
          slug: 'left-4-dead-2',
          name: 'Left 4 Dead 2',
          added: 14545
        },
        {
          id: 4062,
          slug: 'bioshock-infinite',
          name: 'BioShock Infinite',
          added: 13934
        },
        {
          id: 802,
          slug: 'borderlands-2',
          name: 'Borderlands 2',
          added: 13767
        },
        {
          id: 13537,
          slug: 'half-life-2',
          name: 'Half-Life 2',
          added: 13020
        }
      ]
    },
    {
      id: 40,
      name: 'Casual',
      slug: 'casual',
      games_count: 43623,
      image_background:
        'https://media.rawg.io/media/games/a44/a444a7628bdb49b24d06a7672f805814.jpg',
      games: [
        {
          id: 9721,
          slug: 'garrys-mod',
          name: "Garry's Mod",
          added: 8592
        },
        {
          id: 326292,
          slug: 'fall-guys',
          name: 'Fall Guys: Ultimate Knockout',
          added: 7577
        },
        {
          id: 9830,
          slug: 'brawlhalla',
          name: 'Brawlhalla',
          added: 6504
        },
        {
          id: 356714,
          slug: 'among-us',
          name: 'Among Us',
          added: 6172
        },
        {
          id: 1959,
          slug: 'goat-simulator',
          name: 'Goat Simulator',
          added: 5717
        },
        {
          id: 16343,
          slug: 'a-story-about-my-uncle',
          name: 'A Story About My Uncle',
          added: 5397
        }
      ]
    },
    {
      id: 14,
      name: 'Simulation',
      slug: 'simulation',
      games_count: 67095,
      image_background:
        'https://media.rawg.io/media/games/e74/e74458058b35e01c1ae3feeb39a3f724.jpg',
      games: [
        {
          id: 10035,
          slug: 'hitman',
          name: 'Hitman',
          added: 9678
        },
        {
          id: 654,
          slug: 'stardew-valley',
          name: 'Stardew Valley',
          added: 8671
        },
        {
          id: 9721,
          slug: 'garrys-mod',
          name: "Garry's Mod",
          added: 8592
        },
        {
          id: 10243,
          slug: 'company-of-heroes-2',
          name: 'Company of Heroes 2',
          added: 8402
        },
        {
          id: 9882,
          slug: 'dont-starve-together',
          name: "Don't Starve Together",
          added: 8040
        },
        {
          id: 22509,
          slug: 'minecraft',
          name: 'Minecraft',
          added: 7377
        }
      ]
    },
    {
      id: 7,
      name: 'Puzzle',
      slug: 'puzzle',
      games_count: 100347,
      image_background:
        'https://media.rawg.io/media/games/5aa/5aa4c12a53bc5f606bf8d92461ec747d.jpg',
      games: [
        {
          id: 4200,
          slug: 'portal-2',
          name: 'Portal 2',
          added: 17151
        },
        {
          id: 13536,
          slug: 'portal',
          name: 'Portal',
          added: 14567
        },
        {
          id: 1030,
          slug: 'limbo',
          name: 'Limbo',
          added: 12312
        },
        {
          id: 19709,
          slug: 'half-life-2-episode-two',
          name: 'Half-Life 2: Episode Two',
          added: 9714
        },
        {
          id: 18080,
          slug: 'half-life',
          name: 'Half-Life',
          added: 8928
        },
        {
          id: 1450,
          slug: 'inside',
          name: 'INSIDE',
          added: 7140
        }
      ]
    },
    {
      id: 11,
      name: 'Arcade',
      slug: 'arcade',
      games_count: 22546,
      image_background:
        'https://media.rawg.io/media/screenshots/3f1/3f1c417b405a86ed7d92b903e0fcfd0c.jpg',
      games: [
        {
          id: 3612,
          slug: 'hotline-miami',
          name: 'Hotline Miami',
          added: 9398
        },
        {
          id: 17540,
          slug: 'injustice-gods-among-us-ultimate-edition',
          name: 'Injustice: Gods Among Us Ultimate Edition',
          added: 8610
        },
        {
          id: 22509,
          slug: 'minecraft',
          name: 'Minecraft',
          added: 7377
        },
        {
          id: 4003,
          slug: 'grid-2',
          name: 'GRID 2',
          added: 6796
        },
        {
          id: 3408,
          slug: 'hotline-miami-2-wrong-number',
          name: 'Hotline Miami 2: Wrong Number',
          added: 5489
        },
        {
          id: 16343,
          slug: 'a-story-about-my-uncle',
          name: 'A Story About My Uncle',
          added: 5397
        }
      ]
    },
    {
      id: 83,
      name: 'Platformer',
      slug: 'platformer',
      games_count: 106386,
      image_background:
        'https://media.rawg.io/media/games/d5a/d5a24f9f71315427fa6e966fdd98dfa6.jpg',
      games: [
        {
          id: 1030,
          slug: 'limbo',
          name: 'Limbo',
          added: 12312
        },
        {
          id: 422,
          slug: 'terraria',
          name: 'Terraria',
          added: 11018
        },
        {
          id: 9767,
          slug: 'hollow-knight',
          name: 'Hollow Knight',
          added: 9582
        },
        {
          id: 41,
          slug: 'little-nightmares',
          name: 'Little Nightmares',
          added: 9473
        },
        {
          id: 18080,
          slug: 'half-life',
          name: 'Half-Life',
          added: 8928
        },
        {
          id: 3144,
          slug: 'super-meat-boy',
          name: 'Super Meat Boy',
          added: 8588
        }
      ]
    },
    {
      id: 1,
      name: 'Racing',
      slug: 'racing',
      games_count: 24535,
      image_background:
        'https://media.rawg.io/media/games/640/6409857596fe6553d3bb5af9a17f6160.jpg',
      games: [
        {
          id: 3272,
          slug: 'rocket-league',
          name: 'Rocket League',
          added: 11217
        },
        {
          id: 4003,
          slug: 'grid-2',
          name: 'GRID 2',
          added: 6796
        },
        {
          id: 2572,
          slug: 'dirt-rally',
          name: 'DiRT Rally',
          added: 6084
        },
        {
          id: 58753,
          slug: 'forza-horizon-4',
          name: 'Forza Horizon 4',
          added: 5406
        },
        {
          id: 5578,
          slug: 'grid',
          name: 'Race Driver: Grid',
          added: 4992
        },
        {
          id: 4347,
          slug: 'dirt-showdown',
          name: 'DiRT Showdown',
          added: 4337
        }
      ]
    },
    {
      id: 59,
      name: 'Massively Multiplayer',
      slug: 'massively-multiplayer',
      games_count: 3163,
      image_background:
        'https://media.rawg.io/media/games/4ea/4ea507ceebeabb43edbc09468f5aaac6.jpg',
      games: [
        {
          id: 32,
          slug: 'destiny-2',
          name: 'Destiny 2',
          added: 12111
        },
        {
          id: 10213,
          slug: 'dota-2',
          name: 'Dota 2',
          added: 11056
        },
        {
          id: 766,
          slug: 'warframe',
          name: 'Warframe',
          added: 10913
        },
        {
          id: 290856,
          slug: 'apex-legends',
          name: 'Apex Legends',
          added: 9656
        },
        {
          id: 10533,
          slug: 'path-of-exile',
          name: 'Path of Exile',
          added: 8718
        },
        {
          id: 10142,
          slug: 'playerunknowns-battlegrounds',
          name: 'PlayerUnknown’s Battlegrounds',
          added: 8574
        }
      ]
    },
    {
      id: 15,
      name: 'Sports',
      slug: 'sports',
      games_count: 20781,
      image_background:
        'https://media.rawg.io/media/screenshots/c02/c02c64324edc2045ea1fc0601cdaaa0c.jpg',
      games: [
        {
          id: 3272,
          slug: 'rocket-league',
          name: 'Rocket League',
          added: 11217
        },
        {
          id: 326292,
          slug: 'fall-guys',
          name: 'Fall Guys: Ultimate Knockout',
          added: 7577
        },
        {
          id: 2572,
          slug: 'dirt-rally',
          name: 'DiRT Rally',
          added: 6084
        },
        {
          id: 53341,
          slug: 'jet-set-radio-2012',
          name: 'Jet Set Radio',
          added: 4748
        },
        {
          id: 9575,
          slug: 'vrchat',
          name: 'VRChat',
          added: 3925
        },
        {
          id: 622492,
          slug: 'forza-horizon-5',
          name: 'Forza Horizon 5',
          added: 3899
        }
      ]
    },
    {
      id: 6,
      name: 'Fighting',
      slug: 'fighting',
      games_count: 12401,
      image_background:
        'https://media.rawg.io/media/games/eb5/eb514db62d397c64288160d5bd8fd67a.jpg',
      games: [
        {
          id: 17540,
          slug: 'injustice-gods-among-us-ultimate-edition',
          name: 'Injustice: Gods Among Us Ultimate Edition',
          added: 8610
        },
        {
          id: 108,
          slug: 'mortal-kombat-x',
          name: 'Mortal Kombat X',
          added: 7938
        },
        {
          id: 28179,
          slug: 'sega-mega-drive-and-genesis-classics',
          name: 'SEGA Mega Drive and Genesis Classics',
          added: 7299
        },
        {
          id: 9830,
          slug: 'brawlhalla',
          name: 'Brawlhalla',
          added: 6504
        },
        {
          id: 274480,
          slug: 'mortal-kombat-11',
          name: 'Mortal Kombat 11',
          added: 4704
        },
        {
          id: 44525,
          slug: 'yakuza-kiwami',
          name: 'Yakuza Kiwami',
          added: 4055
        }
      ]
    },
    {
      id: 19,
      name: 'Family',
      slug: 'family',
      games_count: 5379,
      image_background:
        'https://media.rawg.io/media/games/9a1/9a18c226cf379272c698f26d2b79b3da.jpg',
      games: [
        {
          id: 3254,
          slug: 'journey',
          name: 'Journey',
          added: 7803
        },
        {
          id: 2597,
          slug: 'lego-lord-of-the-rings',
          name: 'LEGO The Lord of the Rings',
          added: 4963
        },
        {
          id: 3350,
          slug: 'broken-age',
          name: 'Broken Age',
          added: 4636
        },
        {
          id: 3729,
          slug: 'lego-the-hobbit',
          name: 'LEGO The Hobbit',
          added: 4564
        },
        {
          id: 1259,
          slug: 'machinarium',
          name: 'Machinarium',
          added: 4111
        },
        {
          id: 1140,
          slug: 'world-of-goo',
          name: 'World of Goo',
          added: 4053
        }
      ]
    },
    {
      id: 28,
      name: 'Board Games',
      slug: 'board-games',
      games_count: 8286,
      image_background:
        'https://media.rawg.io/media/screenshots/a73/a7362b567065a463164ba854fbed9aef.jpeg',
      games: [
        {
          id: 23557,
          slug: 'gwent-the-witcher-card-game',
          name: 'Gwent: The Witcher Card Game',
          added: 4235
        },
        {
          id: 327999,
          slug: 'dota-underlords',
          name: 'Dota Underlords',
          added: 3576
        },
        {
          id: 2055,
          slug: 'adventure-capitalist',
          name: 'AdVenture Capitalist',
          added: 2990
        },
        {
          id: 2306,
          slug: 'poker-night-2',
          name: 'Poker Night 2',
          added: 1918
        },
        {
          id: 3187,
          slug: 'armello',
          name: 'Armello',
          added: 1807
        },
        {
          id: 758,
          slug: 'hue',
          name: 'Hue',
          added: 1751
        }
      ]
    },
    {
      id: 34,
      name: 'Educational',
      slug: 'educational',
      games_count: 16292,
      image_background:
        'https://media.rawg.io/media/screenshots/8ab/8abf17ba4f55182f37b2eb2866fae35d.jpg',
      games: [
        {
          id: 1358,
          slug: 'papers-please',
          name: 'Papers, Please',
          added: 6082
        },
        {
          id: 1140,
          slug: 'world-of-goo',
          name: 'World of Goo',
          added: 4053
        },
        {
          id: 2778,
          slug: 'surgeon-simulator-cpr',
          name: 'Surgeon Simulator',
          added: 3557
        },
        {
          id: 9768,
          slug: 'gameguru',
          name: 'GameGuru',
          added: 2271
        },
        {
          id: 13777,
          slug: 'sid-meiers-civilization-iv-colonization',
          name: "Sid Meier's Civilization IV: Colonization",
          added: 2110
        },
        {
          id: 6885,
          slug: 'pirates-3',
          name: "Sid Meier's Pirates!",
          added: 2004
        }
      ]
    },
    {
      id: 17,
      name: 'Card',
      slug: 'card',
      games_count: 4474,
      image_background:
        'https://media.rawg.io/media/screenshots/8ff/8ffe8f19d2e764867c8ed625ddf4e368.jpg',
      games: [
        {
          id: 23557,
          slug: 'gwent-the-witcher-card-game',
          name: 'Gwent: The Witcher Card Game',
          added: 4235
        },
        {
          id: 28121,
          slug: 'slay-the-spire',
          name: 'Slay the Spire',
          added: 4207
        },
        {
          id: 18852,
          slug: 'poker-night-at-the-inventory',
          name: 'Poker Night at the Inventory',
          added: 2545
        },
        {
          id: 8923,
          slug: 'faeria',
          name: 'Faeria',
          added: 2008
        },
        {
          id: 332,
          slug: 'the-elder-scrolls-legends',
          name: 'The Elder Scrolls: Legends',
          added: 1940
        },
        {
          id: 2306,
          slug: 'poker-night-2',
          name: 'Poker Night 2',
          added: 1918
        }
      ]
    }
  ]
};

function useGenres() {
  return { data: genreData.results, error: [], isLoading: false };
}

export default useGenres;
