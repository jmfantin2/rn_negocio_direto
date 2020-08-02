import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button, Chip, Card, Paragraph, Title } from 'react-native-paper';
import { colors } from 'general';
import { process, convertAge } from 'helpers/CattleUtility';

const CattleSummary = ({ ann }) => {
  if (ann.category !== undefined) {
    return (
      <View>
        <>
          <View style={custom.header}>
            <Text style={custom.title}>
              {ann.category[0].quantity}{' '}
              {process(
                ann.category[0].name,
                'category',
                ann.category[0].quantity
              )}
            </Text>
            <Chip textStyle={custom.chipTxt} style={custom.chip}>
              {process(ann.breed[0].name, 'breed', 0)}
            </Chip>
          </View>
          <View style={custom.info}>
            <Text style={custom.obs}>"{ann.observations[0]}"</Text>
            <Text style={custom.bold}>
              {ann.weight[0]}kg na média, de {convertAge(ann.ageRange[0])}
            </Text>
          </View>
        </>
        {ann.category.length === 2 ? (
          <>
            <View style={custom.header}>
              <Text style={custom.title}>
                {ann.category[1].quantity}{' '}
                {process(
                  ann.category[1].name,
                  'category',
                  ann.category[1].quantity
                )}
              </Text>
              <Chip textStyle={custom.chipTxt} style={custom.chip}>
                {process(ann.breed[1].name, 'breed', 0)}
              </Chip>
            </View>
            <View style={custom.info}>
              <Text style={custom.obs}>"{ann.observations[1]}"</Text>
              <Text style={custom.bold}>
                {ann.weight[1]}kg na média, de {convertAge(ann.ageRange[1])}
              </Text>
            </View>
          </>
        ) : null}
      </View>
    );
  } else {
    return null;
  }
};

const custom = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: colors.darkCyan,
  },
  chip: {
    backgroundColor: colors.darkCyan,
  },
  chipTxt: {
    color: colors.white,
    fontSize: 15,
  },
  obs: {
    fontStyle: 'italic',
    marginBottom: 8,
    fontSize: 14,
  },
  bold: {
    fontWeight: 'bold',
    marginBottom: 8,
    fontSize: 14,
  },
});

export default CattleSummary;
