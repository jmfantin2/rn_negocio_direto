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
                    <MainObservationsProvider>
                      <OtherBreedProvider>
                        <OtherQuantityProvider>
                          <OtherObservationsProvider>
                            <LocationProvider>
                              <AverageWeightProvider>
                                <PriceProvider>
                                  <StepProvider>{children}</StepProvider>
                                </PriceProvider>
                              </AverageWeightProvider>
                            </LocationProvider>
                          </OtherObservationsProvider>
                        </OtherQuantityProvider>
                      </OtherBreedProvider>
                    </MainObservationsProvider>
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
