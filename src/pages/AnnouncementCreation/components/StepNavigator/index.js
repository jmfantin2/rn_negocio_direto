import React, { useState, useEffect } from "react";
import {
  ToastAndroid,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

import { withNavigation } from "react-navigation";

import api from "../../../../services/ann";

import { general } from "../../../../../assets/general";
import { Container, CenterContent, Label } from "./styles";

import { AntDesign } from "@expo/vector-icons";

import { useVideo } from "../../context/Video";
import { useDynamic } from "../../context/Dynamic";
import { useDaysActive } from "../../context/DaysActive";

import { useMainCategory } from "../../context/MainCategory";
import { useMainBreed } from "../../context/MainBreed";
import { useMainQuantity } from "../../context/MainQuantity";
import { useMainObservations } from "../../context/MainObservations";

import { useOtherCategory } from "../../context/OtherCategory";
import { useOtherBreed } from "../../context/OtherBreed";
import { useOtherQuantity } from "../../context/OtherQuantity";
import { useOtherObservations } from "../../context/OtherObservations";

import { useLocation } from "../../context/Location";
import { useAverageWeight } from "../../context/AverageWeight";
import { usePrice } from "../../context/Price";

import { useStep } from "../../context/Step";

const StepNavigator = (props) => {
  const { video } = useVideo(); //READ
  const { dynamic } = useDynamic(); //READ
  const { daysActive } = useDaysActive(); //READ

  const { mainCategory } = useMainCategory(); //READ
  const { mainBreed } = useMainBreed(); //READ
  const { mainQuantity } = useMainQuantity(); //READ
  const { mainObservations } = useMainObservations(); //READ

  const { otherCategory } = useOtherCategory(); //READ
  const { otherBreed } = useOtherBreed(); //READ
  const { otherQuantity } = useOtherQuantity(); //READ
  const { otherObservations } = useOtherObservations(); //READ

  const { state, city } = useLocation(); //READ
  const { averageWeight } = useAverageWeight(); //READ
  const { price } = usePrice(); //READ

  const { step, setStep } = useStep();
  const [loading, setLoading] = useState(false);
  const [submitAllowed, allowSubmit] = useState(false);

  useEffect(() => {
    if (
      video &&
      mainCategory &&
      mainBreed &&
      mainQuantity &&
      mainObservations &&
      averageWeight &&
      state &&
      city &&
      (dynamic || price)
    ) {
      allowSubmit(true);
    } else {
      allowSubmit(false);
    }
  });

  function printData() {
    console.log(
      "MainCategory: " +
        mainCategory +
        "\nMainBreed: " +
        mainBreed +
        "\nMainQuantity: " +
        mainQuantity +
        "\nMainObservations: " +
        mainObservations +
        "\nOtherCategory: " +
        otherCategory +
        "\nOtherBreed: " +
        otherBreed +
        "\nOtherQuantity: " +
        otherQuantity +
        "\nOtherObservations: " +
        otherObservations +
        "\nState: " +
        state +
        "\nCity: " +
        city +
        "\nAverageWeight: " +
        averageWeight +
        "\nPrice: " +
        price
    );
  }

  function handleSubmit() {
    printData();
    if (submitAllowed) {
      const categoryWrapper = {};
      const breedWrapper = {};
      let ann = {
        animalsQuantity: 0,
        observations: [],
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

      ann.location = { city, state };
      ann.weight = averageWeight;
      ann.endDate = daysActive;
      price ? (ann.currentPrice = price) : null;

      categoryWrapper.name = mainCategory;
      breedWrapper.name = mainBreed;
      categoryWrapper.quantity = parseInt(mainQuantity);
      breedWrapper.quantity = parseInt(mainQuantity);

      ann.category.push(categoryWrapper);
      ann.breed.push(breedWrapper);
      ann.observations.push(mainObservations);
      ann.animalsQuantity = parseInt(mainQuantity);

      if (otherCategory && otherBreed && otherQuantity && otherObservations) {
        categoryWrapper.name = otherCategory;
        breedWrapper.name = otherBreed;
        categoryWrapper.quantity = parseInt(otherQuantity);
        breedWrapper.quantity = parseInt(otherQuantity);
        ann.category.push(categoryWrapper);
        ann.breed.push(breedWrapper);
        ann.animalsQuantity = ann.animalsQuantity + parseInt(otherQuantity);
        ann.observations.push(otherObservations);
      }

      sendData(ann);
      console.log("Data submited");
    } else {
      console.log("Failed Submition");
    }
  }

  async function sendData(announcement) {
    setLoading(true);
    try {
      await api
        .post("/api/v1/announcements", JSON.stringify(announcement))
        .then(() => [
          ToastAndroid.showWithGravity(
            "Anúncio publicado!",
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM
          ),
          props.navigation.goBack(),
        ]);
    } catch (e) {
      console.log("Erro:", e);
    }
    setLoading(false);
  }

  return (
    <Container>
      {step > 1 ? (
        <TouchableOpacity onPress={() => setStep(step - 1)}>
          <AntDesign
            name="leftcircleo"
            size={42}
            color={general.styles.colors.darkCyan}
          />
        </TouchableOpacity>
      ) : (
        <AntDesign
          name="leftcircleo"
          size={42}
          color={general.styles.colors.light}
        />
      )}
      <CenterContent>
        <Label>{step} de 5</Label>
      </CenterContent>
      {step < 5 ? (
        <TouchableOpacity onPress={() => setStep(step + 1)}>
          <AntDesign
            name="rightcircleo"
            size={42}
            color={general.styles.colors.darkCyan}
          />
        </TouchableOpacity>
      ) : loading ? (
        <ActivityIndicator
          size="large"
          color={general.styles.colors.darkCyan}
        />
      ) : submitAllowed ? (
        <TouchableOpacity onPress={() => handleSubmit()}>
          <AntDesign
            name="checkcircleo"
            size={42}
            color={general.styles.colors.businessGreen}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() =>
            ToastAndroid.showWithGravity(
              "Revise as informações!",
              ToastAndroid.LONG,
              ToastAndroid.BOTTOM
            )
          }
        >
          <AntDesign
            name="closecircleo"
            size={42}
            color={general.styles.colors.danger}
          />
        </TouchableOpacity>
      )}
    </Container>
  );
};

export default withNavigation(StepNavigator);
