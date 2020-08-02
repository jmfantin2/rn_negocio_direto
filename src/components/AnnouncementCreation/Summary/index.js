import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Chip } from 'react-native-paper';
import { colors } from 'general';

import { useVideo } from 'context/AnnouncementCreation/Video';
import { useImage } from 'context/AnnouncementCreation/Image';
import { useDynamic } from 'context/AnnouncementCreation/Dynamic';
import { useDaysActive } from 'context/AnnouncementCreation/DaysActive';
import { useMainCategory } from 'context/AnnouncementCreation/MainCategory';
import { useMainBreed } from 'context/AnnouncementCreation/MainBreed';
import { useMainQuantity } from 'context/AnnouncementCreation/MainQuantity';
import { useMainAgeRange } from 'context/AnnouncementCreation/MainAgeRange';
import { useMainWeight } from 'context/AnnouncementCreation/MainWeight';
import { useMainObservations } from 'context/AnnouncementCreation/MainObservations';
import { useOtherCategory } from 'context/AnnouncementCreation/OtherCategory';
import { useOtherBreed } from 'context/AnnouncementCreation/OtherBreed';
import { useOtherQuantity } from 'context/AnnouncementCreation/OtherQuantity';
import { useOtherAgeRange } from 'context/AnnouncementCreation/OtherAgeRange';
import { useOtherWeight } from 'context/AnnouncementCreation/OtherWeight';
import { useOtherObservations } from 'context/AnnouncementCreation/OtherObservations';
import { useLocation } from 'context/AnnouncementCreation/Location';
import { usePrice } from 'context/AnnouncementCreation/Price';

export default function Summary() {
  const { video } = useVideo();
  const { image } = useImage();
  const { dynamic } = useDynamic();
  const { daysActive } = useDaysActive();
  const { mainCategory } = useMainCategory();
  const { mainBreed } = useMainBreed();
  const { mainQuantity } = useMainQuantity();
  const { youngest, oldest } = useMainAgeRange();
  const { mainWeight } = useMainWeight();
  const { mainObservations } = useMainObservations();
  const { otherCategory } = useOtherCategory();
  const { otherBreed } = useOtherBreed();
  const { otherQuantity } = useOtherQuantity();
  const { youngest2, oldest2 } = useOtherAgeRange();
  const { otherWeight } = useOtherWeight();
  const { otherObservations } = useOtherObservations();
  const { uf, city } = useLocation();
  const { price } = usePrice();
  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
    >
      <Chip
        style={video ? custom.ready : custom.pending}
        textStyle={custom.txt}
      >
        Vídeo
      </Chip>
      <Chip
        style={image ? custom.ready : custom.pending}
        textStyle={custom.txt}
      >
        Imagem
      </Chip>
      <Chip style={custom.ready} textStyle={custom.txt}>
        Tipo{dynamic ? ' Dinâmico' : ' Fixo'}
      </Chip>
      <Chip style={custom.ready} textStyle={custom.txt}>
        {daysActive} dias
      </Chip>
      <Chip
        style={mainCategory ? custom.ready : custom.pending}
        textStyle={custom.txt}
      >
        {mainCategory ? mainCategory : 'Categoria A'}
      </Chip>
      <Chip
        style={mainBreed ? custom.ready : custom.pending}
        textStyle={custom.txt}
      >
        {mainBreed ? mainBreed : 'Raça A'}
      </Chip>
      <Chip
        style={mainQuantity ? custom.ready : custom.pending}
        textStyle={custom.txt}
      >
        {mainQuantity ? 'Qtd A ' + mainQuantity : 'Quantidade A'}
      </Chip>
      <Chip
        style={youngest.num && oldest.num ? custom.ready : custom.pending}
        textStyle={custom.txt}
      >
        Idades A
      </Chip>
      <Chip
        style={mainWeight ? custom.ready : custom.pending}
        textStyle={custom.txt}
      >
        Peso Médio A {mainWeight ? mainWeight + 'kg' : null}
      </Chip>
      <Chip
        style={mainObservations ? custom.ready : custom.pending}
        textStyle={custom.txt}
      >
        Observações A
      </Chip>
      {dynamic ||
      !mainCategory ||
      mainCategory === 'TOURO' ||
      mainCategory === 'VACA INVERNAR' ? null : (
        <>
          <Chip
            style={otherCategory ? custom.ready : custom.optional}
            textStyle={custom.txt}
          >
            {otherCategory ? otherCategory : 'Categoria B'}
          </Chip>
          <Chip
            style={otherBreed ? custom.ready : custom.optional}
            textStyle={custom.txt}
          >
            {otherBreed ? otherBreed : 'Raça B'}
          </Chip>
          <Chip
            style={otherQuantity ? custom.ready : custom.optional}
            textStyle={custom.txt}
          >
            {otherQuantity ? 'Qtd B ' + otherQuantity : 'Quantidade B'}
          </Chip>
          <Chip
            style={
              youngest2.num && oldest2.num ? custom.ready : custom.optional
            }
            textStyle={custom.txt}
          >
            Idades B
          </Chip>
          <Chip
            style={otherWeight ? custom.ready : custom.optional}
            textStyle={custom.txt}
          >
            Peso Médio B {otherWeight ? otherWeight + 'kg' : null}
          </Chip>
          <Chip
            style={otherObservations ? custom.ready : custom.optional}
            textStyle={custom.txt}
          >
            Observações B
          </Chip>
        </>
      )}
      <Chip style={city ? custom.ready : custom.pending} textStyle={custom.txt}>
        {city ? city : 'Cidade'}
      </Chip>
      <Chip style={uf ? custom.ready : custom.pending} textStyle={custom.txt}>
        {uf ? uf : 'Estado'}
      </Chip>
      {!dynamic ? (
        <Chip
          style={price ? custom.ready : custom.pending}
          textStyle={custom.txt}
        >
          {price ? 'Preço/kg ' + price + ' R$' : 'Preço'}
        </Chip>
      ) : null}
    </View>
  );
}
const custom = StyleSheet.create({
  txt: {
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.white,
  },
  ready: {
    backgroundColor: colors.ruralGreen,
    margin: 4,
  },
  pending: {
    backgroundColor: colors.meatRed,
    margin: 4,
  },
  optional: {
    backgroundColor: colors.oceanGreen,
    margin: 4,
  },
});
