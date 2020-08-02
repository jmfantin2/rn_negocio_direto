import React from 'react';

import {
  StepProvider,
  VideoProvider,
  ImageProvider,
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
  LocationProvider,
  MainAgeRangeProvider,
  OtherAgeRangeProvider,
  MainWeightProvider,
} from 'context/AnnouncementCreation';

export default function ContextWrapper({ children }) {
  return (
    <VideoProvider>
      <ImageProvider>
        <OtherCategoryProvider>
          <DaysActiveProvider>
            <DynamicProvider>
              <MainCategoryProvider>
                <MainBreedProvider>
                  <MainQuantityProvider>
                    <MainAgeRangeProvider>
                      <MainWeightProvider>
                        <MainObservationsProvider>
                          <OtherBreedProvider>
                            <OtherQuantityProvider>
                              <OtherAgeRangeProvider>
                                <OtherObservationsProvider>
                                  <LocationProvider>
                                    <AverageWeightProvider>
                                      <PriceProvider>
                                        <StepProvider>{children}</StepProvider>
                                      </PriceProvider>
                                    </AverageWeightProvider>
                                  </LocationProvider>
                                </OtherObservationsProvider>
                              </OtherAgeRangeProvider>
                            </OtherQuantityProvider>
                          </OtherBreedProvider>
                        </MainObservationsProvider>
                      </MainWeightProvider>
                    </MainAgeRangeProvider>
                  </MainQuantityProvider>
                </MainBreedProvider>
              </MainCategoryProvider>
            </DynamicProvider>
          </DaysActiveProvider>
        </OtherCategoryProvider>
      </ImageProvider>
    </VideoProvider>
  );
}
