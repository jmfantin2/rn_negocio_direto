import React from 'react';

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
        </>
      ) : step === 3 ? (
        <>
          <MainQuantityInput />
          {/*AQUI <MainAverageWeight /> */}
          {/*AQUI <MainAgeRange /> */}
        </>
      ) : step === 4 ? (
        <>
          <MainObservationsInput />
        </>
      ) : step === 5 ? (
        <>
          <OtherCategorySelect />
          <OtherBreedSelect />
        </>
      ) : step === 6 ? (
        <>
          <OtherQuantityInput />
          {/*AQUI <OtherAverageWeight /> */}
          {/*AQUI <OtherAgeRange /> */}
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
