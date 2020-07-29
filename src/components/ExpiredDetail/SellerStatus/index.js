import React, { useState } from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import { Button } from 'react-native-paper';

import { AntDesign } from '@expo/vector-icons';

import { colors } from 'general';

//status: 'ongoing' || 'waiting' || 'denied' || 'accepted'
//player: 'seller' || 'buyer'
const SellerStatus = ({ s, p }) => {
  //mock: visão seller, de waiting para accepted
  const [status, setStatus] = useState('waiting');
  const player = 'seller';
  const buyerInfo = { name: 'JM Fantin', phone: '(51) 994321079' };

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
      }}
    >
      {status === 'waiting' && player === 'seller' ? (
        <>
          <View style={{ flexDirection: 'row', marginBottom: 16 }}>
            <AntDesign name="closecircle" size={48} color={colors.meatRed} />
            <Button
              style={[custom.button, { backgroundColor: colors.meatRed }]}
              mode="contained"
              onPress={() => setStatus('denied')}
            >
              RECUSAR
            </Button>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <AntDesign name="checkcircle" size={48} color={colors.success} />
            <Button
              style={[custom.button, { backgroundColor: colors.success }]}
              mode="contained"
              onPress={() => setStatus('accepted')}
            >
              ACEITAR
            </Button>
          </View>
        </>
      ) : (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <AntDesign
            name={status === 'denied' ? 'closecircle' : 'checkcircle'}
            size={36}
            color={status === 'denied' ? colors.meatRed : colors.success}
          />
          <Text
            style={[
              custom.text,
              { color: status === 'denied' ? colors.meatRed : colors.success },
            ]}
          >
            O vendedor {status === 'denied' ? 'recusou' : 'aceitou'} a proposta
          </Text>
          {status === 'accepted' ? (
            <View style={custom.userContainer}>
              <Text style={custom.userInfo}>Entre em contato com</Text>
              <Text style={[custom.userInfo, { fontSize: 24 }]}>
                {buyerInfo.name}
              </Text>
              <Text style={custom.userInfo}>{buyerInfo.phone}</Text>
            </View>
          ) : null}
        </View>
      )}
    </View>
  );
};

const custom = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: colors.noticeBlue,
    marginBottom: 8,
  },
  text: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
  userContainer: {
    marginTop: 16,
    alignItems: 'center',
  },
  userInfo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.noticeBlue,
  },
  button: {
    backgroundColor: colors.noticeBlue,
    width: 150,
    justifyContent: 'center',
    marginLeft: 24,
  },
});

export default SellerStatus;
