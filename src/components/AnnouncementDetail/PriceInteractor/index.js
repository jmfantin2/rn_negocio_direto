import React, { useState } from 'react';
import { Text, View, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { colors } from 'general';
import { Feather } from '@expo/vector-icons';

import api from '../../../services/api';
import currencyMask from '../../../helpers/currencyMask';

const PriceInteractor = ({ id, price }) => {
  const [inputON, toggleInput] = useState(false);
  const [bid, setBid] = useState(price);

  async function makeBid() {
    if (bid <= price) {
      toggleInput(false);

      return Alert.alert(
        'Erro',
        `Para realizar uma nova proposta, é necessário cobrir a proposta atual de ${currencyMask(
          price
        )}.`
      );
    }

    console.log(
      `https://taskforce-announcement-dev.herokuapp.com/api/v1/announcements/${id}/offer`
    );

    console.log({
      offer: Number(bid),
    });

    try {
      const response = await api.put(
        `https://taskforce-announcement-dev.herokuapp.com/api/v1/announcements/${id}/offer`,
        {
          offer: Number(bid),
        }
      );

      console.log(response.data);

      Alert.alert('Obrigado', `Proposta realizada com sucesso!`);
    } catch (error) {
      console.log(error.message);
      console.log(error.response.data.message);
    }

    //api POST
    toggleInput(false);
  }

  if (price !== undefined) {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={custom.title}>Proposta Atual</Text>
        <Text style={custom.price}>{currencyMask(price)}</Text>
        <View
          style={{
            height: 50,
            justifyContent: 'center',
          }}
        >
          {inputON ? (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <TouchableOpacity onPress={() => toggleInput(false)}>
                <View style={custom.actionButton}>
                  <Feather
                    name="arrow-left"
                    size={32}
                    color={colors.noticeBlue}
                  />
                </View>
              </TouchableOpacity>
              <TextInput
                keyboardType="decimal-pad"
                style={custom.input}
                mode="outlined"
                label="Sua proposta"
                value={String(bid)}
                onChangeText={(text) => setBid(text)}
              />
              <TouchableOpacity onPress={makeBid}>
                <View style={custom.actionButton}>
                  <Feather
                    name="arrow-up-right"
                    size={32}
                    color={colors.noticeBlue}
                  />
                </View>
              </TouchableOpacity>
            </View>
          ) : (
            <Button
              style={custom.button}
              mode="contained"
              onPress={() => toggleInput(true)}
            >
              REALIZAR PROPOSTA
            </Button>
          )}
        </View>
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
    marginBottom: 16,
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

export default PriceInteractor;

/*
  height: 40px;
  padding: 0px 10px 0px 10px;
  background-color: ${colors.white};
  border-radius: 50px;
*/
