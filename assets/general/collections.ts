// Não mexa a menos que saiba exatamente o que está fazendo :)

const collections = {
  CATEGORIES: [
    { label: "TERNEIRO", value: "terneiro" },
    { label: "NOVILHO", value: "novilho" },
    { label: "TOURO", value: "touro" },
    { label: "TERNEIRA", value: "terneira" },
    { label: "NOVILHA", value: "novilha" },
    { label: "VACA", value: "vaca" },
    { label: "VACA INVERNAR", value: "vaca_invernar" },
  ],
  BREEDS: [
    { label: "ANGUS (ABERDEEN)", value: "aberdeen_angus" },
    { label: "ANGUS (RED)", value: "red_angus" },
    { label: "BRAFORD", value: "braford" },
    { label: "BRANGUS", value: "brangus" },
    { label: "BRITÂNICOS", value: "britanicos" },
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
    { label: "TABAPUÃ", value: "tabapua" },
    { label: "ZEBU", value: "zebu" },
  ],
  ANNOUNCEMENT: {
    category: [
      { name: "novilho", quantity: 10, size: 0 },
      { name: "novilha", quantity: 5, size: 1 },
    ],
    breed: [
      { name: "devon", quantity: 10, size: 0 },
      { name: "nelore", quantity: 5, size: 1 },
    ],
    ageRange: "5Y-7Y",
    weight: "150",
    location: {
      city: "Erechim",
      state: "RS",
    },
    observations: [
      "um dos novilhos tem uma condição de nascença que o faz mancar",
      "de resto, tudo normal",
    ],
    createdDate: "2020-04-21T21:49:38.734+00:00",
    endDate: "2020-04-24T21:49:38.734+00:00",
    initialPrice: 0,
    currentPrice: "7.50",
  },
  BRAZILIAN_STATES: [
    { label: "AC", value: "AC" },
    { label: "AL", value: "AL" },
    { label: "AP", value: "AP" },
    { label: "AM", value: "AM" },
    { label: "BA", value: "BA" },
    { label: "CE", value: "CE" },
    { label: "DF", value: "DF" },
    { label: "ES", value: "ES" },
    { label: "GO", value: "GO" },
    { label: "MA", value: "MA" },
    { label: "MT", value: "MT" },
    { label: "MS", value: "MS" },
    { label: "MG", value: "MG" },
    { label: "PA", value: "PA" },
    { label: "PB", value: "PB" },
    { label: "PR", value: "PR" },
    { label: "PE", value: "PE" },
    { label: "PI", value: "PI" },
    { label: "RJ", value: "RJ" },
    { label: "RN", value: "RN" },
    { label: "RS", value: "RS" },
    { label: "RO", value: "RO" },
    { label: "RR", value: "RR" },
    { label: "SC", value: "SC" },
    { label: "SP", value: "SP" },
    { label: "SE", value: "SE" },
    { label: "TO", value: "TO" },
  ],
};

export default collections;
