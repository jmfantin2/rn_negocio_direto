import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button, Chip, Card, Paragraph, Title } from 'react-native-paper';
import { colors } from 'general';
import { process } from 'helpers/CattleUtility';

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
              {ann.breed[0].name}
            </Chip>
          </View>
          <View style={custom.info}>
            <Text style={custom.obs}>"{ann.observations[0]}"</Text>
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
                {ann.breed[1].name}
              </Chip>
            </View>
            <View style={custom.info}>
              <Text style={custom.obs}>"{ann.observations[1]}"</Text>
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
  },
  chip: {
    backgroundColor: colors.denimBlue,
  },
  chipTxt: {
    color: colors.white,
    fontSize: 15,
  },
  obs: {
    fontStyle: 'italic',
    marginBottom: 8,
  },
});

const loremipsum =
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';

export default CattleSummary;
