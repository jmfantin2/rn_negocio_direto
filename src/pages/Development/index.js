import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";

import { Container } from "./styles";

// import Monetary from "./components/Monetary";

export default function Development() {
  return (
    <Container>
      <Text>
        Instancie componentes abaixo{"\n"}Não trate lógica nessa página
      </Text>
      {/* <Monetary /> */}
    </Container>
  );
}

Development.navigationOptions = ({ navigation }) => {
  return {
    title: "Teste de componentes",
    headerBackTitleVisible: false,
  };
};

Development.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func,
  }).isRequired,
};
