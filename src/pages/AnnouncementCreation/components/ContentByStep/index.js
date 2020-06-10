import React from "react";

import {
  VideoUpload,
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
} from "../../components";

import { useStep } from "../../context/Step";

export default function ContentByStep() {
  const { step } = useStep();

  return (
    <>
      {step === 1 ? (
        <>
          <VideoUpload />
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
