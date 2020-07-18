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
          <MainQuantityInput />
          {/*<MainVariantsInputs /> DEPRECATED*/}
          <MainObservationsInput />
        </>
      ) : step === 3 ? (
        <>
          <OtherCategorySelect />
          <OtherBreedSelect />
          <OtherQuantityInput />
          {/*<OtherVariantsInputs /> DEPRECATED*/}
          <OtherObservationsInput />
        </>
      ) : step === 4 ? (
        <>
          <LocationSelects />
          <AverageWeightInput />
          <PriceInput />
        </>
      ) : step === 5 ? (
        <>
          <Summary />
        </>
      ) : null}
    </>
  );
}
