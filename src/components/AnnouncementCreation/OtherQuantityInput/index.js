import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { useOtherQuantity } from 'context/AnnouncementCreation/OtherQuantity';
import { Chip } from 'react-native-paper';

import { Input } from './styles';
import { colors } from 'general';

export default function OtherQuantityInput() {
  const { otherQuantity, setOtherQuantity } = useOtherQuantity();
  const [insert, toggleInsert] = useState(false);
  return (
    <View style={{ alignItems: 'center', margin: 24 }}>
      {insert || otherQuantity ? (
        <Input
          value={otherQuantity}
          onChangeText={(text) => setOtherQuantity(text.replace(/\D/g, ''))}
          placeholder={'   '}
          maxLength={3}
          keyboardType={'numeric'}
        />
      ) : (
        <TouchableOpacity
          onPress={() => [toggleInsert(true), setOtherQuantity('1')]}
        >
          <Chip
            style={[
              custom.chip,
              otherQuantity ? { backgroundColor: colors.ruralGreen } : null,
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
    backgroundColor: colors.oceanGreen,
  },
});
