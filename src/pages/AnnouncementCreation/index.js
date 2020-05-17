import React from "react";

import {
  StepProvider,
  VideoProvider,
  DynamicProvider,
  MainCategoryProvider,
  MainBreedProvider,
  OtherCategoryProvider,
  OtherBreedProvider,
} from "./context";

import { Container, ContentByStep, StepNavigator } from "./components";

export default function AnnouncementCreation() {
  return (
    <Container>
      <VideoProvider>
        {/* can access video state */}
        <DynamicProvider>
          {/* can access dynamic state */}
          <MainCategoryProvider>
            {/* can access mainCategory state */}
            <MainBreedProvider>
              {/* can access mainBreed state */}
              <OtherCategoryProvider>
                {/* can access otherCategory state */}
                <OtherBreedProvider>
                  {/* can access otherBreed state */}
                  <StepProvider>
                    <ContentByStep />
                    <StepNavigator />
                    {/* manages announcement creation*/}
                  </StepProvider>
                  {/* can access everything */}
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
