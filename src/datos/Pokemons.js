const shufflePokemon = [
    {
      id: 0,
      name: 'Bulbasaur',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/0.png'
    },
    {
      id: 1,
      name: 'Charmander',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/1.png'
    },
    {
      id: 2,
      name: 'Squirtle',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/2.png'
    },
     { 
      id: 3,
      name: 'Pidgey',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/3.png'
    },
    { 
      id: 4,
      name: 'Eevee',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/4.png'
    },
    { 
      id: 5,
      name: 'Pichu',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/5.png'
    },
    { 
      id: 6,
      name: 'Togepi',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/6.png'
    },
    { 
      id: 7,
      name: 'Happiny',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/7.png'
    },
    { 
      id: 8,
      name: 'Audino',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/8.png'
    },
    { 
      id: 9,
      name: 'Espurr',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/9.png'
    },
    { 
      id: 10,
      name: 'MegaAudino',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/10.png'
    },
    { 
      id: 11,
      name: 'Ivysaur',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/11.png'
    },
    { 
      id: 12,
      name: 'Venusaur',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/12.png'
    },
    { 
      id: 13,
      name: 'Charmeleon',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/13.png'
    },
    { 
      id: 14,
      name: 'Charizard',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/14.png'
    },
    { 
      id: 15,
      name: 'Wartortle',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/15.png'
    },
    { 
      id: 16,
      name: 'Blastoise',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/16.png'
    },
    { 
      id: 17,
      name: 'Caterpie',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/17.png'
    },
    { 
      id: 18,
      name: 'Metapod',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/18.png'
    },
    { 
      id: 19,
      name: 'Butterfree',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/19.png'
    },
    { 
      id: 20,
      name: 'Weedle',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/20.png'
    },
    { 
      id: 21,
      name: 'Kakuna',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/21.png'
    },
    { 
      id: 22,
      name: 'Beedrill',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/22.png'
    },
    { 
      id: 23,
      name: 'Pidgeotto',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/23.png'
    },
    {
      id: 24,
      name: 'Pidgeot',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/24.png'
    },
    {
      id: 25,
      name: 'Rattata',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/25.png'
    },
    {
      id: 26,
      name: 'Raticate',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/26.png'
    },
    {
      id: 27,
      name: 'Spearow',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/27.png'
    },
    {
      id: 28,
      name: 'Fearow',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/28.png'
    },
    {
      id: 29,
      name: 'Ekans',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/29.png'
    },
    {
      id: 30,
      name: 'Arbok',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/30.png'
    },
    {
      id: 31,
      name: 'Pikachu',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/31.png'
    },
    {
      id: 32,
      name: 'Raichu',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/32.png'
    },
    {
      id: 33,
      name: 'Sandshrew',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/33.png'
    },
    {
      id: 34,
      name: 'Sandslash',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/34.png'
    },
    {
      id: 35,
      name: 'Nidoran♀',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/35.png'
    },
    {
      id: 36,
      name: 'Nidorina',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/36.png'
    },
    {
      id: 37,
      name: 'Nidoqueen',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/37.png'
    },
    {
      id: 38,
      name: 'Nidoran♂',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/38.png'
    },
    {
      id: 39,
      name: 'Nidorino',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/39.png'
    },
    {
      id: 40,
      name: 'Nidoking',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/40.png'
    },
    {
      id: 41,
      name: 'Clefairy',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/41.png'
    },
    {
      id: 42,
      name: 'Clefable',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/42.png'
    },
    {
      id: 43,
      name: 'Vulpix',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/43.png'
    },
    {
      id: 44,
      name: 'Ninetales',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/44.png'
    },
    {
      id: 45,
      name: 'Jigglypuff',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/45.png'
    },
    {
      id: 46,
      name: 'Wigglytuff',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/46.png'
    },
    {
      id: 47,
      name: 'Zubat',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/47.png'
    },
    {
      id: 48,
      name: 'Golbat',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/48.png'
    },
    {
      id: 49,
      name: 'Oddish',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/49.png'
    },
    {
      id: 50,
      name: 'Gloom',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/50.png'
    },
    {
      id: 51,
      name: 'Vileplume',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/51.png'
    },
    {
      id: 52,
      name: 'Paras',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/52.png'
    },
    {
      id: 53,
      name: 'Parasect',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/53.png'
    },
    {
      id: 54,
      name: 'Venonat',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/54.png'
    },
    {
      id: 55,
      name: 'Venomoth',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/55.png'
    },
    {
      id: 56,
      name: 'Diglett',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/56.png'
    },
    {
      id: 57,
      name: 'Dugtrio',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/57.png'
    },
    {
      id: 58,
      name: 'Meowth',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/58.png'
    },
    {
      id: 59,
      name: 'Persian',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/59.png'
    },
    {
      id: 60,
      name: 'Psyduck',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/60.png'
    },
    {
      id: 61,
      name: 'Golduck',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/61.png'
    },
    {
      id: 62,
      name: 'Mankey',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/62.png'
    },
    {
      id: 63,
      name: 'Primeape',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/63.png'
    },
    {
      id: 64,
      name: 'Growlithe',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/64.png'
    },
    {
      id: 65,
      name: 'Arcanine',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/65.png'
    },
    {
      id: 66,
      name: 'Poliwag',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/66.png'
    },
    {
      id: 67,
      name: 'Poliwhirl',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/67.png'
    },
    {
      id: 68,
      name: 'Poliwrath',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/68.png'
    },
    {
      id: 69,
      name: 'Abra',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/69.png'
    },
    {
      id: 70,
      name: 'Kadabra',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/70.png'
    },
    {
      id: 71,
      name: 'Alakazam',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/71.png'
    },
    {
      id: 72,
      name: 'Machop',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/72.png'
    },
    {
      id: 73,
      name: 'Machoke',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/73.png'
    },
    {
      id: 74,
      name: 'Machamp',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/74.png'
    },
    {
      id: 75,
      name: 'Bellsprout',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/75.png'
    },
    {
      id: 76,
      name: 'Weepinbell',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/76.png'
    },
    {
      id: 77,
      name: 'Victreebel',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/77.png'
    },
    {
      id: 78,
      name: 'Tentacool',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/78.png'
    },
    {
      id: 79,
      name: 'Tentacruel',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/79.png'
    },
    {
      id: 80,
      name: 'Geodude',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/80.png'
    },
    {
      id: 81,
      name: 'Graveler',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/81.png'
    },
    {
      id: 82,
      name: 'Golem',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/82.png'
    },
    {
      id: 83,
      name: 'Ponyta',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/83.png'
    },
    {
      id: 84,
      name: 'Rapidash',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/84.png'
    },
    {
      id: 85,
      name: 'Slowpoke',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/85.png'
    },
    {
      id: 86,
      name: 'Slowbro',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/86.png'
    },
    {
      id: 87,
      name: 'Magnemite',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/87.png'
    },
    {
      id: 88,
      name: 'Magneton',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/88.png'
    },
    {
      id: 89,
      name: 'Farfetch\'d',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/89.png'
    },
    {
      id: 90,
      name: 'Doduo',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/90.png'
    },
    {
      id: 91,
      name: 'Dodrio',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/91.png'
    },
    {
      id: 92,
      name: 'Seel',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/92.png'
    },
    {
      id: 93,
      name: 'Dewgong',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/93.png'
    },
    {
      id: 94,
      name: 'Grimer',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/94.png'
    },
    {
      id: 95,
      name: 'Muk',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/95.png'
    },
    {
      id: 96,
      name: 'Shellder',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/96.png'
    },
    {
      id: 97,
      name: 'Cloyster',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/97.png'
    },
    {
      id: 98,
      name: 'Gastly',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/98.png'
    },
    {
      id: 99,
      name: 'Haunter',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/99.png'
    },
    {
      id: 100,
      name: 'Gengar',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/100.png'
    },
    {
      id: 101,
      name: 'Onix',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/101.png'
    },
    {
      id: 102,
      name: 'Drowzee',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/102.png'
    },
    {
      id: 103,
      name: 'Hypno',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/103.png'
    },
    {
      id: 104,
      name: 'Krabby',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/104.png'
    },
    {
      id: 105,
      name: 'Kingler',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/105.png'
    },
    {
      id: 106,
      name: 'Voltorb',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/106.png'
    },
    {
      id: 107,
      name: 'Electrode',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/107.png'
    },
    {
      id: 108,
      name: 'Exeggcute',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/108.png'
    },
    {
      id: 109,
      name: 'Exeggutor',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/109.png'
    },
    {
      id: 110,
      name: 'Cubone',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/110.png'
    },
    {
      id: 111,
      name: 'Marowak',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/111.png'
    },
    {
      id: 112,
      name: 'Hitmonlee',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/112.png'
    },
    {
      id: 113,
      name: 'Hitmonchan',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/113.png'
    },
    {
      id: 114,
      name: 'Lickitung',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/114.png'
    },
    {
      id: 115,
      name: 'Koffing',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/115.png'
    },
    {
      id: 116,
      name: 'Weezing',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/116.png'
    },
    {
      id: 117,
      name: 'Rhyhorn',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/117.png'
    },
    {
      id: 118,
      name: 'Rhydon',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/118.png'
    },
    {
      id: 119,
      name: 'Chansey',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/119.png'
    },
    {
      id: 120,
      name: 'Tangela',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/120.png'
    },
    {
      id: 121,
      name: 'Kangaskhan',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/121.png'
    },
    {
      id: 122,
      name: 'Horsea',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/122.png'
    },
    {
      id: 123,
      name: 'Seadra',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/123.png'
    },
    {
      id: 124,
      name: 'Goldeen',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/124.png'
    },
    {
      id: 125,
      name: 'Seaking',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/125.png'
    },
    {
      id: 126,
      name: 'Staryu',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/126.png'
    },
    {
      id: 127,
      name: 'Starmie',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/127.png'
    },
    {
      id: 128,
      name: 'Mr. Mime',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/128.png'
    },
    {
      id: 129,
      name: 'Scyther',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/129.png'
    },
    {
      id: 130,
      name: 'Jynx',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/130.png'
    },
    {
      id: 131,
      name: 'Electabuzz',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/131.png'
    },
    {
      id: 132,
      name: 'Magmar',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/132.png'
    },
    {
      id: 133,
      name: 'Pinsir',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/133.png'
    },
    {
      id: 134,
      name: 'Tauros',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/134.png'
    },
    {
      id: 135,
      name: 'Magikarp',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/135.png'
    },
    {
      id: 136,
      name: 'Gyarados',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/136.png'
    },
    {
      id: 137,
      name: 'Lapras',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/137.png'
    },
    {
      id: 138,
      name: 'Ditto',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/138.png'
    },
    {
      id: 139,
      name: 'Vaporeon',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/139.png'
    },
    {
      id: 140,
      name: 'Jolteon',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/140.png'
    },
    {
      id: 141,
      name: 'Flareon',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/141.png'
    },
    {
      id: 142,
      name: 'Porygon',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/142.png'
    },
    {
      id: 143,
      name: 'Omanyte',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/143.png'
    },
    {
      id: 144,
      name: 'Omastar',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/144.png'
    },
    {
      id: 145,
      name: 'Kabuto',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/145.png'
    },
    {
      id: 146,
      name: 'Kabutops',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/146.png'
    },
    {
      id: 147,
      name: 'Aerodactyl',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/147.png'
    },
    {
      id: 148,
      name: 'Snorlax',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/148.png'
    },
    {
      id: 149,
      name: 'Articuno',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/149.png'
    },
    {
      id: 150,
      name: 'Zapdos',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/150.png'
    },
    {
      id: 151,
      name: 'Moltres',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/151.png'
    },
    {
      id: 152,
      name: 'Dratini',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/152.png'
    },
    {
      id: 153,
      name: 'Dragonair',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/153.png'
    },
    {
      id: 154,
      name: 'Dragonite',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/154.png'
    },
    {
      id: 155,
      name: 'Mewtwo',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/155.png'
    },
    {
      id: 156,
      name: 'Mew',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/156.png'
    },
    {
      id: 157,
      name: 'Chikorita',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/157.png'
    },
    {
      id: 158,
      name: 'Bayleef',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/158.png'
    },
    {
      id: 159,
      name: 'Meganium',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/159.png'
    },
    {
      id: 160,
      name: 'Cyndaquil',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/160.png'
    },
    {
      id: 161,
      name: 'Quilava',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/161.png'
    },
    {
      id: 162,
      name: 'Typhlosion',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/162.png'
    },
    {
      id: 163,
      name: 'Totodile',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/163.png'
    },
    {
      id: 164,
      name: 'Croconaw',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/164.png'
    },
    {
      id: 165,
      name: 'Feraligatr',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/165.png'
    },
    {
      id: 166,
      name: 'Sentret',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/166.png'
    },
    {
      id: 167,
      name: 'Furret',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/167.png'
    },
    {
      id: 168,
      name: 'Hoothoot',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/168.png'
    },
    {
      id: 169,
      name: 'Noctowl',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/169.png'
    },
    {
      id: 170,
      name: 'Ledyba',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/170.png'
    },
    {
      id: 171,
      name: 'Ledian',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/171.png'
    },
    {
      id: 172,
      name: 'Spinarak',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/172.png'
    },
    {
      id: 173,
      name: 'Ariados',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/173.png'
    },
    {
      id: 174,
      name: 'Crobat',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/174.png'
    },
    {
      id: 175,
      name: 'Chinchou',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/175.png'
    },
    {
      id: 176,
      name: 'Lanturn',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/176.png'
    },
    {
      id: 177,
      name: 'Cleffa',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/177.png'
    },
    {
      id: 178,
      name: 'Igglybuff',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/178.png'
    },
    {
      id: 179,
      name: 'Togetic',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/179.png'
    },
    {
      id: 180,
      name: 'Natu',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/180.png'
    },
    {
      id: 181,
      name: 'Xatu',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/181.png'
    },
    {
      id: 182,
      name: 'Mareep',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/182.png'
    },
    {
      id: 183,
      name: 'Flaaffy',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/183.png'
    },
    {
      id: 184,
      name: 'Ampharos',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/184.png'
    },
    {
      id: 185,
      name: 'Bellossom',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/185.png'
    },
    {
      id: 186,
      name: 'Marill',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/186.png'
    },
    {
      id: 187,
      name: 'Azumarill',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/187.png'
    },
    {
      id: 188,
      name: 'Sudowoodo',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/188.png'
    },
    {
      id: 189,
      name: 'Politoed',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/189.png'
    },
    {
      id: 190,
      name: 'Hoppip',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/190.png'
    },
    {
      id: 191,
      name: 'Skiploom',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/191.png'
    },
    {
      id: 192,
      name: 'Jumpluff',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/192.png'
    },
    {
      id: 193,
      name: 'Aipom',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/193.png'
    },
    {
      id: 194,
      name: 'Sunkern',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/194.png'
    },
    {
      id: 195,
      name: 'Sunflora',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/195.png'
    },
    {
      id: 196,
      name: 'Yanma',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/196.png'
    },
    {
      id: 197,
      name: 'Wooper',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/197.png'
    },
    {
      id: 198,
      name: 'Quagsire',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/198.png'
    },
    {
      id: 199,
      name: 'Espeon',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/199.png'
    },
    {
      id: 200,
      name: 'Umbreon',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/200.png'
    },
    {
      id: 201,
      name: 'Murkrow',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/201.png'
    },
    {
      id: 202,
      name: 'Slowking',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/202.png'
    },
    {
      id: 203,
      name: 'Misdreavus',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/203.png'
    },
    {
      id: 204,
      name: 'UnownA', 
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/204.png'
    },
    {
      id: 205,
      name: 'UnownB',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/205.png'
    },
    {
      id: 206,
      name: 'UnownC',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/206.png'
    },
    {
      id: 207,
      name: 'UnownD',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/207.png'
    },
    {
      id: 208,
      name: 'UnownE',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/208.png'
    },
    {
      id: 209,
      name: 'UnownF',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/209.png'
    },
    {
      id: 210,
      name: 'UnownG',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/210.png'
    },
    {
      id: 211,
      name: 'UnownH',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/211.png'
    },
    {
      id: 212,
      name: 'UnownI',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/212.png'
    },
    {
      id: 213,
      name: 'UnownJ',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/213.png'
    },
    {
      id: 214,
      name: 'UnownK',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/214.png'
    },
    {
      id: 215,
      name: 'UnownL',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/215.png'
    },
    {
      id: 216,
      name: 'UnownM',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/216.png'
    },
    {
      id: 217,
      name: 'UnownN',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/217.png'
    },
    {
      id: 218,
      name: 'UnownO',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/218.png'
    },
    {
      id: 219,
      name: 'UnownP',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/219.png'
    },
    {
      id: 220,
      name: 'UnownQ',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/220.png'
    },
    {
      id: 221,
      name: 'UnownR',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/221.png'
    },
    {
      id: 222,
      name: 'UnownS',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/222.png'
    },
    {
      id: 223,
      name: 'UnownT',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/223.png'
    },
    {
      id: 224,
      name: 'UnownU',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/224.png'
    },
    {
      id: 225,
      name: 'UnownV',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/225.png'
    },
    {
      id: 226,
      name: 'UnownW',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/226.png'
    },
    {
      id: 227,
      name: 'UnownX',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/227.png'
    },
    {
      id: 228,
      name: 'UnownY',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/228.png'
    },
    {
      id: 229,
      name: 'UnownZ',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/229.png'
    },
    {
      id: 230,
      name: 'Unown!',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/230.png'
    },
    {
      id: 231,
      name: 'Unown?',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/231.png'
    },
    {
      id: 232,
      name: 'Wobbuffet',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/232.png'
    },
    {
      id: 233,
      name: 'Girafarig',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/233.png'
    },
    {
      id: 234,
      name: 'Pineco',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/234.png'
    },
    {
      id: 235,
      name: 'Forretress',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/235.png'
    },
    {
      id: 236,
      name: 'Dunsparce',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/236.png'
    },
    {
      id: 237,
      name: 'Gligar',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/237.png'
    },
    {
      id: 238,
      name: 'Steelix',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/238.png'
    },
    {
      id: 239,
      name: 'Snubbull',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/239.png'
    },
    {
      id: 240,
      name: 'Granbull',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/240.png'
    },
    {
      id: 241,
      name: 'Qwilfish',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/241.png'
    },
    {
      id: 242,
      name: 'Scizor',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/242.png'
    },
    {
      id: 243,
      name: 'Shuckle',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/243.png'
    },
    {
      id: 244,
      name: 'Heracross',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/244.png'
    },
    {
      id: 245,
      name: 'Sneasel',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/245.png'
    },
    {
      id: 246,
      name: 'Teddiursa',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/246.png'
    },
    {
      id: 247,
      name: 'Ursaring',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/247.png'
    },
    {
      id: 248,
      name: 'Slugma',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/248.png'
    },
    {
      id: 249,
      name: 'Magcargo',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/249.png'
    },
    {
      id: 250,
      name: 'Swinub',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/250.png'
    },
    {
      id: 251,
      name: 'Piloswine',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/251.png'
    },
    {
      id: 252,
      name: 'Corsola',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/252.png'
    },
    {
      id: 253,
      name: 'Remoraid',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/253.png'
    },
    {
      id: 254,
      name: 'Octillery',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/254.png'
    },
    {
      id: 255,
      name: 'Delibird',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/255.png'
    },
    {
      id: 256,
      name: 'Mantine',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/256.png'
    },
    {
      id: 257,
      name: 'Skarmory',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/257.png'
    },
    {
      id: 258,
      name: 'Houndour',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/258.png'
    },
    {
      id: 259,
      name: 'Houndoom',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/259.png'
    },
    {
      id: 260,
      name: 'Kingdra',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/260.png'
    },
    {
      id: 261,
      name: 'Phanpy',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/261.png'
    },
    {
      id: 262,
      name: 'Donphan',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/262.png'
    },
    {
      id: 263,
      name: 'Porygon2',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/263.png'
    },
    {
      id: 264,
      name: 'Stantler',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/264.png'
    },
    {
      id: 265,
      name: 'Smeargle',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/265.png'
    },
    {
      id: 266,
      name: 'Tyrogue',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/266.png'
    },
    {
      id: 267,
      name: 'Hitmontop',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/267.png'
    },
    {
      id: 268,
      name: 'Smoochum',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/268.png'
    },
    {
      id: 269,
      name: 'Elekid',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/269.png'
    },
    {
      id: 270,
      name: 'Magby',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/270.png'
    },
    {
      id: 271,
      name: 'Miltank',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/271.png'
    },
    {
      id: 272,
      name: 'Blissey',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/272.png'
    },
    {
      id: 273,
      name: 'Raikou',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/273.png'
    },
    {
      id: 274,
      name: 'Entei',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/274.png'
    },
    {
      id: 275,
      name: 'Suicune',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/275.png'
    },
    {
      id: 276,
      name: 'Larvitar',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/276.png'
    },
    {
      id: 277,
      name: 'Pupitar',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/277.png'
    },
    {
      id: 278,
      name: 'Tyranitar',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/278.png'
    },
    {
      id: 279,
      name: 'Lugia',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/279.png'
    },
    {
      id: 280,
      name: 'Ho-oh',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/280.png'
    },
    {
      id: 281,
      name: 'Celebi',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/281.png'
    },
    {
      id: 282,
      name: 'Treecko',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/282.png'
    },
    {
      id: 283,
      name: 'Grovyle',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/283.png'
    },
    {
      id: 284,
      name: 'Sceptile',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/284.png'
    },
    {
      id: 285,
      name: 'Torchic',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/285.png'
    },
    {
      id: 286,
      name: 'Combusken',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/286.png'
    },
    {
      id: 287,
      name: 'Blaziken',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/287.png'
    },
    {
      id: 288,
      name: 'Mudkip',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/288.png'
    },
    {
      id: 289,
      name: 'Marshtomp',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/289.png'
    },
    {
      id: 290,
      name: 'Swampert',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/290.png'
    },
    {
      id: 291,
      name: 'Poochyena',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/291.png'
    },
    {
      id: 292,
      name: 'Mightyena',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/292.png'
    },
    {
      id: 293,
      name: 'Zigzagoon',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/293.png'
    },
    {
      id: 294,
      name: 'Linoone',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/294.png'
    },
    {
      id: 295,
      name: 'Wurmple',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/295.png'
    },
    {
      id: 296,
      name: 'Silcoon',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/296.png'
    },
    {
      id: 297,
      name: 'Beautifly',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/297.png'
    },
    {
      id: 298,
      name: 'Cascoon',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/298.png'
    },
    {
      id: 299,
      name: 'Dustox',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/299.png'
    },
    {
      id: 300,
      name: 'Lotad',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/300.png'
    },
    {
      id: 301,
      name: 'Lombre',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/301.png'
    },
    {
      id: 302,
      name: 'Ludicolo',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/302.png'
    },
    {
      id: 303,
      name: 'Seedot',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/303.png'
    },
    {
      id: 304,
      name: 'Nuzleaf',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/304.png'
    },
    {
      id: 305,
      name: 'Shiftry',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/305.png'
    },
    {
      id: 306,
      name: 'Taillow',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/306.png'
    },
    {
      id: 307,
      name: 'Swellow',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/307.png'
    },
    {
      id: 308,
      name: 'Wingull',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/308.png'
    },
    {
      id: 309,
      name: 'Pelipper',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/309.png'
    },
    {
      id: 310,
      name: 'Ralts',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/310.png'
    },
    {
      id: 311,
      name: 'Kirlia',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/311.png'
    },
    {
      id: 312,
      name: 'Gardevoir',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/312.png'
    },
    {
      id: 313,
      name: 'Surskit',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/313.png'
    },
    {
      id: 314,
      name: 'Masquerain',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/314.png'
    },
    {
      id: 315,
      name: 'Shroomish',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/315.png'
    },
    {
      id: 316,
      name: 'Breloom',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/316.png'
    },
    {
      id: 317,
      name: 'Slakoth',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/317.png'
    },
    {
      id: 318,
      name: 'Vigoroth',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/318.png'
    },
    {
      id: 319,
      name: 'Slaking',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/319.png'
    },
    {
      id: 320,
      name: 'Nincada',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/320.png'
    },
    {
      id: 321,
      name: 'Ninjask',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/321.png'
    },
    {
      id: 322,
      name: 'Shedinja',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/322.png'
    },
    {
      id: 323,
      name: 'Whismur',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/323.png'
    },
    {
      id: 324,
      name: 'Loudred',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/324.png'
    },
    {
      id: 325,
      name: 'Exploud',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/325.png'
    },
    {
      id: 326,
      name: 'Makuhita',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/326.png'
    },
    {
      id: 327,
      name: 'Hariyama',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/327.png'
    },
    {
      id: 328,
      name: 'Azurill',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/328.png'
    },
    {
      id: 329,
      name: 'Nosepass',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/329.png'
    },
    {
      id: 330,
      name: 'Skitty',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/330.png'
    },
    {
      id: 331,
      name: 'Delcatty',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/331.png'
    },
    {
      id: 332,
      name: 'Sableye',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/332.png'
    },
    {
      id: 333,
      name: 'Mawile',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/333.png'
    },
    {
      id: 334,
      name: 'Aron',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/334.png'
    },
    {
      id: 335,
      name: 'Lairon',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/335.png'
    },
    {
      id: 336,
      name: 'Aggron',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/336.png'
    },
    {
      id: 337,
      name: 'Meditite',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/337.png'
    },
    {
      id: 338,
      name: 'Medicham',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/338.png'
    },
    {
      id: 339,
      name: 'Electrike',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/339.png'
    },
    {
      id: 340,
      name: 'Manectric',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/340.png'
    },
    {
      id: 341,
      name: 'Plusle',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/341.png'
    },
    {
      id: 342,
      name: 'Minun',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/342.png'
    },
    {
      id: 343,
      name: 'Volbeat',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/343.png'
    },
    {
      id: 344,
      name: 'Illumise',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/344.png'
    },
    {
      id: 345,
      name: 'Roselia',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/345.png'
    },
    {
      id: 346,
      name: 'Gulpin',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/346.png'
    },
    {
      id: 347,
      name: 'Swalot',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/347.png'
    },
    {
      id: 348,
      name: 'Carvanha',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/348.png'
    },
    {
      id: 349,
      name: 'Sharpedo',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/349.png'
    },
    {
      id: 350,
      name: 'Wailmer',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/350.png'
    },
    {
      id: 351,
      name: 'Wailord',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/351.png'
    },
    {
      id: 352,
      name: 'Numel',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/352.png'
    },
    {
      id: 353,
      name: 'Camerupt',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/353.png'
    },
    {
      id: 354,
      name: 'Torkoal',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/354.png'
    },
    {
      id: 355,
      name: 'Spoink',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/355.png'
    },
    {
      id: 356,
      name: 'Grumpig',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/356.png'
    },
    {
      id: 357,
      name: 'Spinda',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/357.png'
    },
    {
      id: 358,
      name: 'Trapinch',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/358.png'
    },
    {
      id: 359,
      name: 'Vibrava',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/359.png'
    },
    {
      id: 360,
      name: 'Flygon',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/360.png'
    },
    {
      id: 361,
      name: 'Cacnea',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/361.png'
    },
    {
      id: 362,
      name: 'Cacturne',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/362.png'
    },
    {
      id: 363,
      name: 'Swablu',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/363.png'
    },
    {
      id: 364,
      name: 'Altaria',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/364.png'
    },
    {
      id: 365,
      name: 'Zangoose',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/365.png'
    },
    {
      id: 366,
      name: 'Seviper',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/366.png'
    },
    {
      id: 367,
      name: 'Lunatone',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/367.png'
    },
    {
      id: 368,
      name: 'Solrock',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/368.png'
    },
    {
      id: 369,
      name: 'Barboach',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/369.png'
    },
    {
      id: 370,
      name: 'Whiscash',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/370.png'
    },
    {
      id: 371,
      name: 'Corphish',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/371.png'
    },
    {
      id: 372,
      name: 'Crawdaunt',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/372.png'
    },
    {
      id: 373,
      name: 'Baltoy',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/373.png'
    },
    {
      id: 374,
      name: 'Claydol',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/374.png'
    },
    {
      id: 375,
      name: 'Lileep',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/375.png'
    },
    {
      id: 376,
      name: 'Cradily',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/376.png'
    },
    {
      id: 377,
      name: 'Anorith',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/377.png'
    },
    {
      id: 378,
      name: 'Armaldo',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/378.png'
    },
    {
      id: 379,
      name: 'Feebas',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/379.png'
    },
    {
      id: 380,
      name: 'Milotic',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/380.png'
    },
    {
      id: 381,
      name: 'Castform',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/381.png'
    },
    {
      id: 382,
      name: 'Kecleon',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/382.png'
    },
    {
      id: 383,
      name: 'Shuppet',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/383.png'
    },
    {
      id: 384,
      name: 'Banette',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/384.png'
    },
    {
      id: 385,
      name: 'Duskull',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/385.png'
    },
    {
      id: 386,
      name: 'Dusclops',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/386.png'
    },
    {
      id: 387,
      name: 'Tropius',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/387.png'
    },
    {
      id: 388,
      name: 'Chimecho',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/388.png'
    },
    {
      id: 389,
      name: 'Absol',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/389.png'
    },
    {
      id: 390,
      name: 'Wynaut',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/390.png'
    },
    {
      id: 391,
      name: 'Snorunt',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/391.png'
    },
    {
      id: 392,
      name: 'Glalie',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/392.png'
    },
    {
      id: 393,
      name: 'Spheal',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/393.png'
    },
    {
      id: 394,
      name: 'Sealeo',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/394.png'
    },
    {
      id: 395,
      name: 'Walrein',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/395.png'
    },
    {
      id: 396,
      name: 'Clamperl',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/396.png'
    },
    {
      id: 397,
      name: 'Huntail',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/397.png'
    },
    {
      id: 398,
      name: 'Gorebyss',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/398.png'
    },
    {
      id: 399,
      name: 'Relicanth',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/399.png'
    },
    {
      id: 400,
      name: 'Luvdisc',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/400.png'
    },
    {
      id: 401,
      name: 'Bagon',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/401.png'
    },
    {
      id: 402,
      name: 'Shelgon',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/402.png'
    },
    {
      id: 403,
      name: 'Salamence',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/403.png'
    },
    {
      id: 404,
      name: 'Beldum',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/404.png'
    },
    {
      id: 405,
      name: 'Metang',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/405.png'
    },
    {
      id: 406,
      name: 'Metagross',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/406.png'
    },
    {
      id: 407,
      name: 'Regirock',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/407.png'
    },
    {
      id: 408,
      name: 'Regice',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/408.png'
    },
    {
      id: 409,
      name: 'Registeel',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/409.png'
    },
    {
      id: 410,
      name: 'Latias',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/410.png'
    },
    {
      id: 411,
      name: 'Latios',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/411.png'
    },
    {
      id: 412,
      name: 'Kyogre',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/412.png'
    },
    {
      id: 413,
      name: 'Primal Kyogre',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/413.png'
    },
    {
      id: 414,
      name: 'Groudon',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/414.png'
    },
    {
      id: 415,
      name: 'Primal Groudon',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/415.png'
    },
    {
      id: 416,
      name: 'Rayquaza',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/416.png'
    },
    {
      id: 417,
      name: 'Jirachi',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/417.png'
    },
    {
      id: 418,
      name: 'Deoxys',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/418.png'
    },
    {
      id: 419,
      name: 'Deoxys Attack Forme',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/419.png'
    },
    {
      id: 420,
      name: 'Deoxys Defense Forme',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/420.png'
    },
    {
      id: 421,
      name: 'Deoxys Speed Forme',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/421.png'
    },
    {
      id: 422,
      name: 'Turtwig',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/422.png'
    },
    {
      id: 423,
      name: 'Grotle',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/423.png'
    },
    {
      id: 424,
      name: 'Torterra',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/424.png'
    },
    {
      id: 425,
      name: 'Chimchar',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/425.png'
    },
    {
      id: 426,
      name: 'Monferno',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/426.png'
    },
    {
      id: 427,
      name: 'Infernape',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/427.png'
    },
    {
      id: 428,
      name: 'Piplup',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/428.png'
    },
    {
      id: 429,
      name: 'Prinplup',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/429.png'
    },
    {
      id: 430,
      name: 'Empoleon',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/430.png'
    },
    {
      id: 431,
      name: 'Starly',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/431.png'
    },
    {
      id: 432,
      name: 'Staravia',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/432.png'
    },
    {
      id: 433,
      name: 'Staraptor',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/433.png'
    },
    {
      id: 434,
      name: 'Bidoof',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/434.png'
    },
    {
      id: 435,
      name: 'Bibarel',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/435.png'
    },
    {
      id: 436,
      name: 'Kricketot',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/436.png'
    },
    {
      id: 437,
      name: 'Kricketune',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/437.png'
    },
    {
      id: 438,
      name: 'Shinx',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/438.png'
    },
    {
      id: 439,
      name: 'Luxio',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/439.png'
    },
    {
      id: 440,
      name: 'Luxray',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/440.png'
    },
    {
      id: 441,
      name: 'Budew',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/441.png'
    },
    {
      id: 442,
      name: 'Roserade',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/442.png'
    },
    {
      id: 443,
      name: 'Cranidos',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/443.png'
    },
    {
      id: 444,
      name: 'Rampardos',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/444.png'
    },
    {
      id: 445,
      name: 'Shieldon',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/445.png'
    },
    {
      id: 446,
      name: 'Bastiodon',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/446.png'
    },
    {
      id: 447,
      name: 'Burmy',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/447.png'
    },
    {
      id: 448,
      name: 'Burmy Sandy Cloak',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/448.png'
    },
    {
      id: 449,
      name: 'Burmy Grass Cloak',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/449.png'
    },
    {
      id: 450,
      name: 'Wormadam',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/450.png'
    },
    {
      id: 451,
      name: 'Wormadam Sandy Cloak',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/451.png'
    },
    {
      id: 452,
      name: 'Wormadam Grass Cloak',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/452.png'
    },
    {
      id: 453,
      name: 'Mothim',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/453.png'
    },
    {
      id: 454,
      name: 'Combee',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/454.png'
    },
    {
      id: 455,
      name: 'Vespiquen',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/455.png'
    },
    {
      id: 456,
      name: 'Pachirisu',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/456.png'
    },
    {
      id: 457,
      name: 'Buizel',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/457.png'
    },
    {
      id: 458,
      name: 'Floatzel',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/458.png'
    },
    {
      id: 459,
      name: 'Cherubi',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/459.png'
    },
    {
      id: 460,
      name: 'Cherrim sunshine',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/460.png'
    },
    {
      id: 461,
      name: 'Cherrim',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/461.png'
    },
    {
      id: 462,
      name: 'Shellos East Sea',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/462.png'
    },
    {
      id: 463,
      name: 'Shellos West Sea',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/463.png'
    },
    {
      id: 464,
      name: 'Gastrodon East Sea',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/464.png'
    },
    {
      id: 465,
      name: 'Gastrodon West Sea',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/465.png'
    },
    {
      id: 466,
      name: 'Ambipom',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/466.png'
    },
    {
      id: 467,
      name: 'Drifloon',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/467.png'
    },
    {
      id: 468,
      name: 'Drifblim',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/468.png'
    },
    {
      id: 469,
      name: 'Buneary',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/469.png'
    },
    {
      id: 470,
      name: 'Lopunny',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/470.png'
    },
    {
      id: 471,
      name: 'Mismagius',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/471.png'
    },
    {
      id: 472,
      name: 'Honchkrow',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/472.png'
    },
    {
      id: 473,
      name: 'Glameow',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/473.png'
    },
    {
      id: 474,
      name: 'Purugly',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/474.png'
    },
    {
      id: 475,
      name: 'Chingling',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/475.png'
    },
    {
      id: 476,
      name: 'Stunky',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/476.png'
    },
    {
      id: 477,
      name: 'Skuntank',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/477.png'
    },
    {
      id: 478,
      name: 'Bronzor',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/478.png'
    },
    {
      id: 479,
      name: 'Bronzong',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/479.png'
    },
    {
      id: 480,
      name: 'Bonsly',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/480.png'
    },
    {
      id: 481,
      name: 'Mime Jr.',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/481.png'
    },
    {
      id: 482,
      name: 'Chatot',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/482.png'
    },
    {
      id: 483,
      name: 'Spiritomb',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/483.png'
    },
    {
      id: 484,
      name: 'Gible',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/484.png'
    },
    {
      id: 485,
      name: 'Gabite',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/485.png'
    },
    {
      id: 486,
      name: 'Garchomp',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/486.png'
    },
    {
      id: 487,
      name: 'Munchlax',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/487.png'
    },
    {
      id: 488,
      name: 'Riolu',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/488.png'
    },
    {
      id: 489,
      name: 'Lucario',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/489.png'
    },
    {
      id: 490,
      name: 'Hippopotas',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/490.png'
    },
    {
      id: 491,
      name: 'Hippowdon',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/491.png'
    },
    {
      id: 492,
      name: 'Skorupi',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/492.png'
    },
    {
      id: 493,
      name: 'Drapion',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/493.png'
    },
    {
      id: 494,
      name: 'Croagunk',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/494.png'
    },
    {
      id: 495,
      name: 'Toxicroak',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/495.png'
    },
    {
      id: 496,
      name: 'Carnivine',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/496.png'
    },
    {
      id: 497,
      name: 'Finneon',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/497.png'
    },
    {
      id: 498,
      name: 'Lumineon',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/498.png'
    },
    {
      id: 499,
      name: 'Mantyke',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/499.png'
    },
    {
      id: 500,
      name: 'Snover',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/500.png'
    },
    {
      id: 501,
      name: 'Abomasnow',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/501.png'
    },
    {
      id: 502,
      name: 'Weavile',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/502.png'
    },
    {
      id: 503,
      name: 'Magnezone',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/503.png'
    },
    {
      id: 504,
      name: 'Lickilicky',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/504.png'
    },
    {
      id: 505,
      name: 'Rhyperior',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/505.png'
    },
    {
      id: 506,
      name: 'Tangrowth',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/506.png'
    },
    {
      id: 507,
      name: 'Electivire',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/507.png'
    },
    {
      id: 508,
      name: 'Magmortar',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/508.png'
    },
    {
      id: 509,
      name: 'Togekiss',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/509.png'
    },
    {
      id: 510,
      name: 'Yanmega',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/510.png'
    },
    {
      id: 511,
      name: 'Leafeon',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/511.png'
    },
    {
      id: 512,
      name: 'Glaceon',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/512.png'
    },
    {
      id: 513,
      name: 'Gliscor',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/513.png'
    },
    {
      id: 514,
      name: 'Mamoswine',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/514.png'
    },
    {
      id: 515,
      name: 'Porygon-Z',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/515.png'
    },
    {
      id: 516,
      name: 'Gallade',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/516.png'
    },
    {
      id: 517,
      name: 'Probopass',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/517.png'
    },
    {
      id: 518,
      name: 'Dusknoir',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/518.png'
    },
    {
      id: 519,
      name: 'Froslass',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/519.png'
    },
    {
      id: 520,
      name: 'Rotom',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/520.png'
    },
    {
      id: 521,
      name: 'Rotom Heat Forme',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/521.png'
    },
    {
      id: 522,
      name: 'Rotom Wash Forme',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/522.png'
    },
    {
      id: 523,
      name: 'Rotom Frost Forme',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/523.png'
    },
    {
      id: 524,
      name: 'Rotom Fan Forme',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/524.png'
    },
    {
      id: 525,
      name: 'Rotom Mow Forme',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/525.png'
    },
    {
      id: 526,
      name: 'Uxie',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/526.png'
    },
    {
      id: 527,
      name: 'Mesprit',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/527.png'
    },
    {
      id: 528,
      name: 'Azelf',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/528.png'
    },
    {
      id: 529,
      name: 'Dialga',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/529.png'
    },
    {
      id: 530,
      name: 'Palkia',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/530.png'
    },
    {
      id: 531,
      name: 'Heatran',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/531.png'
    },
    {
      id: 532,
      name: 'Regigigas',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/532.png'
    },
    {
      id: 533,
      name: 'Giratina',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/533.png'
    },
    {
      id: 534,
      name: 'Giratina Origin Forme',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/534.png'
    },
    {
      id: 535,
      name: 'Cresselia',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/535.png'
    },
    {
      id: 536,
      name: 'Phione',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/536.png'
    },
    {
      id: 537,
      name: 'Manaphy',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/537.png'
    },
    {
      id: 538,
      name: 'Darkrai',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/538.png'
    },
    {
      id: 539,
      name: 'Shaymin',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/539.png'
    },
    {
      id: 540,
      name: 'Shaymin Sky Forme',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/540.png'
    },
    {
      id: 541,
      name: 'Arceus Bug',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/541.png'
    },
    {
      id: 542,
      name: 'Arceus Dark',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/542.png'
    },
    {
      id: 543,
      name: 'Arceus Dragon',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/543.png'
    },
    {
      id: 544,
      name: 'Arceus Electric',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/544.png'
    },
    {
      id: 545,
      name: 'Arceus Fairy',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/545.png'
    },
    {
      id: 546,
      name: 'Arceus Fighting',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/546.png'
    },
    {
      id: 547,
      name: 'Arceus Fire',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/547.png'
    },
    {
      id: 548,
      name: 'Arceus Flying',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/548.png'
    },
    {
      id: 549,
      name: 'Arceus Ghost',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/549.png'
    },
    {
      id: 550,
      name: 'Arceus Grass',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/550.png'
    },
    {
      id: 551,
      name: 'Arceus Ground',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/551.png'
    },
    {
      id: 552,
      name: 'Arceus Ice',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/552.png'
    },
    {
      id: 553,
      name: 'Arceus Normal',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/553.png'
    },
    {
      id: 554,
      name: 'Arceus Poison',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/554.png'
    },
    {
      id: 555,
      name: 'Arceus Psychic',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/555.png'
    },
    {
      id: 556,
      name: 'Arceus Rock',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/556.png'
    },
    {
      id: 557,
      name: 'Arceus Steel',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/557.png'
    },
    {
      id: 558,
      name: 'Arceus Water',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/558.png'
    },
    {
      id: 559,
      name: 'Victini',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/559.png'
    },
    {
      id: 560,
      name: 'Snivy',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/560.png'
    },
    {
      id: 561,
      name: 'Servine',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/561.png'
    },
    {
      id: 562,
      name: 'Serperior',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/562.png'
    },
    {
      id: 563,
      name: 'Teppig',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/563.png'
    },
    {
      id: 564,
      name: 'Pignite',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/564.png'
    },
    {
      id: 565,
      name: 'Emboar',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/565.png'
    },
    {
      id: 566,
      name: 'Oshawott',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/566.png'
    },
    {
      id: 567,
      name: 'Dewott',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/567.png'
    },
    {
      id: 568,
      name: 'Samurott',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/568.png'
    },
    {
      id: 569,
      name: 'Patrat',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/569.png'
    },
    {
      id: 570,
      name: 'Watchog',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/570.png'
    },
    {
      id: 571,
      name: 'Lillipup',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/571.png'
    },
    {
      id: 572,
      name: 'Herdier',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/572.png'
    },
    {
      id: 573,
      name: 'Stoutland',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/573.png'
    },
    {
      id: 574,
      name: 'Purrloin',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/574.png'
    },
    {
      id: 575,
      name: 'Liepard',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/575.png'
    },
    {
      id: 576,
      name: 'Pansage',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/576.png'
    },
    {
      id: 577,
      name: 'Simisage',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/577.png'
    },
    {
      id: 578,
      name: 'Pansear',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/578.png'
    },
    {
      id: 579,
      name: 'Simisear',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/579.png'
    },
    {
      id: 580,
      name: 'Panpour',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/580.png'
    },
    {
      id: 581,
      name: 'Simipour',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/581.png'
    },
    {
      id: 582,
      name: 'Munna',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/582.png'
    },
    {
      id: 583,
      name: 'Musharna',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/583.png'
    },
    {
      id: 584,
      name: 'Pidove',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/584.png'
    },
    {
      id: 585,
      name: 'Tranquill',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/585.png'
    },
    {
      id: 586,
      name: 'Unfezant',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/586.png'
    },
    {
      id: 587,
      name: 'Blitzle',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/587.png'
    },
    {
      id: 588,
      name: 'Zebstrika',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/588.png'
    },
    {
      id: 589,
      name: 'Roggenrola',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/589.png'
    },
    {
      id: 590,
      name: 'Boldore',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/590.png'
    },
    {
      id: 591,
      name: 'Gigalith',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/591.png'
    },
    {
      id: 592,
      name: 'Woobat',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/592.png'
    },
    {
      id: 593,
      name: 'Swoobat',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/593.png'
    },
    {
      id: 594,
      name: 'Drilbur',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/594.png'
    },
    {
      id: 595,
      name: 'Excadrill',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/595.png'
    },
    {
      id: 596,
      name: 'Timburr',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/596.png'
    },
    {
      id: 597,
      name: 'Gurdurr',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/597.png'
    },
    {
      id: 598,
      name: 'Conkeldurr',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/598.png'
    },
    {
      id: 599,
      name: 'Tympole',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/599.png'
    },
    {
      id: 600,
      name: 'Palpitoad',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/600.png'
    },
    {
      id: 601,
      name: 'Seismitoad',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/601.png'
    },
    {
      id: 602,
      name: 'Throh',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/602.png'
    },
    {
      id: 603,
      name: 'Sawk',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/603.png'
    },
    {
      id: 604,
      name: 'Sewaddle',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/604.png'
    },
    {
      id: 605,
      name: 'Swadloon',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/605.png'
    },
    {
      id: 606,
      name: 'Leavanny',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/606.png'
    },
    {
      id: 607,
      name: 'Venipede',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/607.png'
    },
    {
      id: 608,
      name: 'Whirlipede',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/608.png'
    },
    {
      id: 609,
      name: 'Scolipede',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/609.png'
    },
    {
      id: 610,
      name: 'Cottonee',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/610.png'
    },
    {
      id: 611,
      name: 'Whimsicott',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/611.png'
    },
    {
      id: 612,
      name: 'Petilil',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/612.png'
    },
    {
      id: 613,
      name: 'Lilligant',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/613.png'
    },
    {
      id: 614,
      name: 'Basculin Red Stripe',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/614.png'
    },
    {
      id: 615,
      name: 'Basculin Blue Stripe',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/615.png'
    },
    {
      id: 616,
      name: 'Sandile',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/616.png'
    },
    {
      id: 617,
      name: 'Krokorok',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/617.png'
    },
    {
      id: 618,
      name: 'Krookodile',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/618.png'
    },
    {
      id: 619,
      name: 'Darumaka',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/619.png'
    },
    {
      id: 620,
      name: 'Darmanitan Standard Mode',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/620.png'
    },
    {
      id: 621,
      name: 'Darmanitan Zen Mode',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/621.png'
    },
    {
      id: 622,
      name: 'Maractus',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/622.png'
    },
    {
      id: 623,
      name: 'Dwebble',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/623.png'
    },
    {
      id: 624,
      name: 'Crustle',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/624.png'
    },
    {
      id: 625,
      name: 'Scraggy',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/625.png'
    },
    {
      id: 626,
      name: 'Scrafty',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/626.png'
    },
    {
      id: 627,
      name: 'Sigilyph',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/627.png'
    },
    {
      id: 628,
      name: 'Yamask',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/628.png'
    },
    {
      id: 629,
      name: 'Cofagrigus',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/629.png'
    },
    {
      id: 630,
      name: 'Tirtouga',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/630.png'
    },
    {
      id: 631,
      name: 'Carracosta',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/631.png'
    },
    {
      id: 632,
      name: 'Archen',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/632.png'
    },
    {
      id: 633,
      name: 'Archeops',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/633.png'
    },
    {
      id: 634,
      name: 'Trubbish',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/634.png'
    },
    {
      id: 635,
      name: 'Garbodor',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/635.png'
    },
    {
      id: 636,
      name: 'Zorua',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/636.png'
    },
    {
      id: 637,
      name: 'Zoroark',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/637.png'
    },
    {
      id: 638,
      name: 'Minccino',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/638.png'
    },
    {
      id: 639,
      name: 'Cinccino',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/639.png'
    },
    {
      id: 640,
      name: 'Gothita',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/640.png'
    },
    {
      id: 641,
      name: 'Gothorita',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/641.png'
    },
    {
      id: 642,
      name: 'Gothitelle',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/642.png'
    },
    {
      id: 643,
      name: 'Solosis',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/643.png'
    },
    {
      id: 644,
      name: 'Duosion',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/644.png'
    },
    {
      id: 645,
      name: 'Reuniclus',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/645.png'
    },
    {
      id: 646,
      name: 'Ducklett',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/646.png'
    },
    {
      id: 647,
      name: 'Swanna',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/647.png'
    },
    {
      id: 648,
      name: 'Vanillite',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/648.png'
    },
    {
      id: 649,
      name: 'Vanillish',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/649.png'
    },
    {
      id: 650,
      name: 'Vanilluxe',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/650.png'
    },
    {
      id: 651,
      name: 'Deerling Spring Forme',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/651.png'
    },
    {
      id: 652,
      name: 'Deerling Summer Forme',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/652.png'
    },
    {
      id: 653,
      name: 'Deerling Autumn Forme',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/653.png'
    },
    {
      id: 654,
      name: 'Deerling Winter Forme',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/654.png'
    },
    {
      id: 655,
      name: 'Sawsbuck Spring Forme',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/655.png'
    },
    {
      id: 656,
      name: 'Sawsbuck Summer Forme',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/656.png'
    },
    {
      id: 657,
      name: 'Sawsbuck Autumn Forme',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/657.png'
    },
    {
      id: 658,
      name: 'Sawsbuck Winter Forme',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/658.png'
    },
    {
      id: 659,
      name: 'Emolga',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/659.png'
    },
    {
      id: 660,
      name: 'Karrablast',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/660.png'
    },
    {
      id: 661,
      name: 'Escavalier',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/661.png'
    },
    {
      id: 662,
      name: 'Foongus',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/662.png'
    },
    {
      id: 663,
      name: 'Amoonguss',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/663.png'
    },
    {
      id: 664,
      name: 'Frillish Male',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/664.png'
    },
    {
      id: 665,
      name: 'Frillish Female',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/665.png'
    },
    {
      id: 666,
      name: 'Jellicent Male',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/666.png'
    },
    {
      id: 667,
      name: 'Jellicent Female',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/667.png'
    },
    {
      id: 668,
      name: 'Alomomola',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/668.png'
    },
    {
      id: 669,
      name: 'Joltik',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/669.png'
    },
    {
      id: 670,
      name: 'Galvantula',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/670.png'
    },
    {
      id: 671,
      name: 'Ferroseed',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/671.png'
    },
    {
      id: 672,
      name: 'Ferrothorn',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/672.png'
    },
    {
      id: 673,
      name: 'Kling',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/673.png'
    },
    {
      id: 674,
      name: 'Klang',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/674.png'
    },
    {
      id: 675,
      name: 'Klinklang',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/675.png'
    },
    {
      id: 676,
      name: 'Tynamo',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/676.png'
    },
    {
      id: 677,
      name: 'Eelektrik',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/677.png'
    },
    {
      id: 678,
      name: 'Eelektross',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/678.png'
    },
    {
      id: 679,
      name: 'Elgyem',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/679.png'
    },
    {
      id: 680,
      name: 'Beheeyem',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/680.png'
    },
    {
      id: 681,
      name: 'Litwick',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/681.png'
    },
    {
      id: 682,
      name: 'Lampent',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/682.png'
    },
    {
      id: 683,
      name: 'Chandelure',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/683.png'
    },
    {
      id: 684,
      name: 'Axew',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/684.png'
    },
    {
      id: 685,
      name: 'Fraxure',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/685.png'
    },
    {
      id: 686,
      name: 'Haxorus',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/686.png'
    },
    {
      id: 687,
      name: 'Cubchoo',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/687.png'
    },
    {
      id: 688,
      name: 'Beartic',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/688.png'
    },
    {
      id: 689,
      name: 'Cryogonal',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/689.png'
    },
    {
      id: 690,
      name: 'Shelmet',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/690.png'
    },
    {
      id: 691,
      name: 'Accelgor',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/691.png'
    },
    {
      id: 692,
      name: 'Stunfisk',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/692.png'
    },
    {
      id: 693,
      name: 'Mienfoo',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/693.png'
    },
    {
      id: 694,
      name: 'Mienshao',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/694.png'
    },
    {
      id: 695,
      name: 'Druddigon',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/695.png'
    },
    {
      id: 696,
      name: 'Golett',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/696.png'
    },
    {
      id: 697,
      name: 'Golurk',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/697.png'
    },
    {
      id: 698,
      name: 'Pawniard',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/698.png'
    },
    {
      id: 699,
      name: 'Bisharp',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/699.png'
    },
    {
      id: 700,
      name: 'Bouffalant',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/700.png'
    },
    {
      id: 701,
      name: 'Rufflet',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/701.png'
    },
    {
      id: 702,
      name: 'Braviary',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/702.png'
    },
    {
      id: 703,
      name: 'Vullaby',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/703.png'
    },
    {
      id: 704,
      name: 'Mandibuzz',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/704.png'
    },
    { 
      id: 705,
      name: 'Heatmor',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/705.png'
    },
    { 
      id: 706,
      name: 'Durant',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/706.png'
    },
    { 
      id: 707,
      name: 'Deino',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/707.png'
    },{ 
      id: 708,
      name: 'Zweilous',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/708.png'
    },
    { 
      id: 709,
      name: 'Hydreigon',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/709.png'
    },
    { 
      id: 710,
      name: 'Larvesta',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/710.png'
    },
    { 
      id: 711,
      name: 'Volcarona',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/711.png'
    },
    { 
      id: 712,
      name: 'Cobalion',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/712.png'
    },
    { 
      id: 713,
      name: 'Terrakion',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/713.png'
    },
    { 
      id: 714,
      name: 'Virizion',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/714.png'
    },
    { 
      id: 715,
      name: 'Tornadus',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/715.png'
    },
    { 
      id: 716,
      name: 'Tornadus Therian',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/716.png'
    },
    { 
      id: 717,
      name: 'Thundurus',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/717.png'
    },
    { 
      id: 718,
      name: 'Thundurus Therian',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/718.png'
    },
    { 
      id: 719,
      name: 'Reshiram',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/719.png'
    },
    { 
      id: 720,
      name: 'Zekrom',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/720.png'
    },
    { 
      id: 721,
      name: 'Landorus',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/721.png'
    },
    { 
      id: 722,
      name: 'Landorus Therian',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/722.png'
    },
    { 
      id: 723,
      name: 'Kyurem',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/723.png'
    },
    { 
      id: 724,
      name: 'Kyurem White',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/724.png'
    },
    { 
      id: 725,
      name: 'Kyurem Black',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/725.png'
    },
    { 
      id: 726,
      name: 'Keldeo',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/726.png'
    },
    { 
      id: 727,
      name: 'Keldeo Master',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/727.png'
    },
    { 
      id: 728,
      name: 'Meloetta',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/728.png'
    },
    { 
      id: 729,
      name: 'Genesect',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/729.png'
    },
    { 
      id: 734,
      name: 'Chespin',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/734.png'
    },
    { 
      id: 735,
      name: 'Quilladin',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/735.png'
    },
    { 
      id: 736,
      name: 'Chestnaught',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/736.png'
    },
    { 
      id: 737,
      name: 'Fennekin',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/737.png'
    },
    { 
      id: 738,
      name: 'Braixen',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/738.png'
    },
    { 
      id: 739,
      name: 'Delphox',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/739.png'
    },
    { 
      id: 740,
      name: 'Froakie',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/740.png'
    },
    { 
      id: 741,
      name: 'Frogadier',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/741.png'
    },
    { 
      id: 742,
      name: 'Greninja',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/742.png'
    },
    { 
      id: 743,
      name: 'Bunnelby',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/743.png'
    },
    { 
      id: 744,
      name: 'Diggersby',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/744.png'
    },
    { 
      id: 745,
      name: 'Fletchling',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/745.png'
    },
    { 
      id: 746,
      name: 'Flecthinder',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/746.png'
    },
    { 
      id: 747,
      name: 'Talonflame',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/747.png'
    },
    { 
      id: 748,
      name: 'Scatterbug',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/748.png'
    },
    { 
      id: 749,
      name: 'Spewpa',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/749.png'
    },
    { 
      id: 750,
      name: 'Vivillon',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/750.png'
    },
    { 
      id: 768,
      name: 'Litleo',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/768.png'
    },
    { 
      id: 769,
      name: 'Pyroar',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/769.png'
    },
    { 
      id: 771,
      name: 'Flabebe',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/771.png'
    },
    { 
      id: 776,
      name: 'Floette',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/776.png'
    },
    { 
      id: 781,
      name: 'Florges',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/781.png'
    },
    { 
      id: 786,
      name: 'Skiddo',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/786.png'
    },
    { 
      id: 787,
      name: 'Gogoat',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/787.png'
    },
    { 
      id: 788,
      name: 'Pancham',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/788.png'
    },
    { 
      id: 789,
      name: 'Pangoro',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/789.png'
    },
    { 
      id: 790,
      name: 'Furfrou',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/790.png'
    },
    { 
      id: 800,
      name: 'Meowstic Male',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/800.png'
    },
    { 
      id: 801,
      name: 'Meowstic Female',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/801.png'
    },
    { 
      id: 802,
      name: 'Honedge',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/802.png'
    },
    { 
      id: 803,
      name: 'Doublade',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/803.png'
    },
    { 
      id: 804,
      name: 'Aegislash',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/804.png'
    },
    { 
      id: 806,
      name: 'Spritzee',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/806.png'
    },
    { 
      id: 807,
      name: 'Aromatisse',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/807.png'
    },
    { 
      id: 808,
      name: 'Swirlix',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/808.png'
    },
    { 
      id: 810,
      name: 'Inkay',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/810.png'
    },
    { 
      id: 811,
      name: 'Malamar',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/811.png'
    },
    { 
      id: 812,
      name: 'Binacle',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/812.png'
    },
    { 
      id: 813,
      name: 'Barbaracle',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/813.png'
    },
    { 
      id: 814,
      name: 'Skrelp',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/814.png'
    },
    { 
      id: 815,
      name: 'Dragalge',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/815.png'
    },
    { 
      id: 816,
      name: 'Clauncher',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/816.png'
    },
    { 
      id: 817,
      name: 'Clawitzer',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/4.png'
    },
    { 
      id: 819,
      name: 'Heliolisk',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/819.png'
    },
    { 
      id: 820,
      name: 'Tyrunt',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/820.png'
    },
    { 
      id: 821,
      name: 'Tyrantrum',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/821.png'
    },
    { 
      id: 822,
      name: 'Amaura',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/822.png'
    },
    { 
      id: 823,
      name: 'Aurorus',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/823.png'
    },
    { 
      id: 824,
      name: 'Sylveon',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/824.png'
    },
    { 
      id: 825,
      name: 'Hawlucha',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/825.png'
    },
    { 
      id: 826,
      name: 'Dedenne',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/826.png'
    },
    { 
      id: 827,
      name: 'Carbink',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/827.png'
    },
    { 
      id: 828,
      name: 'Goomy',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/828.png'
    },
    { 
      id: 829,
      name: 'Sliggo',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/829.png'
    },
    { 
      id: 830,
      name: 'Goodra',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/830.png'
    },
    { 
      id: 831,
      name: 'Klefki',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/831.png'
    },
    { 
      id: 832,
      name: 'Phantump',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/832.png'
    },
    { 
      id: 833,
      name: 'Trevenant',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/833.png'
    },
    { 
      id: 834,
      name: 'Pumpkaboo',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/834.png'
    },
    { 
      id: 838,
      name: 'Gourgeist',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/838.png'
    },
    { 
      id: 842,
      name: 'Bergmite',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/842.png'
    },
    { 
      id: 843,
      name: 'Avalugg',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/843.png'
    },
    { 
      id: 844,
      name: 'Noibat',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/844.png'
    },
    { 
      id: 845,
      name: 'Noivern',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/845.png'
    },
    { 
      id: 846,
      name: 'Xerneas',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/846.png'
    },
    { 
      id: 847,
      name: 'Yveltal',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/847.png'
    },
    { 
      id: 848,
      name: 'Zygarde',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/848.png'
    },
    { 
      id: 849,
      name: 'Diancie',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/849.png'
    },
    { 
      id: 850,
      name: 'Hoopa',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/850.png'
    },
    { 
      id: 851,
      name: 'Hoopa Unbound',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/851.png'
    },
    { 
      id: 852,
      name: 'Volcanion',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/852.png'
    },
    { 
      id: 853,
      name: 'MegaVenusaur',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/853.png'
    },
    { 
      id: 854,
      name: 'MegaCharizardX',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/854.png'
    },
    { 
      id: 855,
      name: 'MegaCharizardY',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/855.png'
    },
    { 
      id: 856,
      name: 'MegaBlastoise',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/856.png'
    },
    { 
      id: 857,
      name: 'MegaBeedrill',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/4.png'
    },
    { 
      id: 858,
      name: 'MegaPidgeot',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/858.png'
    },
    { 
      id: 859,
      name: 'MegaAlakazam',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/859.png'
    },
    { 
      id: 860,
      name: 'MegaSlowbro',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/860.png'
    },
    { 
      id: 861,
      name: 'MegaGengar',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/861.png'
    },
    { 
      id: 862,
      name: 'MegaKangaskhan',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/862.png'
    },
    { 
      id: 863,
      name: 'MegaPinsir',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/863.png'
    },
    { 
      id: 864,
      name: 'MegaGyarados',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/864.png'
    },
    { 
      id: 865,
      name: 'MegaAerodactyl',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/865.png'
    },
    { 
      id: 866,
      name: 'MegaMewtwoX',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/866.png'
    },
    { 
      id: 867,
      name: 'MegaMewtwoY',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/867.png'
    },
    { 
      id: 868,
      name: 'MegaAmpharos',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/868.png'
    },
    { 
      id: 869,
      name: 'MegaSteelix',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/869.png'
    },
    { 
      id: 870,
      name: 'MegaScizor',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/870.png'
    },
    { 
      id: 871,
      name: 'MegaHeracross',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/871.png'
    },
    { 
      id: 872,
      name: 'MegaHoundoom',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/872.png'
    },
    { 
      id: 873,
      name: 'MegaTyranitar',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/873.png'
    },
    { 
      id: 874,
      name: 'MegaSceptile',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/874.png'
    },
    { 
      id: 875,
      name: 'MegaBlaziken',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/875.png'
    },
    { 
      id: 876,
      name: 'MegaSwampert',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/876.png'
    },
    { 
      id: 877,
      name: 'MegaGardevoir',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/877.png'
    },
    { 
      id: 878,
      name: 'MegaSableye',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/878.png'
    },
    { 
      id: 879,
      name: 'MegaMawile',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/879.png'
    },
    { 
      id: 880,
      name: 'MegaAggron',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/880.png'
    },
    { 
      id: 881,
      name: 'MegaMedicham',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/881.png'
    },
    { 
      id: 882,
      name: 'MegaManectric',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/882.png'
    },
    { 
      id: 883,
      name: 'MegaSharpedo',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/883.png'
    },
    { 
      id: 884,
      name: 'MegaCamerupt',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/884.png'
    },
    { 
      id: 885,
      name: 'MegaAltaria',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/885.png'
    },
    { 
      id: 886,
      name: 'MegaBanette',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/886.png'
    },
    { 
      id: 887,
      name: 'MegaAbsol',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/887.png'
    },
    { 
      id: 888,
      name: 'MegaGlalie',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/888.png'
    },
    { 
      id: 889,
      name: 'MegaSalamance',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/889.png'
    },
    { 
      id: 890,
      name: 'MegaMetagross',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/890.png'
    },
    { 
      id: 891,
      name: 'MegaLatias',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/891.png'
    },
    { 
      id: 892,
      name: 'MegaLatios',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/892.png'
    },
    { 
      id: 893,
      name: 'MegaRayquaza',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/893.png'
    },
    { 
      id: 894,
      name: 'MegaLopunny',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/894.png'
    },
    { 
      id: 895,
      name: 'MegaGarchomp',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/895.png'
    },
    { 
      id: 896,
      name: 'MegaLucario',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/896.png'
    },
    { 
      id: 897,
      name: 'MegaAbomasnow',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/897.png'
    },
    { 
      id: 898,
      name: 'MegaGallade',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/898.png'
    },
    { 
      id: 899,
      name: 'MegaDiancie',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/899.png'
    },
    { 
      id: 924,
      name: 'Magikarp Shiny',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/924.png'
    },
    { 
      id: 925,
      name: 'Gyarados Shiny',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/925.png'
    },
    { 
      id: 950,
      name: 'Rayquaza Shiny',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/950.png'
    },
    { 
      id: 973,
      name: 'Greninja-Ash',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/973.png'
    },
    { 
      id: 978,
      name: 'Slurpuff',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/978.png'
    },
    { 
      id: 983,
      name: 'Zygarde10%',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/983.png'
    },
    { 
      id: 984,
      name: 'Zygarde100%',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/984.png'
    },
    { 
      id: 985,
      name: 'Charizard Shiny',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/985.png'
    },
    { 
      id: 1008,
      name: 'Gengar Shiny',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/1008.png'
    },
    { 
      id: 1009,
      name: 'Mewtwo Shiny',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/1009.png'
    },
    { 
      id: 1011,
      name: 'Tyranitar Shiny',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/1011.png'
    },
    { 
      id: 1012,
      name: 'Ho-oh Shiny',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/1012.png'
    },
    { 
      id: 1013,
      name: 'Gardevoir Shiny',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/1013.png'
    },
    { 
      id: 1017,
      name: 'Metagross Shiny',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/1017.png'
    },
    { 
      id: 1023,
      name: 'Hawlucha Shiny',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/1023.png'
    },
    { 
      id: 1024,
      name: 'Xerneas Shiny',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/1024.png'
    },
    { 
      id: 1025,
      name: 'Yveltal Shiny',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/1025.png'
    },
    { 
      id: 1026,
      name: 'Zygarde Cell',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/1026.png'
    },
    { 
      id: 1028,
      name: 'Diancie Shiny',
      image: '/workspaces/PokemonShuffle2025ErikRuiz/public/sprites-shuffle/1028.png'
    },
];
  
  export default shufflePokemon;