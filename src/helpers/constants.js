// Não mexa a menos que saiba exatamente o que está fazendo :)
export const CATEGORIES = [
  { label: "NOVILHO", value: "novilho" },
  { label: "TERNEIRO", value: "terneiro" },
  { label: "TOURO", value: "touro" },
  { label: "TERNEIRA", value: "terneira" },
  { label: "NOVILHA", value: "novilha" },
  { label: "VACA", value: "vaca" },
  { label: "VACA INVERNAR", value: "vaca_invernar" },
];

export const VARIANTS = {
  novilho: [{ case: "castrados" }],
  terneiro: [{ case: "castrados" }],
  touro: [{ case: "com_registro" }],
  terneira: [],
  novilha: [{ case: "prenhes" }],
  vaca: [{ case: "prenhes" }, { case: "com_cria" }],
  vaca_invernar: [],
};

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
