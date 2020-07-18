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
        <DynamicProvider>
          <MainCategoryProvider>
            <MainBreedProvider>
              <MainQuantityProvider>
                <MainObservationsProvider>
                  <OtherCategoryProvider>
                    <OtherBreedProvider>
                      <OtherQuantityProvider>
                        <OtherObservationsProvider>
                          <LocationProvider>
                            <AverageWeightProvider>
                              <PriceProvider>
                                <DaysActiveProvider>
                                  <StepProvider>{children}</StepProvider>
                                </DaysActiveProvider>
                              </PriceProvider>
                            </AverageWeightProvider>
                          </LocationProvider>
                        </OtherObservationsProvider>
                      </OtherQuantityProvider>
                    </OtherBreedProvider>
                  </OtherCategoryProvider>
                </MainObservationsProvider>
              </MainQuantityProvider>
            </MainBreedProvider>
          </MainCategoryProvider>
        </DynamicProvider>
      </ImageProvider>
    </VideoProvider>
  );
}
