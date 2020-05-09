/* Se precisar dar manutenção nisso, me chama - jmlerina@gmail.com */
import React, { useState, useEffect } from "react";
import {
  TouchableOpacity,
  Switch,
  Text,
  Alert,
  View,
  Slider,
  ActivityIndicator,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import PropTypes from "prop-types";

import api from "../../services/ann";

import { general } from "../../../assets/general";
import * as helpers from "../../helpers/CattleUtility";
import * as location from "../../helpers/LocationUtility";

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
  ContainerHor,
  InputQtt,
  InvisibleInput,
  Button,
  ButtonText,
  pickerStyle,
} from "./styles";

export default function AnnouncementCreation(props) {
  // presentational variables

  const [loading, setLoading] = useState(false);

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
  const [price, setPrice] = useState("0");

  // location
  const [states, setStates] = useState([]);
  const [state, setState] = useState("");
  const [cityOptions, setCityOptions] = useState([]);
  const [city, setCity] = useState("");

  // to easily manage the showing of category 2
  const [toggle2, isEnabled2] = useState(false);

  const [daysActive, setDaysActive] = useState(2);

  useEffect(() => {
    function loadConstants() {
      setCategories(general.collections.CATEGORIES);
      setBreeds(general.collections.BREEDS);
      setStates(general.collections.BRAZILIAN_STATES);
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
    if (value === "TOURO" || value === "VACA_INVERNAR" || value === null) {
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
      animalsQuantity: 0,
      observations: ["obs1", "obs2"],
      ageRange: "TBD",
      category: [],
      breed: [],
      currentPrice: "0",
      endDate: 0,
      location: {
        city: "",
        state: "",
      },
      weight: "",
    };

    // RESTRICTION ZONE
    if (category1 && breed1 && parseInt(quantity1) >= 1) {
      // all right for first category

      //all other variables are verified
      if (parseInt(weight) >= 0 && state && city) {
        ann.location = { city, state };
        ann.weight = weight;
        ann.endDate = daysActive;
      } else {
        // information missing for more info
        // stop right there...
        console.log("Ready ?", isReady, "!");
        console.log("Assembled :", ann);
        return isReady;
      }
      if (dynamic) {
        ann.currentPrice = "0";
      } else {
        if (parseInt(price) > 0) {
          ann.currentPrice = price;
        } else {
          //not quite kiddo
          // stop right there...
          console.log("Ready ?", isReady, "!");
          console.log("Assembled :", ann);
          return isReady;
        }
      }

      if (category2) {
        // some complementary category was chosen
        if (!breed2 || parseInt(quantity2) <= 0) {
          // information missing for second category
          // stop right there...
          console.log("Ready ?", isReady, "!");
          console.log("Assembled :", ann);
          return isReady;
        } else {
          //information complete for second category
          const categoryWrapper2 = {};
          categoryWrapper2.name = "TERNEIROS";
          categoryWrapper2.quantity = parseInt(quantity2);
          ann.category.push(categoryWrapper2);

          const breedWrapper2 = {};
          breedWrapper2.name = "BRANGUS";
          breedWrapper2.quantity = parseInt(quantity2);
          ann.breed.push(breedWrapper2);
        }
      }

      const categoryWrapper1 = {};
      categoryWrapper1.name = "OVELHAS";
      categoryWrapper1.quantity = parseInt(quantity1);
      ann.category.push(categoryWrapper1);

      const breedWrapper1 = {};
      breedWrapper1.name = "ANGUS";
      breedWrapper1.quantity = parseInt(quantity1);
      ann.breed.push(breedWrapper1);

      quantity2
        ? (ann.animalsQuantity = parseInt(quantity1) + parseInt(quantity2))
        : (ann.animalsQuantity = parseInt(quantity1));

      isReady = true;
    }
    console.log("Ready ?", isReady, "!");
    console.log("Assembled :", ann);
    isReady ? handleSubmit(ann) : console.log("Didn't submit");
  };

  async function handleSubmit(ann) {
    console.log("RECEIVED ANN", ann);
    setLoading(true);
    try {
      await api
        .post("/api/v1/announcements", JSON.stringify(ann))
        .then(() => props.navigation.navigate("Home"));
    } catch (e) {
      console.log("Erro:", e);
    }
    setLoading(false);
  }

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
              : [
                  setDynamic(true),
                  setCategory2(""),
                  setBreed2(""),
                  setDaysActive(2),
                ]
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
        <ContainerHor>
          <Label>Peso médio (kg)</Label>
          <InputQtt
            value={weight}
            onChangeText={(text) => setWeight(text.replace(/\D/g, ""))}
            placeholder={"em kg"}
            maxLength={3}
            keyboardType={"numeric"}
          />
        </ContainerHor>
        {dynamic ? null : (
          <ContainerQtt>
            <Label>Preço por kg (R$)</Label>
            <View>
              <InvisibleInput
                value={price}
                onChangeText={(text) => setPrice(text.replace(/\D/g, ","))}
                maxLength={10}
                keyboardType={"numeric"}
              />
            </View>
          </ContainerQtt>
        )}
        <Line />
        <Label>Unidade Federativa e Município</Label>
        <ContainerQtt>
          <SelectorBG>
            <RNPickerSelect
              placeholder={{
                label: "───",
                value: null,
                color: general.styles.colors.light,
              }}
              value={state}
              style={pickerStyle}
              useNativeAndroidPickerStyle={false}
              onValueChange={(value) => [
                setState(value),
                setCityOptions(location.getStateCities(value)),
              ]}
              items={states}
            />
          </SelectorBG>
          <Text> </Text>
          <SelectorBG>
            <RNPickerSelect
              placeholder={{
                label: "───",
                value: null,
                color: general.styles.colors.light,
              }}
              value={city}
              style={pickerStyle}
              useNativeAndroidPickerStyle={false}
              onValueChange={(value) => setCity(value)}
              items={cityOptions}
            />
          </SelectorBG>
        </ContainerQtt>
        <SwitchSection>
          <Label>Dias em Anúncio</Label>
          <Slider
            minimumValue={2}
            maximumValue={dynamic ? 3 : 7}
            step={1}
            value={daysActive}
            onValueChange={(value) => setDaysActive(value)}
            style={{ width: "100%" }}
          />
          <Label>{daysActive.toString()}</Label>
        </SwitchSection>
      </Section>
      <Button onPress={() => submitValidator()}>
        {loading ? (
          <ActivityIndicator color="white" />
        ) : (
          <ButtonText>
            {category1 &&
            breed1 &&
            parseInt(quantity1) > 0 &&
            parseInt(weight) > 0 &&
            state &&
            city
              ? (!dynamic && parseInt(price) <= 0) ||
                (category2 && (!breed2 || !quantity2))
                ? general.strings.ANNOUNCEMENT.FILL.toUpperCase()
                : general.strings.ANNOUNCEMENT.PUBLISH.toUpperCase()
              : general.strings.ANNOUNCEMENT.FILL.toUpperCase()}
          </ButtonText>
        )}
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
