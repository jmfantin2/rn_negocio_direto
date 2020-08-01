import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import AutoComplete from 'react-native-autocomplete-modal';

import { useMainCategory } from 'context/AnnouncementCreation/MainCategory';

import { colors, strings } from 'general';

export default function MainCategorySelect() {
  const { mainCategory, setMainCategory } = useMainCategory();
  const [loading, setLoading] = useState(true);

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <AutoComplete
        style={{
          borderRadius: 50,
          backgroundColor: mainCategory ? colors.ruralGreen : colors.noticeBlue,
          paddingRight: 16,
          paddingLeft: 16,
          paddingBottom: 6,
          paddingTop: 6,
        }}
        onSelect={(data) => setMainCategory(data.value)}
        dataSource={CATEGORIES}
        textLabel={mainCategory ? mainCategory : 'Selecione uma Categoria'}
        searchPlaceholder="Buscar"
        cancelText="Fechar"
        textColor="white"
        searchField="label"
      />
    </View>
  );
}

const custom = StyleSheet.create({
  chip: {},
});

const CATEGORIES = [
  { value: '', label: 'Selecione uma Categoria' },
  { value: 'TERNEIRO', label: 'TERNEIRO' },
  { value: 'NOVILHO', label: 'NOVILHO' },
  { value: 'TOURO', label: 'TOURO' },
  { value: 'TERNEIRA', label: 'TERNEIRA' },
  { value: 'NOVILHA', label: 'NOVILHA' },
  { value: 'VACA', label: 'VACA' },
  { value: 'VACA INVERNAR', label: 'VACA INVERNAR' },
];
