import React from 'react';
import { Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from 'general';

const StepIndicator = ({ status, highlight, label }) => {
  let endColor = colors.darkCyan;
  if (status === 'active') {
    endColor = colors.regular;
  }
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <MaterialCommunityIcons
          name="arrow-up-bold-hexagon-outline"
          size={50}
          color={highlight}
        />
        <Text style={{ fontSize: 48, color: highlight }}>──</Text>
        <Text style={{ fontSize: 48, color: endColor }}>──</Text>
        <MaterialCommunityIcons
          name="hexagon-slice-6"
          size={50}
          color={endColor}
        />
      </View>
      <Text
        style={{
          color: colors.noticeBlue,
          fontSize: 16,
          fontWeight: 'bold',
          marginBottom: 16,
        }}
      >
        {label}
      </Text>
    </>
  );
};

export default StepIndicator;
