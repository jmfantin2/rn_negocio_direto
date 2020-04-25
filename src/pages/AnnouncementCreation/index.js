/* Se precisar dar manutenção nisso, me chama - jmlerina@gmail.com */
import React, { useState, useEffect } from "react";
import { TouchableOpacity, Switch, Text, Alert } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import PropTypes from "prop-types";

import { general } from "../../../assets/general";

import * as constants from "../../helpers/constants";
import * as helpers from "../../helpers/AnnouncementCreation";

import { Ionicons } from "@expo/vector-icons";

import {
  Container,
  UploadVideo,
  Title,
  Label,
  Line,
  Divider,
  Section,
  SelectorBG,
  SwitchSection,
  Description,
  ContainerQtt,
  InputQtt,
  pickerStyle,
} from "./styles";

export default function AnnouncementCreation() {
  // presentational variables
  const [dynamic, setDynamic] = useState(false);
  const [categories, setCategories] = useState([]);
  const [breeds, setBreeds] = useState([]);

  // for selected categories
  const [category1, setCategory1] = useState("");
  const [category2, setCategory2] = useState("");

  // for matching categories
  const [optionsCategory2, setOptionsCategory2] = useState([]);

  // for selected breeds
  const [breed1, setBreed1] = useState("");
  const [breed2, setBreed2] = useState("");

  // for set totals to be sold
  const [quantity1, setQuantity1] = useState("1");
  const [quantity2, setQuantity2] = useState("1");

  // for variants to show up
  const [variants1, setVariants1] = useState([]);
  const [variants2, setVariants2] = useState([]);

  const [toggle2, isEnabled2] = useState(false);

  useEffect(() => {
    function loadConstants() {
      setCategories(constants.CATEGORIES);
      setBreeds(constants.BREEDS);
    }
    loadConstants();
  }, []);

  const handleNewCategory1 = (value) => {
    // troca primeira categoria por selecionada
    setCategory1(value);
    // esvazia segunda categoria preenchida
    setCategory2("");
    // esvazia segunda raça preenchida
    setBreed2("");
    // busca quais opções possíveis de segunda categoria
    setOptionsCategory2(helpers.getMatchedCategories(value));
    // atualiza as variantes pra essa categoria
    setVariants1(helpers.getPossibleVariants(value));

    // desabilita opções de segunda categoria se prim for touro, invernar ou nula
    if (value === "touro" || value === "vaca_invernar" || value === null) {
      isEnabled2(false);
    } else {
      isEnabled2(true);
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
          onValueChange={() =>
            dynamic
              ? setDynamic(false)
              : [setDynamic(true), setCategory2(""), setBreed2("")]
          }
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
        {/* Category 1 Selection */}
        <Label>Categoria</Label>
        <SelectorBG>
          <RNPickerSelect
            placeholder={{
              label: "———",
              value: null,
              color: general.styles.colors.light,
            }}
            value={category1}
            style={pickerStyle}
            useNativeAndroidPickerStyle={false}
            onValueChange={(value) => [handleNewCategory1(value)]}
            items={categories}
          />
        </SelectorBG>
        {category1 ? (
          <>
            <Label>Raça</Label>
            <SelectorBG>
              <RNPickerSelect
                placeholder={{
                  label: "———",
                  value: null,
                  color: general.styles.colors.light,
                }}
                value={breed1}
                style={pickerStyle}
                useNativeAndroidPickerStyle={false}
                onValueChange={(value) => setBreed1(value)}
                items={breeds}
              />
            </SelectorBG>
            <ContainerQtt>
              <Label>Quantidade</Label>
              <InputQtt
                value={quantity1}
                onChangeText={(text) => setQuantity1(text.replace(/\D/g, ""))}
                placeholder={"total de cabeças"}
                maxLength={3}
                keyboardType={"numeric"}
              />
            </ContainerQtt>
            {/* Here things get a little insane */}
          </>
        ) : null}

        {/* Category 2 Selection */}
        {toggle2 && !dynamic ? (
          <>
            <Line />
            <Label>Categoria adicional (opcional)</Label>
            <SelectorBG>
              <RNPickerSelect
                placeholder={{
                  label: "———",
                  value: null,
                  color: general.styles.colors.light,
                }}
                value={category2}
                style={pickerStyle}
                useNativeAndroidPickerStyle={false}
                onValueChange={(value) => [
                  setCategory2(value),
                  setVariants2(helpers.getPossibleVariants(value)),
                ]}
                items={optionsCategory2}
              />
            </SelectorBG>
            {category2 ? (
              <>
                <Label>Raça</Label>
                <SelectorBG>
                  <RNPickerSelect
                    placeholder={{
                      label: "———",
                      value: null,
                      color: general.styles.colors.light,
                    }}
                    value={breed2}
                    style={pickerStyle}
                    useNativeAndroidPickerStyle={false}
                    onValueChange={(value) => setBreed2(value)}
                    items={breeds}
                  />
                </SelectorBG>
                <ContainerQtt>
                  <Label>Quantidade</Label>
                  <InputQtt
                    value={quantity2}
                    onChangeText={(text) =>
                      setQuantity2(text.replace(/\D/g, ""))
                    }
                    placeholder={"total de cabeças"}
                    maxLength={3}
                    keyboardType={"numeric"}
                  />
                </ContainerQtt>
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
