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
  const [primaryBreed, setPrimaryBreed] = useState("");
  const [secondary, setSecondary] = useState("");
  const [secondaryBreed, setSecondaryBreed] = useState("");
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
  let primaryVariants,
    secondaryVariants = [];

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

  const breeds = [
    { label: "ANGUS (ABERDEEN)", value: "aberdeen angus" },
    { label: "ANGUS (RED)", value: "red angus" },
    { label: "BRAFORD", value: "braford" },
    { label: "BRANGUS", value: "brangus" },
    { label: "BRITÂNICOS", value: "britânicos" },
    { label: "CANCHIN", value: "canchin" },
    { label: "CHAROLES", value: "charoles" },
    { label: "CRUZAS EUROPEIAS", value: "cruzas europeias" },
    { label: "CRUZAS LEITEIRAS", value: "cruzas leiteiras" },
    { label: "CRUZAS ZEBU", value: "cruzas zebu" },
    { label: "DEVON", value: "devon" },
    { label: "EUROPEUS", value: "europeus" },
    { label: "HEREFORD", value: "hereford" },
    { label: "LIMOUSIN", value: "limousin" },
    { label: "NELORE", value: "nelore" },
    { label: "SIMENTAL", value: "simental" },
    { label: "TABAPUÃ", value: "tabapuã" },
    { label: "ZEBU", value: "zebu" },
  ];

  const handleSelection = (value) => {
    setPrimary(value);
    setSecondary("");
    setSecondaryBreed("");
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
      <Text>Indique uma categoria para o gado que será vendido</Text>
      <RNPickerSelect
        placeholder={{
          label: "———",
          value: null,
          color: general.styles.colors.light,
        }}
        onValueChange={(value) => handleSelection(value)}
        items={primaryOptions}
      />
      {primary ? (
        <>
          <Text>Selecione a raça correspondente à categoria</Text>
          <RNPickerSelect
            placeholder={{
              label: "———",
              value: null,
              color: general.styles.colors.light,
            }}
            onValueChange={(value) => setPrimaryBreed(value)}
            items={breeds}
          />
        </>
      ) : null}

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
          {secondary ? (
            <>
              <Text>Selecione a raça correspondente à segunda categoria</Text>
              <RNPickerSelect
                placeholder={{
                  label: "———",
                  value: null,
                  color: general.styles.colors.light,
                }}
                onValueChange={(value) => setSecondaryBreed(value)}
                items={breeds}
              />
            </>
          ) : null}
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
