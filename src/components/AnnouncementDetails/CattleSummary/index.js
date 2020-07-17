import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button, Chip, Card, Paragraph, Title } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from 'general';

const CattleSummary = ({ ann }) => {
  return (
    <View>
      {ann.category ? (
        <View
          style={{
            flexDirection: 'row',
          }}
        >
          <Text>
            {ann.category[0].quantity} {ann.category[0].name}
          </Text>
          <Chip>{ann.breed[0].name}</Chip>
          {ann.category[1] ? (
            <>
              <Text>
                {ann.category[0].quantity} {ann.category[0].name}
              </Text>
              <Chip>{ann.breed[0].name}</Chip>
            </>
          ) : null}
        </View>
      ) : null}
    </View>
  );
};

const custom = StyleSheet.create({});

export default CattleSummary;
