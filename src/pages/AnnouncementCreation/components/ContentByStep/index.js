import React from "react";

import {
  VideoUpload,
  DynamicSwitch,
  MainCategorySelect,
  MainBreedSelect,
  MainQuantityInput,
  MainVariantsInputs,
  OtherCategorySelect,
  OtherBreedSelect,
  OtherQuantityInput,
  OtherVariantsInputs,
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
          <MainVariantsInputs />
        </>
      ) : step === 4 ? (
        <>
          <OtherCategorySelect />
          <OtherBreedSelect />
          <OtherQuantityInput />
          <OtherVariantsInputs />
        </>
      ) : null}
    </>
  );
}
