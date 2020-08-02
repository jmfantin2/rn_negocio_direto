import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { useOtherWeight } from 'context/AnnouncementCreation/OtherWeight';

import { Label, Input } from './styles';
import { colors } from 'general';

export default function OtherWeightInput() {
  const { otherWeight, setOtherWeight } = useOtherWeight();
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
        <Label>Peso médio (quilos): </Label>
        <Input
          value={otherWeight}
          onChangeText={(text) => setOtherWeight(text.replace(/\D/g, ''))}
          placeholder={'   '}
          maxLength={3}
          keyboardType={'numeric'}
          style={otherWeight ? { backgroundColor: colors.ruralGreen } : null}
        />
      </View>
    </>
  );
}

const custom = StyleSheet.create({
  chip: {
    alignItems: 'center',
    backgroundColor: colors.oceanGreen,
  },
});
