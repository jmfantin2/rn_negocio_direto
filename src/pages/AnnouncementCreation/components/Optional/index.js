import React from "react";

import { OptionalBar, OptionalText } from "./styles";
import { useStep } from "../../context/Step";

export default function Optional() {
  const { step } = useStep(); // READ
  return (
    <>
      {step === 3 ? (
        <OptionalBar>
          <OptionalText>OPCIONAL</OptionalText>
        </OptionalBar>
      ) : null}
    </>
  );
}
