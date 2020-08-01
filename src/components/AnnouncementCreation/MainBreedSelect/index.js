import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import AutoComplete from 'react-native-autocomplete-modal';

import { useMainBreed } from 'context/AnnouncementCreation/MainBreed';

import { colors } from 'general';

export default function MainBreedSelect() {
  const { mainBreed, setMainBreed } = useMainBreed();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFont() {
      await Expo.Font.loadAsync({
        //this is needed, somehow, for the AutoComplete modal
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      });
      setLoading(false);
    }
    loadFont();
  }, []);

  return (
    <>
      {loading ? (
        <ActivityIndicator size="large" color={colors.ruralGreen} />
      ) : (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <AutoComplete
            style={{
              borderRadius: 50,
              backgroundColor: mainBreed
                ? colors.ruralGreen
                : colors.noticeBlue,
              paddingRight: 16,
              paddingLeft: 16,
              paddingBottom: 6,
              paddingTop: 6,
            }}
            onSelect={(data) => setMainBreed(data.value)}
            dataSource={BREEDS}
            textLabel={mainBreed ? mainBreed : 'Selecione uma Raça'}
            searchPlaceholder="Buscar"
            cancelText="Fechar"
            textColor="white"
            searchField="label"
          />
        </View>
      )}
    </>
  );
}

const BREEDS = [
  { label: 'Selecione uma Raça', value: '' },
  { label: 'ANGUS (ABERDEEN)', value: 'ANGUS (ABERDEEN)' },
  { label: 'ANGUS (RED)', value: 'ANGUS (RED)' },
  { label: 'BRAFORD', value: 'BRAFORD' },
  { label: 'BRANGUS', value: 'BRANGUS' },
  { label: 'BRITÂNICOS', value: 'BRITÂNICOS' },
  { label: 'CANCHIN', value: 'CANCHIN' },
  { label: 'CHAROLES', value: 'CHAROLES' },
  { label: 'CRUZAS EUROPEIAS', value: 'CRUZAS EUROPEIAS' },
  { label: 'CRUZAS LEITEIRAS', value: 'CRUZAS LEITEIRAS' },
  { label: 'CRUZAS ZEBU', value: 'CRUZAS ZEBU' },
  { label: 'DEVON', value: 'DEVON' },
  { label: 'EUROPEUS', value: 'EUROPEUS' },
  { label: 'HEREFORD', value: 'HEREFORD' },
  { label: 'LIMOUSIN', value: 'LIMOUSIN' },
  { label: 'NELORE', value: 'NELORE' },
  { label: 'SIMENTAL', value: 'SIMENTAL' },
  { label: 'TABAPUÃ', value: 'TABAPUÃ' },
  { label: 'ZEBU', value: 'ZEBU' },
];
