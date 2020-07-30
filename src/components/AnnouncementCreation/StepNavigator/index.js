import React, { useState, useEffect } from 'react';
import {
  ToastAndroid,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import { withNavigation } from 'react-navigation';

import api from '../../../services/ann';

import { makeDates } from 'helpers/DateUtility';

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

import { useOtherCategory } from 'context/AnnouncementCreation/OtherCategory';
import { useOtherBreed } from 'context/AnnouncementCreation/OtherBreed';
import { useOtherQuantity } from 'context/AnnouncementCreation/OtherQuantity';
import { useOtherObservations } from 'context/AnnouncementCreation/OtherObservations';

import { useLocation } from 'context/AnnouncementCreation/Location';
import { useAverageWeight } from 'context/AnnouncementCreation/AverageWeight';
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

  const { otherCategory } = useOtherCategory(); //READ
  const { otherBreed } = useOtherBreed(); //READ
  const { otherQuantity } = useOtherQuantity(); //READ
  const { otherObservations } = useOtherObservations(); //READ

  const { state, city } = useLocation(); //READ
  const { averageWeight } = useAverageWeight(); //READ
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
      averageWeight &&
      state &&
      city &&
      (dynamic || price)
    ) {
      allowSubmit(true);
    } else {
      allowSubmit(false);
    }
  });

  function printData() {
    console.log(
      'MainCategory: ' +
        mainCategory +
        '\nMainBreed: ' +
        mainBreed +
        '\nMainQuantity: ' +
        mainQuantity +
        '\nMainObservations: ' +
        mainObservations +
        '\nOtherCategory: ' +
        otherCategory +
        '\nOtherBreed: ' +
        otherBreed +
        '\nOtherQuantity: ' +
        otherQuantity +
        '\nOtherObservations: ' +
        otherObservations +
        '\nState: ' +
        state +
        '\nCity: ' +
        city +
        '\nAverageWeight: ' +
        averageWeight +
        '\nPrice: ' +
        price
    );
  }

  function handleSubmit() {
    printData();
    if (submitAllowed) {
      const categoryWrapper = {};
      const breedWrapper = {};
      let ann = {
        animalsQuantity: 0,
        observations: [],
        ageRange: 'TBD',
        category: [],
        breed: [],
        currentPrice: '0',
        // createdDate: 0,
        endDate: 0,
        location: {
          city: '',
          state: '',
        },
        weight: '',
        picture: {
          id: '',
          originalUrl: '',
        },
      };

      ann.picture.id = image.id;
      ann.picture.originalUrl = image.originalUrl;

      ann.location = { city, state };
      ann.weight = averageWeight;
      const dates = makeDates(daysActive);
      // ann.createdDate = dates.createdDate;
      ann.endDate = dates.endDate;
      price ? (ann.currentPrice = price) : null;

      ann.category.push({
        name: mainCategory,
        quantity: parseInt(mainQuantity),
      });
      ann.breed.push({ name: mainBreed, quantity: parseInt(mainQuantity) });
      ann.observations.push(mainObservations);
      ann.animalsQuantity = parseInt(mainQuantity);

      if (otherCategory && otherBreed && otherQuantity && otherObservations) {
        ann.category.push({
          name: otherCategory,
          quantity: parseInt(otherQuantity),
        });
        ann.breed.push({ name: otherBreed, quantity: parseInt(otherQuantity) });
        ann.animalsQuantity += parseInt(otherQuantity);
        ann.observations.push(otherObservations);
      }

      sendData(ann);
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

  return (
    <Container>
      {step > 1 ? (
        <TouchableOpacity onPress={() => setStep(step - 1)}>
          <AntDesign name="leftcircleo" size={42} color={colors.noticeBlue} />
        </TouchableOpacity>
      ) : (
        <AntDesign name="leftcircleo" size={42} color={colors.light} />
      )}
      <CenterContent>
        <Label>{step} de 5</Label>
      </CenterContent>
      {step < 5 ? (
        <TouchableOpacity onPress={() => setStep(step + 1)}>
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
