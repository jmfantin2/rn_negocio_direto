/* Se precisar dar manutenção nisso, me chama - jmlerina@gmail.com */
import React, { useState, useEffect } from "react";
import { TouchableOpacity, Switch, Text, Alert, View } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import PropTypes from "prop-types";

import { general } from "../../../assets/general";

import * as helpers from "../../helpers/CattleUtility";
import * as constants from "../../helpers/CattleUtility/constants";

import { Ionicons } from "@expo/vector-icons";

import {
  Container,
  UploadVideo,
  Title,
  Label,
  VLabel,
  Line,
  Divider,
  Section,
  SelectorBG,
  SwitchSection,
  Description,
  ContainerQtt,
  InputQtt,
  InvisibleInput,
  Button,
  ButtonText,
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

  // for setting totals to be sold
  const [quantity1, setQuantity1] = useState("0");
  const [quantity2, setQuantity2] = useState("0");

  // for variants to show up
  const [variants1, setVariants1] = useState([]);
  const [variants2, setVariants2] = useState([]);

  // weight and price
  const [weight, setWeight] = useState("");
  const [price, setPrice] = useState("1");

  // to easily manage the showing of category 2
  const [toggle2, isEnabled2] = useState(false);

  // wrapper for backend
  const [announcement, setAnnouncement] = useState({});

  useEffect(() => {
    function loadConstants() {
      setCategories(constants.CATEGORIES);
      setBreeds(constants.BREEDS);
    }
    loadConstants();
  }, []);

  const handleCategory1Change = (value) => {
    // troca primeira categoria por selecionada
    setCategory1(value);
    // esvazia segunda categoria preenchida
    setCategory2("");
    // esvazia segunda raça preenchida
    setBreed2("");
    //esvazia as quantidades
    setQuantity1("");
    setQuantity2("");
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

  const submitValidator = () => {
    let isReady = false;
    // false: form precisa ser completado
    // true: confirmação para enviar
    let ann = {
      category: [],
      breed: [],
    };

    // RESTRICTION ZONE
    if (category1 && breed1 && quantity1) {
      // all right for first category
      if (category2) {
        // some complementary category was chosen
        if (!breed2 || !quantity2) {
          // information missing for second category
          // stop right there...
          console.log("Ready ?", isReady, "!");
          console.log("Assembled :", ann);
          return isReady;
        } else {
          //information complete for second category
          const categoryWrapper2 = {};
          categoryWrapper2.name = category2;
          categoryWrapper2.quantity = quantity2;
          ann.category.push(categoryWrapper2);

          const breedWrapper2 = {};
          breedWrapper2.name = breed2;
          breedWrapper2.quantity = quantity2;
          ann.breed.push(breedWrapper2);
        }
      }

      const categoryWrapper1 = {};
      categoryWrapper1.name = category1;
      categoryWrapper1.quantity = quantity1;
      ann.category.push(categoryWrapper1);

      const breedWrapper1 = {};
      breedWrapper1.name = breed1;
      breedWrapper1.quantity = quantity1;
      ann.breed.push(breedWrapper1);

      isReady = true;
    }
    console.log("Ready ?", isReady, "!");
    console.log("Assembled :", ann);
    return isReady;
  };

  const monetaryHandling = (value) => {
    //value is 090
    console.log("Entered", value);
    const real = parseInt(value) / 100; //7.55

    //preserve the last zero!
    value.charAt(value.len - 1) === "0"
      ? setPrice(real.toString() + "0")
      : setPrice(real.toString()); //R$ 7.55

    console.log("Updated", real);
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
              label: "───",
              value: null,
              color: general.styles.colors.light,
            }}
            value={category1}
            style={pickerStyle}
            useNativeAndroidPickerStyle={false}
            onValueChange={(value) => handleCategory1Change(value)}
            items={categories}
          />
        </SelectorBG>
        {category1 ? (
          <>
            <Label>Raça</Label>
            <SelectorBG>
              <RNPickerSelect
                placeholder={{
                  label: "───",
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
                placeholder={"n° cabeças"}
                maxLength={3}
                keyboardType={"numeric"}
              />
            </ContainerQtt>
            {variants1.map((v) => (
              <View key={v.key}>
                <ContainerQtt>
                  <VLabel>
                    {"└─ " +
                      v.case
                        .charAt(0)
                        .toUpperCase()
                        .concat(v.case.substring(1))
                        .replace("_", " ")}
                  </VLabel>
                  <InputQtt
                    value={"X"}
                    onChangeText={(text) =>
                      console.log(
                        "Quantity for",
                        v.case,
                        "( key",
                        v.key,
                        ")",
                        text
                      )
                    }
                    placeholder={quantity1 ? quantity1 + " ou menos" : "0"}
                    maxLength={3}
                    keyboardType={"numeric"}
                  />
                </ContainerQtt>
              </View>
            ))}
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
                  label: "───",
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
                      label: "───",
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
                    placeholder={"n° cabeças"}
                    maxLength={3}
                    keyboardType={"numeric"}
                  />
                </ContainerQtt>
                {variants2.map((v) => (
                  <View key={v.key}>
                    <ContainerQtt>
                      <VLabel>
                        {"└─ " +
                          v.case
                            .charAt(0)
                            .toUpperCase()
                            .concat(v.case.substring(1))
                            .replace("_", " ")}
                      </VLabel>
                      <InputQtt
                        value={"X"}
                        onChangeText={(text) =>
                          console.log(
                            "Quantity for",
                            v.case,
                            "( key",
                            v.key,
                            ")",
                            text
                          )
                        }
                        placeholder={quantity1 ? quantity1 + " ou menos" : "0"}
                        maxLength={3}
                        keyboardType={"numeric"}
                      />
                    </ContainerQtt>
                  </View>
                ))}
              </>
            ) : null}
          </>
        ) : null}
        <Line />
        {parseInt(quantity1) + parseInt(quantity2) > 1 ? (
          <Label>
            {parseInt(quantity1) + parseInt(quantity2)} cabeças contabilizadas.
          </Label>
        ) : null}
        <ContainerQtt>
          <Label>Peso médio (kg)</Label>
          <InputQtt
            value={weight}
            onChangeText={(text) => setWeight(text.replace(/\D/g, ""))}
            placeholder={"em kg"}
            maxLength={3}
            keyboardType={"numeric"}
          />
        </ContainerQtt>
        {dynamic ? null : (
          <ContainerQtt>
            <Label>Preço por kg</Label>
            <View>
              <InvisibleInput
                value={"R$ " + price}
                onChangeText={(text) =>
                  monetaryHandling(text.replace(/\D/g, ""))
                }
                maxLength={10}
                keyboardType={"numeric"}
              />
            </View>
          </ContainerQtt>
        )}
      </Section>
      <Button onPress={() => submitValidator()}>
        <ButtonText>
          {category1
            ? general.strings.FINISH_SIGN_UP.toUpperCase()
            : general.strings.FILL_SIGN_UP.toUpperCase()}
        </ButtonText>
      </Button>
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
