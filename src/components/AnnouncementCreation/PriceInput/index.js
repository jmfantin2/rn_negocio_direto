import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useDynamic } from 'context/AnnouncementCreation/Dynamic';
import { usePrice } from 'context/AnnouncementCreation/Price';
import { colors } from 'general';
import { Container, Label, Input } from './styles';

export default function PriceInput() {
  const { dynamic } = useDynamic(); // READ
  const { price, setPrice } = usePrice();

  useEffect(() => {
    if (dynamic) {
      setPrice('');
    }
  }, [dynamic]);

  return (
    <>
      {!dynamic ? (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 16,
            justifyContent: 'center',
          }}
        >
          <Label>Preço por kg: </Label>
          <Input
            value={price}
            onChangeText={(text) => setPrice(text.replace(/\D/g, ''))}
            placeholder={'   '}
            maxLength={3}
            keyboardType={'numeric'}
            style={price ? { backgroundColor: colors.ruralGreen } : null}
          />
        </View>
      ) : null}
    </>
  );
}
