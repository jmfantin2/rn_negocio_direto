import React, { useEffect, useState } from "react";

import { getStateCities } from "./helpers";

import { useLocation } from "../../context/Location";

import { Label, Input } from "./styles";

export default function LocationInputs() {
  const { state, setState, city, setCity } = useLocation();
  const [cityOptions, setCityOptions] = useState([]);

  useEffect(() => {
    setCityOptions(getStateCities(state));
    setCity("");
  }, [state]);

  return (
    <>
      <Label>Estado</Label>
      <Input
        multiline={true}
        value={state}
        onChangeText={(text) => setState(text)}
      />
      <Label>Cidade</Label>
      <Input
        multiline={true}
        value={city}
        onChangeText={(text) => setCity(text)}
      />
    </>
  );
}

const BRAZILIAN_STATES = [
  { label: "Acre", value: "Acre" },
  { label: "Alagoas", value: "Alagoas" },
  { label: "Amapá", value: "Amapá" },
  { label: "Amazonas", value: "Amazonas" },
  { label: "Bahia", value: "Bahia" },
  { label: "Ceará", value: "Ceará" },
  { label: "Destrito Federal", value: "Destrito Federal" },
  { label: "Espírito Santo", value: "Espírito Santo" },
  { label: "Goiás", value: "Goiás" },
  { label: "Maranhão", value: "Maranhão" },
  { label: "Mato Grosso", value: "Mato Grosso" },
  { label: "Mato Grosso do Sul", value: "Mato Grosso do Sul" },
  { label: "Minas Gerais", value: "Minas Gerais" },
  { label: "Pará", value: "Pará" },
  { label: "Paraíba", value: "Paraíba" },
  { label: "Paraná", value: "Paraná" },
  { label: "Pernambuco", value: "Pernambuco" },
  { label: "Piauí", value: "Piauí" },
  { label: "Rio de Janeiro", value: "Rio de Janeiro" },
  { label: "Rio Grande do Norte", value: "Rio Grande do Norte" },
  { label: "Rio Grande do Sul", value: "Rio Grande do Sul" },
  { label: "Rondônia", value: "Rondônia" },
  { label: "Roraima", value: "Roraima" },
  { label: "Santa Catarina", value: "Santa Catarina" },
  { label: "São Paulo", value: "São Paulo" },
  { label: "Sergipe", value: "Sergipe" },
  { label: "Tocantins", value: "Tocantins" },
];
