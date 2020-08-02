import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { useMainWeight } from 'context/AnnouncementCreation/MainWeight';

import { Label, Input } from './styles';
import { colors } from 'general';

export default function MainWeightInput() {
  const { mainWeight, setMainWeight } = useMainWeight();
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
          value={mainWeight}
          onChangeText={(text) => setMainWeight(text.replace(/\D/g, ''))}
          placeholder={'   '}
          maxLength={3}
          keyboardType={'numeric'}
          style={mainWeight ? { backgroundColor: colors.ruralGreen } : null}
        />
      </View>
    </>
  );
}

const custom = StyleSheet.create({
  chip: {
    alignItems: 'center',
    backgroundColor: colors.noticeBlue,
  },
});
