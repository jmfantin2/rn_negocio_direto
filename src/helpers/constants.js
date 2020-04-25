// Não mexa a menos que saiba exatamente o que está fazendo :)

// ANNOUNCEMENT CREATION
export const CATEGORIES = [
  { label: "TERNEIRO", value: "terneiro" },
  { label: "NOVILHO", value: "novilho" },
  { label: "TOURO", value: "touro" },
  { label: "TERNEIRA", value: "terneira" },
  { label: "NOVILHA", value: "novilha" },
  { label: "VACA", value: "vaca" },
  { label: "VACA INVERNAR", value: "vaca_invernar" },
];

export const BREEDS = [
  { label: "ANGUS (ABERDEEN)", value: "aberdeen_angus" },
  { label: "ANGUS (RED)", value: "red_angus" },
  { label: "BRAFORD", value: "braford" },
  { label: "BRANGUS", value: "brangus" },
  { label: "BRITÂNICOS", value: "britânicos" },
  { label: "CANCHIN", value: "canchin" },
  { label: "CHAROLES", value: "charoles" },
  { label: "CRUZAS EUROPEIAS", value: "cruzas_europeias" },
  { label: "CRUZAS LEITEIRAS", value: "cruzas_leiteiras" },
  { label: "CRUZAS ZEBU", value: "cruzas zebu" },
  { label: "DEVON", value: "devon" },
  { label: "EUROPEUS", value: "europeus" },
  { label: "HEREFORD", value: "hereford" },
  { label: "LIMOUSIN", value: "limousin" },
  { label: "NELORE", value: "nelore" },
  { label: "SIMENTAL", value: "simental" },
  { label: "TABAPUÃ", value: "tabapuã" },
  { label: "ZEBU", value: "zebu" },
];

// ANNOUNCEMENT DETAI
export const ANNOUNCEMENT = {
  category: [
    { name: "novilho", quantity: 10 },
    { name: "novilha", quantity: 5 }
  ],
  breed: [
    { name: "devon", quantity: 10 },
    { name: "nelore", quantity: 5 }
  ],
  ageRange: "5y-7y",
  weight: "150",
  location: {
    city: "Erechim",
    state: "RS",
  },
  observations: [
    "O gado é louco",
    "Tô com fome"
  ],
  createdDate: "2020-04-21T21:49:38.734+00:00",
  endDate: "2020-04-24T21:49:38.734+00:00",
  initialPrice: 0,
  currentPrice: "7.50"
}