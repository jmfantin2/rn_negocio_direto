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

// ANNOUNCEMENT DETAIL
export const mockedData = {
  category: [
    { name: 'novilho', quantity: 10, size: 0 },
    { name: 'novilha', quantity: 5, size: 1 },
  ],
  breed: [
    { name: 'devon', quantity: 10, size: 0 },
    { name: 'nelore', quantity: 5, size: 1 },
  ],
  ageRange: '5Y-7Y',
  weight: '150',
  location: {
    city: 'Erechim',
    state: 'RS',
  },
  observations: [
    'um dos novilhos tem uma condição de nascença que o faz mancar',
    'de resto, tudo normal',
  ],
  createdDate: '2020-04-21T21:49:38.734+00:00',
  endDate: '2020-04-24T21:49:38.734+00:00',
  initialPrice: 0,
  currentPrice: '7.50',
};
