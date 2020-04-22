/* NOTICE: 
    - We are not using styled.Picker since react-native/picker is deprecated.
    - We are also not using react-native-community/picker because it sucks.
*/
import React, { useState } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

import RNPickerSelect from "react-native-picker-select";
import { general } from "../../../assets/general";

import { Ionicons } from "@expo/vector-icons";

import { Container, UploadVideo } from "./styles";

export default function AnnouncementCreation() {
  const [primary, setPrimary] = useState("");
  const [secondary, setSecondary] = useState("");
  const [secondaryToggle, setSecondaryToggle] = useState(false);

  const primaryOptions = [
    { label: "NOVILHO", value: "novilho" },
    { label: "TERNEIRO", value: "terneiro" },
    { label: "TOURO", value: "touro" },
    { label: "TERNEIRA", value: "terneira" },
    { label: "NOVILHA", value: "novilha" },
    { label: "VACA", value: "vaca" },
    { label: "VACA INVERNAR", value: "vaca invernar" },
  ];

  let secondaryOptions = [];

  let primaryVariants = null;
  let secondaryVariants = null;

  /* Chernobyl : Do you know what you're doing? Well, I didn't. */
  if (primary === "novilho") {
    secondaryOptions = [
      { label: "TERNEIRO", value: "terneiro" },
      { label: "NOVILHA", value: "novilha" },
      { label: "VACA", value: "vaca" },
    ];
  } else if (primary === "terneiro") {
    secondaryOptions = [
      { label: "NOVILHO", value: "novilho" },
      { label: "TERNEIRA", value: "terneira" },
    ];
  } else if (primary === "terneira") {
    secondaryOptions = [
      { label: "NOVILHA", value: "novilha" },
      { label: "TERNEIRO", value: "terneiro" },
    ];
  } else if (primary === "novilha") {
    secondaryOptions = [
      { label: "TERNEIRA", value: "terneira" },
      { label: "NOVILHO", value: "novilho" },
      { label: "VACA", value: "vaca" },
    ];
  } else if (primary === "vaca") {
    secondaryOptions = [{ label: "NOVILHA", value: "novilha" }];
  } else if (
    primary === "touro" ||
    primary === "vaca invernar" ||
    primary === null
  ) {
    //"touro" ou "vaca invernar" ou placeholder
    secondaryOptions = [];
  }

  const handleSelection = (value) => {
    setPrimary(value);
    setSecondary("");
    if (value === "touro" || value === "vaca invernar" || value === null) {
      setSecondaryToggle(false);
    } else {
      setSecondaryToggle(true);
    }
  };

  return (
    <Container>
      {/* Video upload */}
      <TouchableOpacity>
        <UploadVideo>
          <Ionicons
            name="md-videocam"
            size={42}
            color={general.styles.colors.oceanGreen}
          />
          <Text>Envie um vídeo</Text>
        </UploadVideo>
      </TouchableOpacity>

      {/* Primary Category Selection */}
      <Text>Selecione uma categoria</Text>
      <RNPickerSelect
        placeholder={{
          label: "———",
          value: null,
          color: general.styles.colors.light,
        }}
        onValueChange={(value) => handleSelection(value)}
        items={primaryOptions}
      />

      {/* Secondary Category Selection */}
      {secondaryToggle ? (
        <>
          <Text>Selecione, se houver, outra categoria</Text>
          <RNPickerSelect
            placeholder={{
              label: "———",
              value: null,
              color: general.styles.colors.light,
            }}
            onValueChange={(value) => setSecondary(value)}
            items={secondaryOptions}
          />
        </>
      ) : null}
    </Container>
  );
}

AnnouncementCreation.navigationOptions = ({ navigation }) => {
  return {
    title: "Crie um anúncio",
    headerBackTitleVisible: false,
  };
};

AnnouncementCreation.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func,
  }).isRequired,
};
