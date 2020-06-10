import React, { useState, useEffect } from "react";

import { Container, Label, Description, Notice } from "./styles";

import { useStep } from "../../context/Step";

import { useVideo } from "../../context/Video";
import { useDynamic } from "../../context/Dynamic";

import { useMainCategory } from "../../context/MainCategory";
import { useMainBreed } from "../../context/MainBreed";
import { useMainQuantity } from "../../context/MainQuantity";
import { useMainObservations } from "../../context/MainObservations";

import { useOtherCategory } from "../../context/OtherCategory";
import { useOtherBreed } from "../../context/OtherBreed";
import { useOtherQuantity } from "../../context/OtherQuantity";
import { useOtherObservations } from "../../context/OtherObservations";

import { useAverageWeight } from "../../context/AverageWeight";
import { usePrice } from "../../context/Price";

export default function Summary() {
  const { step } = useStep();

  const { video } = useVideo();
  const { dynamic } = useDynamic();

  const { mainCategory } = useMainCategory();
  const { mainBreed } = useMainBreed();
  const { mainQuantity } = useMainQuantity();
  const { mainObservations } = useMainObservations();

  const { otherCategory } = useOtherCategory();
  const { otherBreed } = useOtherBreed();
  const { otherQuantity } = useOtherQuantity();
  const { otherObservations } = useOtherObservations();

  const { averageWeight } = useAverageWeight();
  const { price } = usePrice();

  const [submitAllowed, allowSubmit] = useState(false);

  useEffect(() => {
    if (
      video &&
      mainQuantity &&
      mainCategory &&
      mainBreed &&
      mainObservations &&
      averageWeight
    ) {
      if ((!dynamic && price) || dynamic) {
        allowSubmit(true);
      }
    } // else keep blocked
  }, []);

  return (
    <Container>
      <Label>Tipo do Anúncio</Label>
      <Description>Preço{dynamic ? " Dinâmico" : " Fixo"}</Description>
      <Label>Vídeo{video ? "" : " ❌"}</Label>
      <Description>{video ? "Enviado" : "Não enviado"}</Description>
      {mainQuantity && mainCategory && mainBreed && mainObservations ? (
        <>
          <Label>Categoria Principal</Label>
          <Description>
            {mainQuantity +
              " x " +
              mainCategory.toUpperCase() +
              " (" +
              mainBreed
                .toUpperCase()
                .replace("CRUZAS", "CZ")
                .replace("ABERDEEN", "ABD")
                .replace("_", " ") +
              ")\n" +
              '"' +
              mainObservations +
              '"'}
          </Description>
        </>
      ) : (
        <>
          <Label>Categoria Principal ❌</Label>
          <Description>Informações faltantes</Description>
        </>
      )}
      <Label>Categoria Secundária</Label>
      {otherQuantity && otherCategory && otherBreed && otherObservations ? (
        <>
          <Description>
            {otherQuantity +
              " x " +
              otherCategory.toUpperCase() +
              " (" +
              otherBreed
                .toUpperCase()
                .replace("CRUZAS", "CZ")
                .replace("ABERDEEN", "ABD")
                .replace("_", " ") +
              ")\n" +
              '"' +
              otherObservations +
              '"'}
          </Description>
        </>
      ) : (
        <Description>
          Categoria não informada{"\n"}ou informações faltantes
        </Description>
      )}
      {averageWeight && (dynamic || price) ? (
        <>
          <Label>Detalhes da venda</Label>
          <Description>
            {"Peso médio " +
              averageWeight +
              " kg\n" +
              (price ? price + " reais por kg" : "")}
          </Description>
        </>
      ) : (
        <>
          <Label>Detalhes da venda ❌</Label>
          <Description>Informações faltantes</Description>
        </>
      )}
      {!submitAllowed ? <Notice>Revise as informações!</Notice> : null}
    </Container>
  );
}
