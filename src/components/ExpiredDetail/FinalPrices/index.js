import React, { useState } from 'react';
import { Text, View, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { colors } from 'general';
import { Feather } from '@expo/vector-icons';
import currencyMask from '../../../helpers/currencyMask';

const FinalPrices = ({ price }) => {
  if (price !== undefined) {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={custom.title}>Maior proposta</Text>
        <Text style={custom.price}>{currencyMask(price)}</Text>
      </View>
    );
  } else {
    return null;
  }
};

const custom = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: colors.noticeBlue,
    marginBottom: 8,
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: colors.noticeBlue,
  },
  buttonTxt: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
  actionButton: {
    borderRadius: 50,
    borderWidth: 2,
    borderColor: colors.noticeBlue,
  },
  input: {
    marginRight: 8,
    marginLeft: 8,
    width: 180,
    backgroundColor: colors.white,
  },
});

export default FinalPrices;

/*
  height: 40px;
  padding: 0px 10px 0px 10px;
  background-color: ${colors.white};
  border-radius: 50px;
*/
