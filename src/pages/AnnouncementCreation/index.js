import React, { useEffect } from 'react';

import {
  ContextWrapper,
  Canvas,
  Container,
  Optional,
  ContentByStep,
  StepNavigator,
  MediaUploader,
} from 'components/AnnouncementCreation';

export default function AnnouncementCreation() {
  useEffect(() => {
    async function loadFont() {
      await Expo.Font.loadAsync({
        //this is needed, somehow, for the AutoComplete modals
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      });
    }
    loadFont();
  }, []);

  return (
    <ContextWrapper>
      <Canvas behavior="padding" enabled>
        <MediaUploader />
        <Container>
          <ContentByStep />
        </Container>
        <StepNavigator />
      </Canvas>
    </ContextWrapper>
  );
}

AnnouncementCreation.navigationOptions = () => {
  return {
    title: 'Crie um anúncio',
    headerBackTitleVisible: false,
  };
};
