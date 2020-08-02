import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { useMainAgeRange } from 'context/AnnouncementCreation/MainAgeRange';
import { Chip } from 'react-native-paper';

import { Label, Input } from './styles';
import { colors } from 'general';

export default function MainAgeRangeSelector() {
  const { youngest, setYoungest, oldest, setOldest } = useMainAgeRange();
  const [yUnit, setYUnit] = useState('mês(es)');
  const [oUnit, setOUnit] = useState('ano(s)');

  function toggleUnit(ageGroup) {
    if (ageGroup === 'young') {
      if (yUnit === 'mês(es)') {
        setYUnit('ano(s)');
        setYoungest({ num: youngest.num, unit: 'Y' });
      } else {
        setYUnit('mês(es)');
        setYoungest({ num: youngest.num, unit: 'M' });
      }
    } else {
      if (oUnit === 'mês(es)') {
        setOUnit('ano(s)');
        setOldest({ num: oldest.num, unit: 'Y' });
      } else {
        setOUnit('mês(es)');
        setOldest({ num: oldest.num, unit: 'M' });
      }
    }
  }

  return (
    <>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          margin: 4,
        }}
      >
        <Label>Mais jovem: </Label>
        <Input
          value={youngest.num}
          onChangeText={(text) =>
            setYoungest({ num: text.replace(/\D/g, ''), unit: youngest.unit })
          }
          placeholder={'   '}
          maxLength={2}
          keyboardType={'numeric'}
          style={youngest.num ? { backgroundColor: colors.ruralGreen } : null}
        />

        <TouchableOpacity onPress={() => toggleUnit('young')}>
          <Chip
            style={custom.chip}
            textStyle={{ fontSize: 16, color: colors.white }}
          >
            {yUnit}
          </Chip>
        </TouchableOpacity>
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          margin: 4,
        }}
      >
        <Label>Mais velho: </Label>
        <Input
          value={oldest.num}
          onChangeText={(text) =>
            setOldest({ num: text.replace(/\D/g, ''), unit: oldest.unit })
          }
          placeholder={'   '}
          maxLength={2}
          keyboardType={'numeric'}
          style={oldest.num ? { backgroundColor: colors.ruralGreen } : null}
        />

        <TouchableOpacity onPress={() => toggleUnit('old')}>
          <Chip
            style={custom.chip}
            textStyle={{ fontSize: 16, color: colors.white }}
          >
            {oUnit}
          </Chip>
        </TouchableOpacity>
      </View>
      {/*
      <Text>
        y num: {youngest.num} y unit: {youngest.unit} o num: {oldest.num} o
        unit: {oldest.unit}
      </Text>
      */}
    </>
  );
}

const custom = StyleSheet.create({
  chip: {
    alignItems: 'center',
    backgroundColor: colors.ruralGreen,
  },
});
