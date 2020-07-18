import React from 'react';
import { Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from 'general';

const LocationHeader = ({ city, uf }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
      }}
    >
      <MaterialIcons name="location-on" size={36} color={colors.meatRed} />
      <Text style={{ fontSize: 20, fontWeight: 'bold', color: colors.meatRed }}>
        {city} ({uf})
      </Text>
    </View>
  );
};

export default LocationHeader;
