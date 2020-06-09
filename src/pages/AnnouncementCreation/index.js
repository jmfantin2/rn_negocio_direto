import React from "react";
import { Text } from "react-native";

import {
  StepProvider,
  VideoProvider,
  DynamicProvider,
  MainCategoryProvider,
  MainBreedProvider,
  MainQuantityProvider,
  // MainVariantsProvider,
  MainObservationsProvider,
  OtherCategoryProvider,
  OtherBreedProvider,
  OtherQuantityProvider,
  // OtherVariantsProvider,
  OtherObservationsProvider,
  AverageWeightProvider,
  PriceProvider,
} from "./context";

import {
  Canvas,
  Container,
  Optional,
  ContentByStep,
  StepNavigator,
} from "./components";

export default function AnnouncementCreation() {
  return (
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
              <MainObservationsProvider>
                {/* can access mainObservations state */}
                <OtherCategoryProvider>
                  {/* can access otherCategory state */}
                  <OtherBreedProvider>
                    {/* can access otherBreed state */}
                    <OtherQuantityProvider>
                      {/* can access otherQuantity state */}
                      <OtherObservationsProvider>
                        {/* can access otherObservations state */}
                        <AverageWeightProvider>
                          {/* can access averageWeight state */}
                          <PriceProvider>
                            {/* can access price state */}
                            {/* can access everything */}
                            <StepProvider>
                              <Canvas behavior="padding" enabled>
                                <Optional />
                                <Container>
                                  <ContentByStep />
                                  {/* manages announcement creation*/}
                                </Container>
                                <StepNavigator />
                              </Canvas>
                            </StepProvider>
                          </PriceProvider>
                        </AverageWeightProvider>
                      </OtherObservationsProvider>
                    </OtherQuantityProvider>
                  </OtherBreedProvider>
                </OtherCategoryProvider>
              </MainObservationsProvider>
              {/*</MainVariantsProvider> DEPRECATED*/}
            </MainQuantityProvider>
          </MainBreedProvider>
        </MainCategoryProvider>
      </DynamicProvider>
    </VideoProvider>
  );
}

AnnouncementCreation.navigationOptions = () => {
  return {
    title: "Crie um anúncio",
    headerBackTitleVisible: false,
  };
};
