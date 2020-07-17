export function getMatchedCategories(value) {
  let matchedCategories = [];
  switch (value) {
    case 'terneiro':
      matchedCategories = [
        { label: 'NOVILHO', value: 'novilho' },
        { label: 'TERNEIRA', value: 'terneira' },
      ];
      break;
    case 'novilho':
      matchedCategories = [
        { label: 'TERNEIRO', value: 'terneiro' },
        { label: 'NOVILHA', value: 'novilha' },
        { label: 'VACA', value: 'vaca' },
      ];
      break;
    case 'terneira':
      matchedCategories = [
        { label: 'NOVILHA', value: 'novilha' },
        { label: 'TERNEIRO', value: 'terneiro' },
      ];
      break;
    case 'novilha':
      matchedCategories = [
        { label: 'TERNEIRA', value: 'terneira' },
        { label: 'NOVILHO', value: 'novilho' },
        { label: 'VACA', value: 'vaca' },
      ];
      break;
    case 'vaca':
      matchedCategories = [{ label: 'NOVILHA', value: 'novilha' }];
      break;
    default:
      // "touro", "vaca_invernar", null
      break;
  }
  // console.log("Matched categories for", value, ":", matchedCategories);
  return matchedCategories;
}

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
    processed = processed
      .replace('CRUZAS', 'CZ')
      .replace('_', ' ')
      .replace('ABERDEEN', 'ABD');
  }
  return processed;
}
