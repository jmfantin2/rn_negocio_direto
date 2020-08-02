import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { useOtherAgeRange } from 'context/AnnouncementCreation/OtherAgeRange';
import { Chip } from 'react-native-paper';

import { Label, Input } from './styles';
import { colors } from 'general';

export default function OtherAgeRangeSelector() {
  const { youngest2, setYoungest2, oldest2, setOldest2 } = useOtherAgeRange();
  const [yUnit, setYUnit] = useState('mês(es)');
  const [oUnit, setOUnit] = useState('ano(s)');

  function toggleUnit(ageGroup) {
    if (ageGroup === 'young') {
      if (yUnit === 'mês(es)') {
        setYUnit('ano(s)');
        setYoungest2({ num: youngest2.num, unit: 'Y' });
      } else {
        setYUnit('mês(es)');
        setYoungest2({ num: youngest2.num, unit: 'M' });
      }
    } else {
      if (oUnit === 'mês(es)') {
        setOUnit('ano(s)');
        setOldest2({ num: oldest2.num, unit: 'Y' });
      } else {
        setOUnit('mês(es)');
        setOldest2({ num: oldest2.num, unit: 'M' });
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
          value={youngest2.num}
          onChangeText={(text) =>
            setYoungest2({ num: text.replace(/\D/g, ''), unit: youngest2.unit })
          }
          placeholder={'   '}
          maxLength={2}
          keyboardType={'numeric'}
          style={youngest2.num ? { backgroundColor: colors.ruralGreen } : null}
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
          value={oldest2.num}
          onChangeText={(text) =>
            setOldest2({ num: text.replace(/\D/g, ''), unit: oldest2.unit })
          }
          placeholder={'   '}
          maxLength={2}
          keyboardType={'numeric'}
          style={oldest2.num ? { backgroundColor: colors.ruralGreen } : null}
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
        y num: {youngest2.num} y unit: {youngest2.unit} o num: {oldest2.num} o
        unit: {oldest2.unit}
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
