import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { useMainQuantity } from 'context/AnnouncementCreation/MainQuantity';
import { Chip } from 'react-native-paper';

import { Input } from './styles';
import { colors } from 'general';

export default function MainQuantityInput() {
  const { mainQuantity, setMainQuantity } = useMainQuantity();
  const [insert, toggleInsert] = useState(false);
  return (
    <View style={{ alignItems: 'center', margin: 24 }}>
      {insert || mainQuantity ? (
        <Input
          value={mainQuantity}
          onChangeText={(text) => setMainQuantity(text.replace(/\D/g, ''))}
          placeholder={'   '}
          maxLength={3}
          keyboardType={'numeric'}
        />
      ) : (
        <TouchableOpacity
          onPress={() => [toggleInsert(true), setMainQuantity('1')]}
        >
          <Chip
            style={[
              custom.chip,
              mainQuantity ? { backgroundColor: colors.ruralGreen } : null,
            ]}
            textStyle={{ fontSize: 16, color: colors.white }}
          >
            Quantidade
          </Chip>
        </TouchableOpacity>
      )}
    </View>
  );
}

const custom = StyleSheet.create({
  chip: {
    alignItems: 'center',
    backgroundColor: colors.noticeBlue,
  },
});
