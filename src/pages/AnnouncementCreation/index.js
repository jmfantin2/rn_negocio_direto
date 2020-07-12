import React from "react";

import {
  ContextWrapper,
  Canvas,
  Container,
  Optional,
  ContentByStep,
  StepNavigator,
} from "components/AnnouncementCreation";

export default function AnnouncementCreation() {
  return (
    <ContextWrapper>
      <Canvas behavior="padding" enabled>
        <Optional />
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
    title: "Crie um anúncio",
    headerBackTitleVisible: false,
  };
};
