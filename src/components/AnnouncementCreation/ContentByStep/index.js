import React from 'react';

import { View, Text } from 'react-native';

import {
  DynamicSwitch,
  MainCategorySelect,
  MainBreedSelect,
  MainQuantityInput,
  // MainVariantsInputs, DEPRECATED
  MainObservationsInput,
  OtherCategorySelect,
  OtherBreedSelect,
  OtherQuantityInput,
  // OtherVariantsInputs, DEPRECATED
  OtherObservationsInput,
  AverageWeightInput,
  PriceInput,
  Summary,
  DaysActiveSlider,
  LocationSelects,
  MainAgeRangeSelector,
  OtherAgeRangeSelector,
} from 'components/AnnouncementCreation';

import { useStep } from 'context/AnnouncementCreation/Step';

export default function ContentByStep() {
  const { step } = useStep();

  return (
    <>
      {step === 1 ? (
        <>
          <DynamicSwitch />
          <DaysActiveSlider />
        </>
      ) : step === 2 ? (
        <>
          <MainCategorySelect />
          <MainBreedSelect />
          <MainQuantityInput />
        </>
      ) : step === 3 ? (
        <>
          <MainAgeRangeSelector />
          <Text>MainAgeRange</Text>
        </>
      ) : step === 4 ? (
        <>
          <MainObservationsInput />
        </>
      ) : step === 5 ? (
        <>
          <OtherCategorySelect />
          <OtherBreedSelect />
          <OtherQuantityInput />
        </>
      ) : step === 6 ? (
        <>
          <Text>OtherAverageWeight</Text>
          <Text>OtherAgeRange</Text>
        </>
      ) : step === 7 ? (
        <>
          <OtherObservationsInput />
        </>
      ) : step === 8 ? (
        <>
          <LocationSelects />
          {/*<AverageWeightInput />*/}
          <PriceInput />
        </>
      ) : step === 9 ? (
        <>
          <Summary />
        </>
      ) : null}
    </>
  );
}
