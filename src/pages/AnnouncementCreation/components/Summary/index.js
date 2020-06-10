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

import { useSubmition } from "../../context/Submition";

export default function Summary() {
  const { step } = useStep(); //READ

  const { video } = useVideo(); //READ
  const { dynamic } = useDynamic(); //READ

  const { mainCategory } = useMainCategory(); //READ
  const { mainBreed } = useMainBreed(); //READ
  const { mainQuantity } = useMainQuantity(); //READ
  const { mainObservations } = useMainObservations(); //READ

  const { otherCategory } = useOtherCategory(); //READ
  const { otherBreed } = useOtherBreed(); //READ
  const { otherQuantity } = useOtherQuantity(); //READ
  const { otherObservations } = useOtherObservations(); //READ

  const { averageWeight } = useAverageWeight(); //READ
  const { price } = usePrice(); //READ

  const { submitAllowed, allowSubmit } = useSubmition();

  useEffect(() => {
    allowSubmit(false);
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
      <Label>Vídeo{video ? "" : " ❓"}</Label>
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
          <Label>Categoria Principal ❓</Label>
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
          <Label>Detalhes da venda ❓</Label>
          <Description>Informações faltantes</Description>
        </>
      )}
      {!submitAllowed ? <Notice>Revise as informações!</Notice> : null}
    </Container>
  );
}
