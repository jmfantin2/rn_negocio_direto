import React from "react";

import {
  VideoProvider,
  DynamicProvider,
  MainCategoryProvider,
  MainBreedProvider,
  OtherCategoryProvider,
  OtherBreedProvider,
} from "./context";

import {
  Container,
  VideoUpload,
  DynamicSwitch,
  MainCategorySelect,
  MainBreedSelect,
  OtherCategorySelect,
  OtherBreedSelect,
} from "./components";

export default function AnnouncementCreation() {
  return (
    <Container>
      <VideoProvider>
        <VideoUpload />
        {/* can read video state */}
        <DynamicProvider>
          <DynamicSwitch />
          {/* can read dynamic state */}
          <MainCategoryProvider>
            <MainCategorySelect />
            {/* can read mainCategory state */}
            <MainBreedProvider>
              <MainBreedSelect />
              {/* can read mainBreed state */}
              {/* <MainQuantityProvider /> */}
              {/* <MainQuantityInput> */}
              {/* <MainVariantsProvider> */}
              <OtherCategoryProvider>
                <OtherCategorySelect />
                {/* can read otherCategory state */}
                <OtherBreedProvider>
                  <OtherBreedSelect />
                  {/* can read otherBreed state */}
                </OtherBreedProvider>
              </OtherCategoryProvider>
            </MainBreedProvider>
          </MainCategoryProvider>
        </DynamicProvider>
      </VideoProvider>
    </Container>
  );
}

AnnouncementCreation.navigationOptions = () => {
  return {
    title: "Crie um anúncio",
    headerBackTitleVisible: false,
  };
};
