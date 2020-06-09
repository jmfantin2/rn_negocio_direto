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
} from "../../components";

import { useStep } from "../../context/Step";

export default function ContentByStep() {
  const { step } = useStep();

  return (
    <>
      {step === 1 ? (
        <VideoUpload />
      ) : step === 2 ? (
        <DynamicSwitch />
      ) : step === 3 ? (
        <>
          <MainCategorySelect />
          <MainBreedSelect />
          <MainQuantityInput />
          {/*<MainVariantsInputs /> DEPRECATED*/}
          <MainObservationsInput />
        </>
      ) : step === 4 ? (
        <>
          <OtherCategorySelect />
          <OtherBreedSelect />
          <OtherQuantityInput />
          {/*<OtherVariantsInputs /> DEPRECATED*/}
          <OtherObservationsInput />
        </>
      ) : step === 5 ? (
        <>
          <AverageWeightInput />
          <PriceInput />
        </>
      ) : null}
    </>
  );
}
