import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import AutoComplete from 'react-native-autocomplete-modal';

import { colors } from 'general';

import {
  BRAZILIAN_STATES,
  getStateCities,
} from 'helpers/LocationUtility/constants';

import { useLocation } from 'context/AnnouncementCreation/Location';

export default function LocationSelects() {
  const { state, setState, city, setCity } = useLocation();
  const [cityOptions, setCityOptions] = useState([]);

  useEffect(() => {
    setCityOptions(getStateCities(state));
    setCity('');
  }, [state]);

  return (
    <>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <AutoComplete
          style={{
            borderRadius: 50,
            backgroundColor: state ? colors.ruralGreen : colors.meatRed,
            paddingRight: 16,
            paddingLeft: 16,
            paddingBottom: 6,
            paddingTop: 6,
          }}
          onSelect={(data) => setState(data.value)}
          dataSource={BRAZILIAN_STATES}
          textLabel={state ? state : 'Selecione um estado'}
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
