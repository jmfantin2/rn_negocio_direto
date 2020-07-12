import React, { createContext, useState, useContext } from "react";

const StepContext = createContext();

export default function StepProvider({ children }) {
  const [step, setStep] = useState(1);

  return (
    <StepContext.Provider
      value={{
        step,
        setStep,
      }}
    >
      {children}
    </StepContext.Provider>
  );
}

export function useStep() {
  const context = useContext(StepContext);
  if (!context) throw new Error("useStep must be used within a StepProvider");
  const { step, setStep } = context;
  return { step, setStep };
}
