import React from "react";
import { Text } from "react-native";
import { SwitchContainer, Label, Description } from "./styles";

import {
  VideoUpload,
  DynamicSwitch,
  MainCategorySelect,
  MainBreedSelect,
  OtherCategorySelect,
  OtherBreedSelect,
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
        </>
      ) : step === 4 ? (
        <>
          <OtherCategorySelect />
          <OtherBreedSelect />
        </>
      ) : null}
    </>
  );
}
