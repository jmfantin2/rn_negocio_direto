import React, { useState, useEffect } from 'react';
import {
  ToastAndroid,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import { withNavigation } from 'react-navigation';

import api from '../../../services/ann';

import { makeDates } from 'helpers/DateUtility';
import { prepare } from 'helpers/CattleUtility';

import { colors } from 'general';
import { Container, CenterContent, Label } from './styles';

import { AntDesign } from '@expo/vector-icons';

import { useVideo } from 'context/AnnouncementCreation/Video';
import { useImage } from 'context/AnnouncementCreation/Image';

import { useDynamic } from 'context/AnnouncementCreation/Dynamic';
import { useDaysActive } from 'context/AnnouncementCreation/DaysActive';

import { useMainCategory } from 'context/AnnouncementCreation/MainCategory';
import { useMainBreed } from 'context/AnnouncementCreation/MainBreed';
import { useMainQuantity } from 'context/AnnouncementCreation/MainQuantity';
import { useMainObservations } from 'context/AnnouncementCreation/MainObservations';
import { useMainAgeRange } from 'context/AnnouncementCreation/MainAgeRange';
import { useMainWeight } from 'context/AnnouncementCreation/MainWeight';

import { useOtherCategory } from 'context/AnnouncementCreation/OtherCategory';
import { useOtherBreed } from 'context/AnnouncementCreation/OtherBreed';
import { useOtherQuantity } from 'context/AnnouncementCreation/OtherQuantity';
import { useOtherObservations } from 'context/AnnouncementCreation/OtherObservations';
import { useOtherAgeRange } from 'context/AnnouncementCreation/OtherAgeRange';
import { useOtherWeight } from 'context/AnnouncementCreation/OtherWeight';

import { useLocation } from 'context/AnnouncementCreation/Location';
import { usePrice } from 'context/AnnouncementCreation/Price';

import { useStep } from 'context/AnnouncementCreation/Step';

const StepNavigator = (props) => {
  const { video } = useVideo(); //READ
  const { image } = useImage(); //READ

  const { dynamic } = useDynamic(); //READ
  const { daysActive } = useDaysActive(); //READ

  const { mainCategory } = useMainCategory(); //READ
  const { mainBreed } = useMainBreed(); //READ
  const { mainQuantity } = useMainQuantity(); //READ
  const { mainObservations } = useMainObservations(); //READ
  const { youngest, oldest } = useMainAgeRange(); //READ
  const { mainWeight } = useMainWeight(); //READ

  const { otherCategory } = useOtherCategory(); //READ
  const { otherBreed } = useOtherBreed(); //READ
  const { otherQuantity } = useOtherQuantity(); //READ
  const { otherObservations } = useOtherObservations(); //READ
  const { youngest2, oldest2 } = useOtherAgeRange(); //READ
  const { otherWeight } = useOtherWeight(); //READ

  const { uf, city } = useLocation(); //READ
  const { price } = usePrice(); //READ

  const { step, setStep } = useStep();
  const [loading, setLoading] = useState(false);
  const [submitAllowed, allowSubmit] = useState(false);

  useEffect(() => {
    if (
      video &&
      image &&
      mainCategory &&
      mainBreed &&
      mainQuantity &&
      mainObservations &&
      youngest.num &&
      oldest.num &&
      mainWeight &&
      uf &&
      city &&
      (dynamic || price)
    ) {
      allowSubmit(true);
    } else {
      allowSubmit(false);
    }
  });

  function handleSubmit() {
    if (submitAllowed) {
      let ann = {
        ageRange: [],
        animalsQuantity: 0,
        breed: [],
        category: [],
        // createdDate: 0,
        currentPrice: 0,
        endDate: 0,
        location: {
          city: '',
          state: '',
        },
        observations: [],
        picture: [],
        weight: [],
      };

      //JM-NOTE: vamos precisar de um cara assim (o video tem que ir antes)
      //await ann.picture.push({ id: video.id, originalUrl: video.originalUrl }).then(ann.picture.push({ id: image.id, originalUrl: image.originalUrl }));
      ann.picture.push({ id: image.id, originalUrl: image.originalUrl });

      ann.location = { city: city, state: uf };
      const dates = makeDates(daysActive);
      // ann.createdDate = dates.createdDate;
      ann.endDate = dates.endDate;
      price ? (ann.currentPrice = parseInt(price)) : null;

      ann.category.push({
        name: prepare(mainCategory),
        quantity: parseInt(mainQuantity),
      });
      ann.breed.push({
        name: prepare(mainBreed),
        quantity: parseInt(mainQuantity),
      });
      ann.observations.push(mainObservations);
      ann.animalsQuantity = parseInt(mainQuantity);
      ann.ageRange.push(
        youngest.num + youngest.unit + '-' + oldest.num + oldest.unit
      );
      ann.weight.push(mainWeight);

      if (
        otherCategory &&
        otherBreed &&
        otherQuantity &&
        otherObservations &&
        youngest2.num &&
        oldest2.num &&
        otherWeight
      ) {
        ann.category.push({
          name: prepare(otherCategory),
          quantity: parseInt(otherQuantity),
        });
        ann.breed.push({
          name: prepare(otherBreed),
          quantity: parseInt(otherQuantity),
        });
        ann.animalsQuantity += parseInt(otherQuantity);
        ann.observations.push(otherObservations);
        ann.ageRange.push(
          youngest2.num + youngest2.unit + '-' + oldest2.num + oldest2.unit
        );
        ann.weight.push(otherWeight);
      }

      sendData(ann).then(console.log(ann));
      console.log('Data submited');
    } else {
      console.log('Failed Submition');
    }
  }

  async function sendData(announcement) {
    setLoading(true);
    try {
      await api
        .post('/api/v1/announcements', JSON.stringify(announcement))
        .then(() => [
          ToastAndroid.showWithGravity(
            'Anúncio publicado!',
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM
          ),
          props.navigation.goBack(),
        ]);
    } catch (e) {
      console.log('Erro:', e);
    }
    setLoading(false);
  }

  function jump(direction) {
    //we dont want the user to see steps 5-7 on these conditions
    if (
      ((direction === 'right' && step === 4) ||
        (direction === 'left' && step === 8)) &&
      (dynamic ||
        mainCategory === 'TOURO' ||
        mainCategory === 'VACA INVERNAR' ||
        mainCategory === '')
    ) {
      return 4;
    } else if (
      (direction === 'right' && !otherCategory && step === 5) ||
      (direction === 'left' && !otherCategory && step === 8)
    ) {
      return 3;
    }
    return 1;
  }

  return (
    <Container>
      {step > 1 ? (
        <TouchableOpacity onPress={() => setStep(step - jump('left'))}>
          <AntDesign name="leftcircleo" size={42} color={colors.noticeBlue} />
        </TouchableOpacity>
      ) : (
        <AntDesign name="leftcircleo" size={42} color={colors.light} />
      )}
      <CenterContent>
        <Label>{step} de 9</Label>
      </CenterContent>
      {step < 9 ? (
        <TouchableOpacity onPress={() => setStep(step + jump('right'))}>
          <AntDesign name="rightcircleo" size={42} color={colors.noticeBlue} />
        </TouchableOpacity>
      ) : loading ? (
        <ActivityIndicator size="large" color={colors.ruralGreen} />
      ) : submitAllowed ? (
        <TouchableOpacity onPress={() => handleSubmit()}>
          <AntDesign name="checkcircleo" size={42} color={colors.ruralGreen} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() =>
            ToastAndroid.showWithGravity(
              'Revise as informações!',
              ToastAndroid.LONG,
              ToastAndroid.BOTTOM
            )
          }
        >
          <AntDesign name="closecircleo" size={42} color={colors.meatRed} />
        </TouchableOpacity>
      )}
    </Container>
  );
};

export default withNavigation(StepNavigator);
