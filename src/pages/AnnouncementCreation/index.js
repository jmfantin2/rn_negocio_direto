/* NOTICE: 
    - We are not using styled.Picker since react-native/picker is deprecated.
    - We are also not using react-native-community/picker because it sucks.
*/
import React, { useState } from "react";
import { TouchableOpacity, Switch, Text } from "react-native";
import PropTypes from "prop-types";

import RNPickerSelect from "react-native-picker-select";
import { general } from "../../../assets/general";

import { Ionicons } from "@expo/vector-icons";

import {
  Container,
  UploadVideo,
  Title,
  Label,
  Line,
  Divider,
  Section,
  SwitchSection,
  Description,
  pickerStyle,
} from "./styles";

export default function AnnouncementCreation() {
  const [dynamic, setDynamic] = useState(false);
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
          <Label>Envie um vídeo</Label>
        </UploadVideo>
      </TouchableOpacity>

      <SwitchSection>
        <Label>{dynamic ? "PREÇO DINÂMICO" : "PREÇO FIXO"}</Label>
        <Switch
          onValueChange={() => (dynamic ? setDynamic(false) : setDynamic(true))}
          value={dynamic}
          style={{ margin: 10 }}
        />
        <Description>
          {dynamic
            ? "Nessa opção, o valor do seu anúncio fica em aberto, aproveitando ao máximo o potencial de venda através da proposta dos compradores. Em preço dinâmico, você pode anunciar apenas uma categoria de gado por até 3 dias."
            : "Nessa opção, o valor mínimo desejado para o anúncio é determinado, mas pode não ser definitivo mesmo se a venda for concretizada. Em preço fixo, você pode anunciar por até 7 dias e declarar duas categorias de gado."}
        </Description>
      </SwitchSection>

      <Divider>
        <Title>INFORMAÇÕES DO GADO</Title>
      </Divider>

      <Section>
        {/* Primary Category Selection */}
        <Label>Categoria</Label>
        <RNPickerSelect
          placeholder={{
            label: "———",
            value: null,
            color: general.styles.colors.light,
          }}
          style={pickerStyle}
          useNativeAndroidPickerStyle={false}
          onValueChange={(value) => handleSelection(value)}
          items={primaryOptions}
        />
        {primary ? (
          <>
            <Label>Raça</Label>
            <RNPickerSelect
              placeholder={{
                label: "———",
                value: null,
                color: general.styles.colors.light,
              }}
              style={pickerStyle}
              useNativeAndroidPickerStyle={false}
              onValueChange={(value) => setPrimaryBreed(value)}
              items={breeds}
            />
          </>
        ) : null}

        {/* Secondary Category Selection */}
        {secondaryToggle && !dynamic ? (
          <>
            <Line />
            <Label>Categoria adicional (opcional)</Label>
            <RNPickerSelect
              placeholder={{
                label: "———",
                value: null,
                color: general.styles.colors.light,
              }}
              style={pickerStyle}
              useNativeAndroidPickerStyle={false}
              onValueChange={(value) => setSecondary(value)}
              items={secondaryOptions}
            />
            {secondary ? (
              <>
                <Label>Raça</Label>
                <RNPickerSelect
                  placeholder={{
                    label: "———",
                    value: null,
                    color: general.styles.colors.light,
                  }}
                  style={pickerStyle}
                  useNativeAndroidPickerStyle={false}
                  onValueChange={(value) => setSecondaryBreed(value)}
                  items={breeds}
                />
              </>
            ) : null}
          </>
        ) : null}
      </Section>
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
