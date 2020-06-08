import React from "react";

import {
  StepProvider,
  VideoProvider,
  DynamicProvider,
  MainCategoryProvider,
  MainBreedProvider,
  MainQuantityProvider,
  // MainVariantsProvider,
  OtherCategoryProvider,
  OtherBreedProvider,
  OtherQuantityProvider,
  // OtherVariantsProvider,
  AverageWeightProvider,
  PriceProvider,
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
              <MainQuantityProvider>
                {/* can access mainQuantity state */}
                {/*<MainVariantsProvider> DEPRECATED*/}
                {/* can access mainVariants state */}
                <OtherCategoryProvider>
                  {/* can access otherCategory state */}
                  <OtherBreedProvider>
                    {/* can access otherBreed state */}
                    <OtherQuantityProvider>
                      {/* can access otherQuantity state */}
                      {/*<OtherVariantsProvider> DEPRECATED*/}
                      {/* can access otherVariants state */}
                      <AverageWeightProvider>
                        {/* can access averageWeight state */}
                        <PriceProvider>
                          {/* can access price state */}
                          <StepProvider>
                            <ContentByStep />
                            <StepNavigator />
                            {/* manages announcement creation*/}
                          </StepProvider>
                          {/* can access everything */}
                        </PriceProvider>
                      </AverageWeightProvider>
                      {/*</OtherVariantsProvider> DEPRECATED*/}
                    </OtherQuantityProvider>
                  </OtherBreedProvider>
                </OtherCategoryProvider>
                {/*</MainVariantsProvider> DEPRECATED*/}
              </MainQuantityProvider>
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
