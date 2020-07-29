// Não mexa a menos que saiba exatamente o que está fazendo :)

// ANNOUNCEMENT CREATION
export const CATEGORIES = [
  { label: 'TERNEIRO', value: 'terneiro' },
  { label: 'NOVILHO', value: 'novilho' },
  { label: 'TOURO', value: 'touro' },
  { label: 'TERNEIRA', value: 'terneira' },
  { label: 'NOVILHA', value: 'novilha' },
  { label: 'VACA', value: 'vaca' },
  { label: 'VACA INVERNAR', value: 'vaca_invernar' },
];

export const BREEDS = [
  { label: 'ANGUS (ABERDEEN)', value: 'aberdeen_angus' },
  { label: 'ANGUS (RED)', value: 'red_angus' },
  { label: 'BRAFORD', value: 'braford' },
  { label: 'BRANGUS', value: 'brangus' },
  { label: 'BRITÂNICOS', value: 'britânicos' },
  { label: 'CANCHIN', value: 'canchin' },
  { label: 'CHAROLES', value: 'charoles' },
  { label: 'CRUZAS EUROPEIAS', value: 'cruzas_europeias' },
  { label: 'CRUZAS LEITEIRAS', value: 'cruzas_leiteiras' },
  { label: 'CRUZAS ZEBU', value: 'cruzas zebu' },
  { label: 'DEVON', value: 'devon' },
  { label: 'EUROPEUS', value: 'europeus' },
  { label: 'HEREFORD', value: 'hereford' },
  { label: 'LIMOUSIN', value: 'limousin' },
  { label: 'NELORE', value: 'nelore' },
  { label: 'SIMENTAL', value: 'simental' },
  { label: 'TABAPUÃ', value: 'tabapuã' },
  { label: 'ZEBU', value: 'zebu' },
];

export const mockedList = [
  {
    id: '5eof356',
    category: [
      { name: 'NOVILHO', quantity: 10 },
      { name: 'NOVILHA', quantity: 5 },
    ],
    location: {
      city: 'Erechim',
      state: 'RS',
    },
    animalsQuantity: 15,
    currentPrice: '7',
  },
];

export const mockedDetail = {
  id: '5eof356',
  category: [
    { name: 'NOVILHO', quantity: 10 },
    { name: 'NOVILHA', quantity: 5 },
  ],
  breed: [
    { name: 'BRANGUS', quantity: 10 },
    { name: 'DEVON', quantity: 5 },
  ],
  observations: ['são 5 inteiros e 5 castrados', 'nenhuma novilha prenhe'],
  location: {
    city: 'Erechim',
    state: 'RS',
  },
  animalsQuantity: 15,
  currentPrice: '7',
  picture: {
    originalUrl:
      'https://64.media.tumblr.com/6567a164212aaf7b6b9b7c8645ba4aaa/d60bfe9bc3c7fd99-e4/s400x600/7aa485f187a19d7a4a97235e16517c49c7efe481.png',
  },
};
