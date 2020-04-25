/* Se precisar dar manutenção nisso, me chama - jmlerina@gmail.com */
import React, { useState, useEffect } from "react";
import { TouchableOpacity, Switch, Text, Alert, View } from "react-native";
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
  VLabel,
  Line,
  Divider,
  Section,
  SelectorBG,
  SwitchSection,
  Description,
  ContainerQtt,
  InputQtt,
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
  const [quantity1, setQuantity1] = useState("1");
  const [quantity2, setQuantity2] = useState("1");

  // for variants to show up
  const [variants1, setVariants1] = useState([]);
  const [variants2, setVariants2] = useState([]);

  //for setting variants to be sold
  const [variant1Qtt, setVariant1Qtt] = useState("1");
  const [variant2Qtt, setVariant2Qtt] = useState("1");

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

  const isSubmitReady = () => {
    // se der falso, avisa pra completar.
    let ann = {
      category: [],
      breed: [],
    };
    // let category = [];
    // let breed = [];
    // let ageRange = "5y-10y";
    // let weight = "150";
    // let location = "Erechim (RS)";
    // let endDate = "Mar 25 2015";
    // let observations = ["obs1", "obs2"];

    let categoryWrapper = {};
    let breedWrapper = {};
    let ready = false;

    if (category1 && breed1 && quantity1) {
      // all right for first category
      if (category2) {
        // some complementary category was chosen
        if (!breed2 || !quantity2) {
          // information missing for second category
          // stop right there...
          return ready;
        } else {
          //information complete for second category
          categoryWrapper.name = category2;
          categoryWrapper.quantity = quantity2;
          ann.category.push(categoryWrapper);

          breedWrapper.name = breed2;
          breedWrapper.quantity = quantity2;
          ann.breed.push(breedWrapper);
        }
      }

      categoryWrapper.name = category1;
      categoryWrapper.quantity = quantity1;
      ann.category.push(categoryWrapper);

      breedWrapper.name = breed1;
      breedWrapper.quantity = quantity1;
      ann.breed.push(breedWrapper);

      ready = true;
    }
    console.log(ann);
    return ready;
  };

  const VariantComponent = () => {
    const [quantities, setQuantities] = useState([]);
    const updateQuantity = () => {};
    return (
      <>
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
                value={""}
                onChangeText={(text) =>
                  console.log("Quantity for", v.case, "( key", v.key, ")", text)
                }
                placeholder={quantity1 ? quantity1 + " ou menos" : "0"}
                maxLength={3}
                keyboardType={"numeric"}
              />
            </ContainerQtt>
          </View>
        ))}
      </>
    );
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
            {/* Here things get a little insane */}
            <VariantComponent />
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
              </>
            ) : null}
          </>
        ) : null}
      </Section>
      <Button
        // onPress={() => {handleSubmit(props), console.warn(props.errors)}}
        onPress={() => isSubmitReady()}
      >
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
