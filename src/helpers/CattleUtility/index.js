export function getPossibleVariants(value) {
  let possibleVariants = [];
  switch (value) {
    case 'novilho':
      possibleVariants = [{ key: 0, case: 'castrados' }];
      break;
    case 'terneiro':
      possibleVariants = [{ key: 0, case: 'castrados' }];
      break;
    case 'touro':
      possibleVariants = [{ key: 0, case: 'com_registro' }];
      break;
    case 'novilha':
      possibleVariants = [{ key: 0, case: 'prenhes' }];
      break;
    case 'vaca':
      possibleVariants = [
        { key: 0, case: 'prenhes' },
        { key: 1, case: 'com_cria' },
      ];
      break;
    default:
      // "terneira", "vaca_invernar", null
      break;
  }
  // console.log("Possible variants for", value, ":", possibleVariants);
  return possibleVariants;
}

export function process(str, type, qtd) {
  let processed;
  if (type === 'category') {
    if (str === 'VACA_INVERNAR') {
      if (qtd > 1) {
        return 'vacas inv.';
      } else {
        return 'vaca inv.';
      }
    }
    processed = str.toLowerCase();
    if (qtd > 1) processed += 's';
  } else if (type === 'breed') {
    processed = str
      .replace('CRUZAS', 'CZ')
      .replace('_', ' ')
      .replace('ABERDEEN', 'ABD');
  }
  return processed;
}

export function prepare(term) {
  switch (term) {
    case 'VACA INVERNAR':
      return 'VACA_INVERNAR';
    case 'ANGUS (RED)':
      return 'RED_ANGUS';
    case 'ANGUS (ABERDEEN)':
      return 'ABERDEEN_ANGUS';
    case 'BRITÂNICOS':
      return 'BRITANICOS';
    case 'CRUZAS EUROPEIAS':
      return 'CRUZAS_EUROPEIAS';
    case 'CRUZAS LEITEIRAS':
      return 'CRUZAS_LEITEIRAS';
    case 'CRUZAS ZEBU':
      return 'CRUZAS_ZEBU';
    case 'TABAPUÃ':
      return 'TABAPUA';
    default:
      return term;
  }
}

export function convertAge(ageRange) {
  return ageRange
    .replace('M', ' mês(es)')
    .replace('Y', ' ano(s)')
    .replace('-', ' a ')
    .replace('Y', ' ano(s)')
    .replace('M', ' mês(es)');
  //replaceAll tava quebrando, e eu não tô com saco pra resolver da maneira bonita
}
