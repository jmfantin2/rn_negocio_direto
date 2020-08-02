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
  MainWeightProvider,
  OtherWeightProvider,
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
                    <MainWeightProvider>
                      <MainObservationsProvider>
                        <OtherBreedProvider>
                          <OtherQuantityProvider>
                            <OtherWeightProvider>
                              <OtherObservationsProvider>
                                <LocationProvider>
                                  <AverageWeightProvider>
                                    <PriceProvider>
                                      <StepProvider>{children}</StepProvider>
                                    </PriceProvider>
                                  </AverageWeightProvider>
                                </LocationProvider>
                              </OtherObservationsProvider>
                            </OtherWeightProvider>
                          </OtherQuantityProvider>
                        </OtherBreedProvider>
                      </MainObservationsProvider>
                    </MainWeightProvider>
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
