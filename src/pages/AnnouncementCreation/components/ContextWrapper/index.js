import React from "react";

import {
  StepProvider,
  VideoProvider,
  DynamicProvider,
  MainCategoryProvider,
  MainBreedProvider,
  MainQuantityProvider,
  MainObservationsProvider,
  OtherCategoryProvider,
  OtherBreedProvider,
  OtherQuantityProvider,
  OtherObservationsProvider,
  AverageWeightProvider,
  PriceProvider,
  DaysActiveProvider,
  SubmitionProvider,
} from "../../context";

export default function ContextWrapper({ children }) {
  return (
    <VideoProvider>
      <DynamicProvider>
        <MainCategoryProvider>
          <MainBreedProvider>
            <MainQuantityProvider>
              <MainObservationsProvider>
                <OtherCategoryProvider>
                  <OtherBreedProvider>
                    <OtherQuantityProvider>
                      <OtherObservationsProvider>
                        <AverageWeightProvider>
                          <PriceProvider>
                            <DaysActiveProvider>
                              <SubmitionProvider>
                                <StepProvider>{children}</StepProvider>
                              </SubmitionProvider>
                            </DaysActiveProvider>
                          </PriceProvider>
                        </AverageWeightProvider>
                      </OtherObservationsProvider>
                    </OtherQuantityProvider>
                  </OtherBreedProvider>
                </OtherCategoryProvider>
              </MainObservationsProvider>
            </MainQuantityProvider>
          </MainBreedProvider>
        </MainCategoryProvider>
      </DynamicProvider>
    </VideoProvider>
  );
}
