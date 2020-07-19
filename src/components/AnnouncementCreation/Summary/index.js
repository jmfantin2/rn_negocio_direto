import React from 'react';

import { Container, Label, Description } from './styles';

import { useVideo } from 'context/AnnouncementCreation/Video';
import { useImage } from 'context/AnnouncementCreation/Image';

import { useDynamic } from 'context/AnnouncementCreation/Dynamic';
import { useDaysActive } from 'context/AnnouncementCreation/DaysActive';

import { useMainCategory } from 'context/AnnouncementCreation/MainCategory';
import { useMainBreed } from 'context/AnnouncementCreation/MainBreed';
import { useMainQuantity } from 'context/AnnouncementCreation/MainQuantity';
import { useMainObservations } from 'context/AnnouncementCreation/MainObservations';

import { useOtherCategory } from 'context/AnnouncementCreation/OtherCategory';
import { useOtherBreed } from 'context/AnnouncementCreation/OtherBreed';
import { useOtherQuantity } from 'context/AnnouncementCreation/OtherQuantity';
import { useOtherObservations } from 'context/AnnouncementCreation/OtherObservations';

import { useLocation } from 'context/AnnouncementCreation/Location';
import { useAverageWeight } from 'context/AnnouncementCreation/AverageWeight';
import { usePrice } from 'context/AnnouncementCreation/Price';

export default function Summary() {
  const { video } = useVideo(); //READ
  const { image } = useImage();

  const { dynamic } = useDynamic(); //READ
  const { daysActive } = useDaysActive(); //READ

  const { mainCategory } = useMainCategory(); //READ
  const { mainBreed } = useMainBreed(); //READ
  const { mainQuantity } = useMainQuantity(); //READ
  const { mainObservations } = useMainObservations(); //READ

  const { otherCategory } = useOtherCategory(); //READ
  const { otherBreed } = useOtherBreed(); //READ
  const { otherQuantity } = useOtherQuantity(); //READ
  const { otherObservations } = useOtherObservations(); //READ

  const { state, city } = useLocation(); //READ
  const { averageWeight } = useAverageWeight(); //READ
  const { price } = usePrice(); //READ

  return (
    <Container>
      <Label>Modalidade</Label>
      <Description>Preço{dynamic ? ' Dinâmico' : ' Fixo'}</Description>
      <Description>{daysActive} dias</Description>
      <Label>Mídias{video && image ? '' : ' ❓'}</Label>
      <Description>Vídeo{video ? ' enviado' : ' não enviado'}</Description>
      <Description>Imagem{image ? ' enviada' : ' não enviada'}</Description>
      {mainQuantity && mainCategory && mainBreed && mainObservations ? (
        <>
          <Label>Categoria Principal</Label>
          <Description>
            {mainQuantity +
              ' x ' +
              mainCategory.toUpperCase() +
              ' (' +
              mainBreed
                .toUpperCase()
                .replace('CRUZAS', 'CZ')
                .replace('ABERDEEN', 'ABD')
                .replace('_', ' ') +
              ')\n' +
              '"' +
              mainObservations +
              '"'}
          </Description>
        </>
      ) : (
        <>
          <Label>Categoria Principal ❓</Label>
          <Description>Informações faltantes</Description>
        </>
      )}
      <Label>Categoria Secundária</Label>
      {otherQuantity && otherCategory && otherBreed && otherObservations ? (
        <>
          <Description>
            {otherQuantity +
              ' x ' +
              otherCategory.toUpperCase() +
              ' (' +
              otherBreed
                .toUpperCase()
                .replace('CRUZAS', 'CZ')
                .replace('ABERDEEN', 'ABD')
                .replace('_', ' ') +
              ')\n' +
              '"' +
              otherObservations +
              '"'}
          </Description>
        </>
      ) : (
        <Description>
          Categoria não informada{'\n'}ou informações faltantes
        </Description>
      )}
      {averageWeight && (dynamic || price) && state && city ? (
        <>
          <Label>Detalhes da venda</Label>
          <Description>
            {'Em ' +
              city +
              ' (' +
              state +
              ')\n' +
              'Peso médio ' +
              averageWeight +
              ' kg\n' +
              (price ? price + ' reais por kg' : '')}
          </Description>
        </>
      ) : (
        <>
          <Label>Detalhes da venda ❓</Label>
          <Description>Informações faltantes</Description>
        </>
      )}
    </Container>
  );
}
