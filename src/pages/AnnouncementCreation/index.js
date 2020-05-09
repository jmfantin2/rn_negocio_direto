import React from "react";

import {
  MainCategorySelect,
  MainBreedSelect,
  OtherCategorySelect,
  OtherBreedSelect,
  Container,
  VideoUpload,
} from "./components";

import {
  MainCategoryProvider,
  MainBreedProvider,
  OtherCategoryProvider,
  OtherBreedProvider,
  VideoProvider,
} from "./context";

export default function AnnouncementCreation() {
  return (
    <Container>
      <VideoProvider>
        <VideoUpload />
      </VideoProvider>

      <MainCategoryProvider>
        <MainCategorySelect />

        <MainBreedProvider>
          <MainBreedSelect />
        </MainBreedProvider>

        <OtherCategoryProvider>
          <OtherCategorySelect />
          <OtherBreedProvider>
            <OtherBreedSelect />
          </OtherBreedProvider>
        </OtherCategoryProvider>
      </MainCategoryProvider>
    </Container>
  );
}

AnnouncementCreation.navigationOptions = () => {
  return {
    title: "Crie um anúncio",
    headerBackTitleVisible: false,
  };
};
