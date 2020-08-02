import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import AutoComplete from 'react-native-autocomplete-modal';

import { colors } from 'general';

import {
  BRAZILIAN_STATES,
  getUFCities,
} from 'helpers/LocationUtility/constants';

import { useLocation } from 'context/AnnouncementCreation/Location';

export default function LocationSelects() {
  const { uf, setUF, city, setCity } = useLocation();
  const [cityOptions, setCityOptions] = useState([]);

  useEffect(() => {
    setCityOptions(getUFCities(uf));
  }, [uf]);

  return (
    <>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <AutoComplete
          style={{
            borderRadius: 50,
            backgroundColor: uf ? colors.ruralGreen : colors.meatRed,
            paddingRight: 16,
            paddingLeft: 16,
            paddingBottom: 6,
            paddingTop: 6,
          }}
          onSelect={(data) => setUF(data.value)}
          dataSource={BRAZILIAN_STATES}
          textLabel={uf ? uf : 'Selecione um estado'}
          searchPlaceholder="Buscar"
          cancelText="Fechar"
          textColor="white"
          searchField="label"
        />
        <AutoComplete
          style={{
            borderRadius: 50,
            backgroundColor: city ? colors.ruralGreen : colors.meatRed,
            paddingRight: 16,
            paddingLeft: 16,
            paddingBottom: 6,
            paddingTop: 6,
          }}
          onSelect={(data) => setCity(data.value)}
          dataSource={cityOptions}
          textLabel={city ? city : 'Selecione um município'}
          searchPlaceholder="Buscar"
          cancelText="Fechar"
          textColor="white"
          searchField="label"
        />
      </View>
    </>
  );
}
