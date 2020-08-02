import React, { useState, useEffect } from 'react';
import RNPickerSelect from 'react-native-picker-select';

import { useOtherBreed } from 'context/AnnouncementCreation/OtherBreed';

import { colors } from 'general';
import { Label, SelectBG, pickerStyle } from './styles';

export default function OtherBreedSelect() {
  const { otherBreed, setOtherBreed } = useOtherBreed(); // READ / WRITE

  return (
    <>
      <Label>Raça</Label>
      <SelectBG>
        <RNPickerSelect
          placeholder={{
            label: '───',
            value: null,
            color: colors.light,
          }}
          value={otherBreed}
          style={pickerStyle}
          useNativeAndroidPickerStyle={false}
          onValueChange={(value) => setOtherBreed(value)}
          items={BREEDS}
        />
      </SelectBG>
    </>
  );
}

const BREEDS = [
  { label: 'ANGUS (ABERDEEN)', value: 'aberdeen_angus' },
  { label: 'ANGUS (RED)', value: 'red_angus' },
  { label: 'BRAFORD', value: 'braford' },
  { label: 'BRANGUS', value: 'brangus' },
  { label: 'BRITÂNICOS', value: 'britanicos' },
  { label: 'CANCHIN', value: 'canchin' },
  { label: 'CHAROLES', value: 'charoles' },
  { label: 'CRUZAS EUROPEIAS', value: 'cruzas_europeias' },
  { label: 'CRUZAS LEITEIRAS', value: 'cruzas_leiteiras' },
  { label: 'CRUZAS ZEBU', value: 'cruzas_zebu' },
  { label: 'DEVON', value: 'devon' },
  { label: 'EUROPEUS', value: 'europeus' },
  { label: 'HEREFORD', value: 'hereford' },
  { label: 'LIMOUSIN', value: 'limousin' },
  { label: 'NELORE', value: 'nelore' },
  { label: 'SIMENTAL', value: 'simental' },
  { label: 'TABAPUÃ', value: 'tabapua' },
  { label: 'ZEBU', value: 'zebu' },
];
