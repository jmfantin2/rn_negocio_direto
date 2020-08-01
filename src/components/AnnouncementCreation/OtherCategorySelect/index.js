import React, { useEffect } from 'react';
import { View } from 'react-native';
import AutoComplete from 'react-native-autocomplete-modal';

import { useMainCategory } from 'context/AnnouncementCreation/MainCategory';
import { useDynamic } from 'context/AnnouncementCreation/Dynamic';
import { useOtherCategory } from 'context/AnnouncementCreation/OtherCategory';

import { colors } from 'general';

export default function OtherCategorySelect() {
  const { mainCategory } = useMainCategory(); // READ
  const { dynamic } = useDynamic(); // READ
  const { otherCategory, setOtherCategory } = useOtherCategory(); // READ

  // Triggered everytime mainCategory changes
  useEffect(() => {
    if (
      dynamic ||
      mainCategory === 'TOURO' ||
      mainCategory === 'VACA INVERNAR' ||
      mainCategory === null
    ) {
      setOtherCategory(null);
    }
  }, [mainCategory, dynamic]);

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <AutoComplete
        style={{
          borderRadius: 50,
          backgroundColor: otherCategory
            ? colors.ruralGreen
            : colors.noticeBlue,
          paddingRight: 16,
          paddingLeft: 16,
          paddingBottom: 6,
          paddingTop: 6,
        }}
        onSelect={(data) => setOtherCategory(data.value)}
        dataSource={getMatchedCategories(mainCategory)}
        textLabel={otherCategory ? otherCategory : 'Categoria Adicional?'}
        searchPlaceholder="Buscar"
        cancelText="Fechar"
        textColor="white"
        searchField="label"
      />
    </View>
  );
}

function getMatchedCategories(value) {
  let matchedCategories = [];
  switch (value.toLowerCase()) {
    case 'terneiro':
      matchedCategories = [
        { label: 'Selecione uma Categoria', value: '' },
        { label: 'NOVILHO', value: 'NOVILHO' },
        { label: 'TERNEIRA', value: 'TERNEIRA' },
      ];
      break;
    case 'novilho':
      matchedCategories = [
        { label: 'Selecione uma Categoria', value: '' },
        { label: 'TERNEIRO', value: 'TERNEIRO' },
        { label: 'NOVILHA', value: 'NOVILHA' },
        { label: 'VACA', value: 'VACA' },
      ];
      break;
    case 'terneira':
      matchedCategories = [
        { label: 'Selecione uma Categoria', value: '' },
        { label: 'NOVILHA', value: 'NOVILHA' },
        { label: 'TERNEIRO', value: 'TERNEIRO' },
      ];
      break;
    case 'novilha':
      matchedCategories = [
        { label: 'Selecione uma Categoria', value: '' },
        { label: 'TERNEIRA', value: 'TERNEIRA' },
        { label: 'NOVILHO', value: 'NOVILHO' },
        { label: 'VACA', value: 'VACA' },
      ];
      break;
    case 'vaca':
      matchedCategories = [
        { label: 'Selecione uma Categoria', value: '' },
        { label: 'NOVILHA', value: 'NOVILHA' },
      ];
      break;
    default:
      // "touro", "vaca_invernar", null
      break;
  }
  // console.log("Matched categories for", value, ":", matchedCategories);
  return matchedCategories;
}
