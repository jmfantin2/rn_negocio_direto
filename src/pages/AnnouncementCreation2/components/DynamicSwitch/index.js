import React from "react";
import { Switch } from "react-native";
import { SwitchContainer, Label, Description } from "./styles";

import { useDynamic } from "../../context/Dynamic";

export default function DynamicSwitch() {
  const { dynamic, toggle } = useDynamic();

  return (
    <SwitchContainer>
      <Label>{dynamic ? "PREÇO DINÂMICO" : "PREÇO FIXO"}</Label>
      <Switch
        onValueChange={() => (dynamic ? toggle(false) : toggle(true))}
        value={dynamic}
        style={{ margin: 10 }}
      />
      <Description>
        {dynamic
          ? "Nessa opção, o valor do seu anúncio fica em aberto, aproveitando ao máximo o potencial de venda através da proposta dos compradores. Em preço dinâmico, você pode anunciar apenas uma categoria de gado por até 3 dias."
          : "Nessa opção, o valor mínimo desejado para o anúncio é determinado, mas pode não ser definitivo mesmo se a venda for concretizada. Em preço fixo, você pode anunciar por até 7 dias e declarar duas categorias de gado."}
      </Description>
    </SwitchContainer>
  );
}
